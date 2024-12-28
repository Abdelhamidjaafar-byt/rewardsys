import { Coffee, Cookie, ShoppingBag } from 'lucide-react';
import { REWARD_CATEGORIES } from '@/lib/constants/rewards';

const categoryIcons = {
  coffee: Coffee,
  snacks: Cookie,
  merch: ShoppingBag,
} as const;

export function RewardCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {REWARD_CATEGORIES.map((category) => {
        const Icon = categoryIcons[category.id];
        
        return (
          <div
            key={category.id}
            className="relative h-48 rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center">
                <Icon className="w-8 h-8 text-white mb-2 mx-auto" />
                <h3 className="text-xl font-georgia font-bold text-white">
                  {category.name}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}