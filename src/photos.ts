export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: Category;
  title?: string;
  year?: number;
  orientation: 'landscape' | 'portrait' | 'square';
}

export type Category = 'all' | 'portrait' | 'street' | 'nature' | 'abstract' | 'documentary';

export const CATEGORIES: Category[] = ['all', 'portrait', 'street', 'nature', 'abstract', 'documentary'];

// ─── ADD YOUR PHOTOS HERE ────────────────────────────────────────────────────
// Place image files in /public/photos/ and reference them like: 'photos/your-image.jpg'
// Supported orientations: 'landscape' | 'portrait' | 'square'
// ──────────────────────────────────────────────────────────────────────────────
export const PHOTOS: Photo[] = [
  // Example entries — replace with your own photos:
  {
    id: '1',
    src: 'photos/1.jpg',
    alt: 'Portrait in shadows',
    category: 'portrait',
    title: 'Shadow Play',
    year: 2024,
    orientation: 'portrait',
  },
  {
    id: '2',
    src: 'photos/2.jpg',
    alt: 'City at night',
    category: 'street',
    title: 'After Midnight',
    year: 2024,
    orientation: 'landscape',
  },
  {
    id: '3',
    src: 'photos/3.jpg',
    alt: 'Forest mist',
    category: 'nature',
    title: 'Into the Haze',
    year: 2023,
    orientation: 'landscape',
  },
  {
    id: '4',
    src: 'photos/4.jpg',
    alt: 'Mountain peaks',
    category: 'nature',
    title: 'Ascent',
    year: 2023,
    orientation: 'landscape',
  },
  {
    id: '5',
    src: 'photos/5.jpg',
    alt: 'Abstract light',
    category: 'abstract',
    title: 'Frequency',
    year: 2024,
    orientation: 'portrait',
  },
  {
    id: '6',
    src: 'photos/6.jpg',
    alt: 'Street market',
    category: 'documentary',
    title: 'The Exchange',
    year: 2023,
    orientation: 'square',
  },
  {
    id: '7',
    src: 'photos/7.jpg',
    alt: 'Close portrait',
    category: 'portrait',
    title: 'Gaze',
    year: 2024,
    orientation: 'portrait',
  },
  {
    id: '8',
    src: 'photos/8.jpg',
    alt: 'Urban architecture',
    category: 'street',
    title: 'Grid',
    year: 2023,
    orientation: 'landscape',
  },
  {
    id: '9',
    src: 'photos/9.jpg',
    alt: 'Light leak',
    category: 'abstract',
    title: 'Bleed',
    year: 2024,
    orientation: 'landscape',
  },
];
