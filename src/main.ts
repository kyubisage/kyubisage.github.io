import { PHOTOS, CATEGORIES, type Photo, type Category } from './photos.js';

// ─── POETRY DATA ───────────────────────────────────────────────────
interface Poem {
  id: string;
  title: string;
  year: number;
  lines: string[];
  mood: string;
}

const POEMS: Poem[] = [
  {
    id: 'p1',
    title: 'Between Frames',
    year: 2024,
    mood: 'contemplative',
    lines: [
      'There is a silence that lives',
      'between the shutter and the light—',
      'a held breath,',
      'a decision made in silver.',
      '',
      'I have spent years',
      'learning how to wait',
      'for that breath to exhale.',
    ],
  },
  {
    id: 'p2',
    title: 'The Dark String',
    year: 2024,
    mood: 'introspective',
    lines: [
      'Pull the thread and everything unravels.',
      'Pull it again and something new begins.',
      '',
      'The string is always dark.',
      'The string is always there.',
      'It runs through every photograph',
      'I have ever taken,',
      'through every word',
      'I have ever written.',
    ],
  },
  {
    id: 'p3',
    title: 'Dusk Protocol',
    year: 2023,
    mood: 'melancholic',
    lines: [
      'At 6:47 the sky performs its nightly ritual:',
      'draining the colour back into the earth,',
      'leaving only the bones of light.',
      '',
      'I stand with my camera',
      'pretending I can stop it.',
    ],
  },
  {
    id: 'p4',
    title: 'On Forgetting',
    year: 2023,
    mood: 'tender',
    lines: [
      'Memory is not a photograph.',
      'It does not stay fixed.',
      '',
      'It breathes, shifts, burns at the edges,',
      'softens what was sharp,',
      'sharpens what was soft.',
      '',
      'That is why I carry a camera.',
      'That is why I keep writing.',
    ],
  },
  {
    id: 'p5',
    title: 'Still Life with Shadow',
    year: 2024,
    mood: 'quiet',
    lines: [
      'The shadow on the wall',
      'is more honest than the object casting it.',
      '',
      'It shows you only the outline,',
      'the essential shape,',
      'stripped of colour and pretense.',
      '',
      'I want to write like a shadow.',
    ],
  },
];

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

// ─── POETRY SECTION ────────────────────────────────────────────────
function buildPoetrySection(): void {
  const section = document.getElementById('poetry-section')!;
  section.innerHTML = '';
  POEMS.forEach((poem, i) => {
    const card = document.createElement('article');
    card.className = 'poem-card';
    card.style.animationDelay = `${i * 0.1}s`;

    const header = document.createElement('div');
    header.className = 'poem-header';
    header.innerHTML = `
      <h3 class="poem-title">${poem.title}</h3>
      <div class="poem-meta">
        <span class="poem-year">${poem.year}</span>
        <span class="poem-mood">${poem.mood}</span>
      </div>
    `;

    const body = document.createElement('div');
    body.className = 'poem-body';
    body.innerHTML = poem.lines.map(line =>
      line === '' ? '<br>' : `<p>${line}</p>`
    ).join('');

    card.append(header, body);
    section.appendChild(card);
  });
}

// ─── MUSIC PLAYER ──────────────────────────────────────────────────
function buildMusicPlayer(): void {
  const player = document.createElement('div');
  player.id = 'music-player';
  player.innerHTML = `
    <div class="music-inner">
      <div class="music-info">
        <div class="music-pulse">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="music-text">
          <span class="music-track">Ambient — Dark String</span>
          <span class="music-status">Paused</span>
        </div>
      </div>
      <button class="music-btn" id="music-toggle" aria-label="Play ambient music">
        <svg class="icon-play" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5,3 19,12 5,21"/>
        </svg>
        <svg class="icon-pause" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="display:none">
          <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
        </svg>
      </button>
      <div class="music-volume">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
        <input type="range" id="music-volume" min="0" max="1" step="0.05" value="0.4" aria-label="Volume">
      </div>
    </div>
  `;
  document.body.appendChild(player);

  // Web Audio API — generate ambient drone
  let audioCtx: AudioContext | null = null;
  let masterGain: GainNode | null = null;
  let oscillators: OscillatorNode[] = [];
  let isPlaying = false;

  const toggle = document.getElementById('music-toggle')!;
  const statusEl = player.querySelector('.music-status')!;
  const playIcon = toggle.querySelector('.icon-play') as HTMLElement;
  const pauseIcon = toggle.querySelector('.icon-pause') as HTMLElement;
  const volumeSlider = document.getElementById('music-volume') as HTMLInputElement;
  const bars = player.querySelectorAll('.music-pulse span');

  function startAmbient(): void {
    audioCtx = new AudioContext();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = parseFloat(volumeSlider.value);
    masterGain.connect(audioCtx.destination);

    // Drone frequencies — open fifth + gentle harmonics
    const freqs = [55, 82.5, 110, 165, 220, 330];
    const detunes = [0, -4, 3, -2, 5, -3];

    freqs.forEach((freq, i) => {
      const osc = audioCtx!.createOscillator();
      const oscGain = audioCtx!.createGain();
      const filter = audioCtx!.createBiquadFilter();

      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      osc.detune.value = detunes[i];

      filter.type = 'lowpass';
      filter.frequency.value = 800;
      filter.Q.value = 1;

      oscGain.gain.value = 0.08 / (i + 1);

      // Slow amplitude modulation for breathing effect
      const lfo = audioCtx!.createOscillator();
      const lfoGain = audioCtx!.createGain();
      lfo.frequency.value = 0.05 + i * 0.02;
      lfoGain.gain.value = 0.03;
      lfo.connect(lfoGain);
      lfoGain.connect(oscGain.gain);
      lfo.start();

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(masterGain!);
      osc.start();
      oscillators.push(osc);
    });
  }

  function stopAmbient(): void {
    oscillators.forEach(o => { try { o.stop(); } catch(_) {} });
    oscillators = [];
    masterGain?.disconnect();
    audioCtx?.close();
    audioCtx = null;
    masterGain = null;
  }

  toggle.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      startAmbient();
      statusEl.textContent = 'Playing';
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      player.classList.add('playing');
      bars.forEach((b, i) => {
        (b as HTMLElement).style.animationPlayState = 'running';
        (b as HTMLElement).style.animationDelay = `${i * 0.15}s`;
      });
    } else {
      stopAmbient();
      statusEl.textContent = 'Paused';
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      player.classList.remove('playing');
      bars.forEach(b => {
        (b as HTMLElement).style.animationPlayState = 'paused';
      });
    }
  });

  volumeSlider.addEventListener('input', () => {
    if (masterGain) masterGain.gain.value = parseFloat(volumeSlider.value);
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

    <!-- NAV -->
    <nav>
      <div class="nav-logo">T<span>J</span></div>
      <ul class="nav-links">
        <li><a href="#photography">Photography</a></li>
        <li><a href="#poetry">Poetry</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="https://instagram.com/the_dark_string" target="_blank" rel="noopener">Instagram</a></li>
      </ul>
    </nav>

    <!-- HERO -->
    <section id="hero">
      <div class="hero-bg"></div>
      <div class="hero-grid-lines"></div>
      <div class="hero-center">
        <div class="hero-eyebrow">Photography &amp; Poetry</div>
        <h1 class="hero-title">TJ</h1>
        <div class="hero-sub-text">
          <p>Capturing the spaces between light and shadow,<br>the moments between silence and sound.</p>
        </div>
        <div class="hero-divider"></div>
        <div class="hero-tagline">The Dark String</div>
      </div>
      <div class="hero-scroll-hint">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee-wrap">
      <div class="marquee-track">
        <span>Photography</span><span class="accent">—</span>
        <span>Poetry</span><span class="accent">—</span>
        <span>Portrait</span><span class="accent">—</span>
        <span>Street</span><span class="accent">—</span>
        <span>Nature</span><span class="accent">—</span>
        <span>Verse</span><span class="accent">—</span>
        <span>@the_dark_string</span><span class="accent">—</span>
        <span>Photography</span><span class="accent">—</span>
        <span>Poetry</span><span class="accent">—</span>
        <span>Portrait</span><span class="accent">—</span>
        <span>Street</span><span class="accent">—</span>
        <span>Nature</span><span class="accent">—</span>
        <span>Verse</span><span class="accent">—</span>
        <span>@the_dark_string</span><span class="accent">—</span>
      </div>
    </div>

    <!-- PHOTOGRAPHY -->
    <section id="photography">
      <div class="section-header">
        <div>
          <span class="section-label">Visual Work</span>
          <h2 class="section-title">Photography</h2>
        </div>
      </div>
      <div id="filter-bar"></div>
      <div id="gallery">
        <div class="photo-grid"></div>
      </div>
    </section>

    <!-- POETRY -->
    <section id="poetry">
      <div class="section-header">
        <div>
          <span class="section-label">Written Work</span>
          <h2 class="section-title">Poetry</h2>
        </div>
        <p class="section-desc">Words from the same dark string.</p>
      </div>
      <div id="poetry-section" class="poetry-grid"></div>
    </section>

    <!-- ABOUT -->
    <section id="about">
      <div class="about-text">
        <h2>About<br>the Artist</h2>
        <p>TJ is a photographer and poet drawn to the edges — the uncertain light of dusk, the texture of forgotten spaces, the gaze that holds more than it reveals.</p>
        <p>Working across portrait, street, and documentary forms, and through verse, the work lives where mood meets moment.</p>
        <div class="about-stats">
          <div>
            <span class="stat-num">${PHOTOS.length}</span>
            <span class="stat-label">Photos</span>
          </div>
          <div>
            <span class="stat-num">${POEMS.length}</span>
            <span class="stat-label">Poems</span>
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
  buildPoetrySection();
  buildMusicPlayer();
  initLoader();
  initCursor();

  requestAnimationFrame(() => {
    initReveal();
  });
}

init();
