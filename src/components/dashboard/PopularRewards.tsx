import { Button } from '@/components/ui/button';
import { useState } from 'react';

const rewards = [
  {
    id: 1,
    name: 'Iced Mocha',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5',
  },
  {
    id: 2,
    name: 'Cookie Duo Black',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
  },
  {
    id: 3,
    name: 'Double Espresso',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a',
  },
  {
    id: 4,
    name: 'French Croissant',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
  },
  {
    id: 5,
    name: 'Espresso',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a',
  },
];

export function PopularRewards() {
  const [popular, setPopular] = useState(3); // Initially, we show 5 rewards

  const handleViewAllClick = () => {
    if(popular==3){
    setPopular(rewards.length);} // Show all rewards when 'View all' is clicked
    else setPopular( 3)
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-[#6F4E37]">Popular Rewards</h3>
        <Button variant="link" className="text-[#2E8B57]" onClick={handleViewAllClick}>
          View all
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {rewards.slice(0, popular).map((reward) => (
          <div
            key={reward.id}
            className="bg-[#FFF5E1] rounded-xl p-4 flex flex-col items-center"
          >
            <img
              src={reward.image}
              alt={reward.name}
              className="w-24 h-24 object-cover rounded-lg mb-3"
            />
            <h4 className="text-sm font-semibold text-[#6F4E37] text-center">
              {reward.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
