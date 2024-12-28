export const REWARD_CATEGORIES = [
  {
    id: 'coffee',
    name: 'Coffee',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
  },
  {
    id: 'snacks',
    name: 'Snacks',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
  },
  {
    id: 'merch',
    name: 'Merch',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
  },
] as const;

export const INITIAL_REWARDS = [
  {
    id: 1,
    name: 'Iced Mocha',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5',
    points: 150,
    category: 'coffee',
  },
  {
    id: 2,
    name: 'Cookie Duo Black',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    points: 100,
    category: 'snacks',
  },
  {
    id: 3,
    name: 'Double Espresso',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a',
    points: 120,
    category: 'coffee',
  },
] as const;