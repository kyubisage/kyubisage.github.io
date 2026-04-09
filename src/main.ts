import { PHOTOS, CATEGORIES, type Photo, type Category } from './photos.js';

// ─── CURSOR ────────────────────────────────────────────────────────
function initCursor(): void {
  const cursor = document.createElement('div');
  cursor.id = 'cursor';
  const ring = document.createElement('div');
  ring.id = 'cursor-ring';
  document.body.append(cursor, ring);

  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animateRing(): void {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .photo-item, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// ─── LOADER ────────────────────────────────────────────────────────
function initLoader(): void {
  const loader = document.getElementById('loader')!;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1400);
  });
}

// ─── INTERSECTION OBSERVER ─────────────────────────────────────────
function initReveal(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.photo-item').forEach((el, i) => {
    (el as HTMLElement).style.transitionDelay = `${(i % 6) * 0.06}s`;
    observer.observe(el);
  });
}

// ─── GALLERY ───────────────────────────────────────────────────────
let lightboxIndex = 0;
let filteredPhotos: Photo[] = [...PHOTOS];

function buildGallery(): void {
  const grid = document.querySelector('.photo-grid')!;
  grid.innerHTML = '';

  PHOTOS.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = `photo-item ${photo.orientation}`;
    item.dataset.category = photo.category;
    item.dataset.index = String(index);

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = 'lazy';
    img.decoding = 'async';

    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay';

    if (photo.title) {
      const title = document.createElement('div');
      title.className = 'photo-title';
      title.textContent = photo.title;
      overlay.appendChild(title);
    }

    const meta = document.createElement('div');
    meta.className = 'photo-meta';
    meta.textContent = [photo.category, photo.year].filter(Boolean).join(' — ');
    overlay.appendChild(meta);

    item.append(img, overlay);
    item.addEventListener('click', () => openLightbox(index));
    grid.appendChild(item);
  });
}

function applyFilter(category: Category): void {
  filteredPhotos = category === 'all' ? [...PHOTOS] : PHOTOS.filter(p => p.category === category);

  document.querySelectorAll('.photo-item').forEach(el => {
    const item = el as HTMLElement;
    const cat = item.dataset.category as Category;
    if (category === 'all' || cat === category) {
      item.classList.remove('hidden-filter');
    } else {
      item.classList.add('hidden-filter');
    }
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', (btn as HTMLElement).dataset.filter === category);
  });
}

function buildFilterBar(): void {
  const bar = document.getElementById('filter-bar')!;
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'all' ? ' active' : '');
    btn.dataset.filter = cat;
    btn.innerHTML = `<span>${cat}</span>`;
    btn.addEventListener('click', () => applyFilter(cat));
    bar.appendChild(btn);
  });
}

// ─── LIGHTBOX ──────────────────────────────────────────────────────
function openLightbox(globalIndex: number): void {
  const lightbox = document.getElementById('lightbox')!;
  lightboxIndex = filteredPhotos.findIndex(p => p.id === PHOTOS[globalIndex].id);
  if (lightboxIndex === -1) lightboxIndex = 0;
  showLightboxPhoto();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(): void {
  const lightbox = document.getElementById('lightbox')!;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function showLightboxPhoto(): void {
  const photo = filteredPhotos[lightboxIndex];
  if (!photo) return;

  const img = document.getElementById('lightbox-img') as HTMLImageElement;
  const title = document.querySelector('.lightbox-caption-title')!;
  const meta = document.querySelector('.lightbox-caption-meta')!;
  const counter = document.querySelector('.lightbox-counter')!;

  img.style.opacity = '0';
  img.style.transform = 'scale(0.97)';

  setTimeout(() => {
    img.src = photo.src;
    img.alt = photo.alt;
    title.textContent = photo.title ?? '';
    meta.textContent = [photo.category, photo.year].filter(Boolean).join(' — ');
    counter.textContent = `${lightboxIndex + 1} / ${filteredPhotos.length}`;

    img.onload = () => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    };
  }, 100);

  img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

function lightboxNav(dir: 1 | -1): void {
  lightboxIndex = (lightboxIndex + dir + filteredPhotos.length) % filteredPhotos.length;
  showLightboxPhoto();
}

function buildLightbox(): void {
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.innerHTML = `
    <div class="lightbox-inner">
      <button class="lightbox-close" id="lb-close" aria-label="Close">✕</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous">‹</button>
      <div class="lightbox-img-wrap">
        <img id="lightbox-img" src="" alt="" />
        <div class="lightbox-caption">
          <span class="lightbox-caption-title"></span>
          <span class="lightbox-caption-meta"></span>
        </div>
      </div>
      <button class="lightbox-nav lightbox-next" aria-label="Next">›</button>
      <span class="lightbox-counter"></span>
    </div>
  `;
  document.body.appendChild(lb);

  document.getElementById('lb-close')!.addEventListener('click', closeLightbox);
  lb.querySelector('.lightbox-prev')!.addEventListener('click', () => lightboxNav(-1));
  lb.querySelector('.lightbox-next')!.addEventListener('click', () => lightboxNav(1));
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  });

  // Touch swipe
  let touchStartX = 0;
  lb.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
  lb.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) lightboxNav(diff > 0 ? 1 : -1);
  });
}

// ─── HTML STRUCTURE ────────────────────────────────────────────────
function buildHTML(): void {
  document.getElementById('app')!.innerHTML = `
    <!-- LOADER -->
    <div id="loader">
      <div class="loader-name">TJ</div>
      <div class="loader-line"></div>
    </div>

    <!-- CURSOR -->

    <!-- NAV -->
    <nav>
      <div class="nav-logo">T<span>J</span></div>
      <ul class="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="https://instagram.com/the_dark_string" target="_blank" rel="noopener">Instagram</a></li>
      </ul>
    </nav>

    <!-- HERO -->
    <section id="hero">
      <div class="hero-bg"></div>
      <div class="hero-grid-lines"></div>
      <div class="hero-eyebrow">Photography Portfolio</div>
      <h1 class="hero-title">THE<br><em>DARK</em><br>STRING</h1>
      <div class="hero-sub">
        <p>Capturing the spaces between light and shadow, the moments between silence and sound.</p>
        <div class="hero-scroll-hint">
          <div class="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee-wrap">
      <div class="marquee-track">
        <span>Portrait</span><span class="accent">—</span>
        <span>Street</span><span class="accent">—</span>
        <span>Nature</span><span class="accent">—</span>
        <span>Abstract</span><span class="accent">—</span>
        <span>Documentary</span><span class="accent">—</span>
        <span>@the_dark_string</span><span class="accent">—</span>
        <span>Portrait</span><span class="accent">—</span>
        <span>Street</span><span class="accent">—</span>
        <span>Nature</span><span class="accent">—</span>
        <span>Abstract</span><span class="accent">—</span>
        <span>Documentary</span><span class="accent">—</span>
        <span>@the_dark_string</span><span class="accent">—</span>
      </div>
    </div>

    <!-- WORK -->
    <section id="work">
      <div class="section-header">
        <div>
          <span class="section-label">Selected Work</span>
          <h2 class="section-title">Portfolio</h2>
        </div>
      </div>
      <div id="filter-bar"></div>
      <div id="gallery">
        <div class="photo-grid"></div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about">
      <div class="about-text">
        <h2>About<br>the Artist</h2>
        <p>TJ is a photographer and visual storyteller drawn to the edges — the uncertain light of dusk, the texture of forgotten spaces, the gaze that holds more than it reveals.</p>
        <p>Working across portrait, street, and documentary forms, the work lives where mood meets moment.</p>
        <div class="about-stats">
          <div>
            <span class="stat-num">${PHOTOS.length}</span>
            <span class="stat-label">Works</span>
          </div>
          <div>
            <span class="stat-num">${new Set(PHOTOS.map(p => p.category)).size}</span>
            <span class="stat-label">Genres</span>
          </div>
          <div>
            <span class="stat-num">${Math.max(...PHOTOS.map(p => p.year ?? 2024)) - Math.min(...PHOTOS.map(p => p.year ?? 2024)) + 1}+</span>
            <span class="stat-label">Years Active</span>
          </div>
        </div>
        <a href="https://instagram.com/the_dark_string" target="_blank" rel="noopener" class="instagram-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          @the_dark_string
        </a>
      </div>
      <div class="about-visual">
        <div class="about-img-frame">
          <div class="about-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
            <span>Add your photo here</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="footer-logo">TJ</div>
      <span class="footer-copy">© ${new Date().getFullYear()} TJ. All rights reserved.</span>
      <a href="https://instagram.com/the_dark_string" target="_blank" rel="noopener" class="footer-ig">
        @the_dark_string
      </a>
    </footer>
  `;
}

// ─── INIT ──────────────────────────────────────────────────────────
function init(): void {
  buildHTML();
  buildLightbox();
  buildFilterBar();
  buildGallery();
  initLoader();
  initCursor();

  // Stagger photo reveals on scroll
  requestAnimationFrame(() => {
    initReveal();
  });
}

init();
