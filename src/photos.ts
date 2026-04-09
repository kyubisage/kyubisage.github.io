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
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
    alt: 'Portrait in shadows',
    category: 'portrait',
    title: 'Shadow Play',
    year: 2024,
    orientation: 'portrait',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80',
    alt: 'City at night',
    category: 'street',
    title: 'After Midnight',
    year: 2024,
    orientation: 'landscape',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200&q=80',
    alt: 'Forest mist',
    category: 'nature',
    title: 'Into the Haze',
    year: 2023,
    orientation: 'landscape',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    alt: 'Mountain peaks',
    category: 'nature',
    title: 'Ascent',
    year: 2023,
    orientation: 'landscape',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=1200&q=80',
    alt: 'Abstract light',
    category: 'abstract',
    title: 'Frequency',
    year: 2024,
    orientation: 'portrait',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1200&q=80',
    alt: 'Street market',
    category: 'documentary',
    title: 'The Exchange',
    year: 2023,
    orientation: 'square',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=1200&q=80',
    alt: 'Close portrait',
    category: 'portrait',
    title: 'Gaze',
    year: 2024,
    orientation: 'portrait',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?w=1200&q=80',
    alt: 'Urban architecture',
    category: 'street',
    title: 'Grid',
    year: 2023,
    orientation: 'landscape',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1532408840957-031d8034aeef?w=1200&q=80',
    alt: 'Light leak',
    category: 'abstract',
    title: 'Bleed',
    year: 2024,
    orientation: 'landscape',
  },
];
