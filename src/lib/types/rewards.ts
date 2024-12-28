export type RewardCategory = 'coffee' | 'snacks' | 'merch';

export interface Reward {
  id: number;
  name: string;
  image: string;
  points: number;
  category: RewardCategory;
  description?: string;
}