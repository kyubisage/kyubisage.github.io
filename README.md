# TJ — Photography Portfolio

A dark, cinematic photography portfolio built with TypeScript + Vite. Designed for GitHub Pages hosting.

## ✦ Features
- Custom animated cursor
- Smooth loader / entrance animations
- Filter bar (by category)
- Masonry-style responsive grid
- Lightbox with keyboard + swipe navigation
- Scroll-triggered photo reveals
- Marquee banner
- Zero dependencies at runtime

---

## 🖼 Adding Your Photos

Edit **`src/photos.ts`** and add entries to the `PHOTOS` array:

```ts
{
  id: '10',                          // Unique string ID
  src: 'photos/my-photo.jpg',        // Path relative to /public, or a full URL
  alt: 'Description for screen readers',
  category: 'portrait',              // 'portrait' | 'street' | 'nature' | 'abstract' | 'documentary'
  title: 'My Photo Title',           // Shown on hover and in lightbox
  year: 2025,
  orientation: 'portrait',          // 'portrait' | 'landscape' | 'square'
},
```

Place your image files in the **`public/photos/`** folder and reference them as `'photos/filename.jpg'`.

---

## 🗂 Categories

Current categories: `portrait`, `street`, `nature`, `abstract`, `documentary`

To add a new category, update the `CATEGORIES` array in `src/photos.ts`:
```ts
export const CATEGORIES: Category[] = ['all', 'portrait', 'street', 'nature', 'abstract', 'documentary', 'your-new-category'];
export type Category = 'all' | 'portrait' | 'street' | 'nature' | 'abstract' | 'documentary' | 'your-new-category';
```

---

## 🚀 Local Development

```bash
npm install
npm run dev
```

## 🏗 Build

```bash
npm run build
```

Output goes to `dist/`.

---

## 📦 Deploy to GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages → Source** → select **"GitHub Actions"**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` will build & deploy automatically

Your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## 🎨 Customisation

| File | What to change |
|------|---------------|
| `src/photos.ts` | Add / remove photos, categories |
| `src/styles.css` | Colors (CSS vars at top), fonts, layout |
| `src/main.ts` | About text, hero copy, stats |
| `index.html` | Page title, meta description |
