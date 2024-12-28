import { Button } from '@/components/ui/button';
import { useState } from 'react';

const customers = [
  {
    id: 1,
    name: 'Mike',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    id: 2,
    name: 'Emily',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: 3,
    name: 'Rachel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
  {
    id: 4,
    name: 'Chandler',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
  {
    id: 3,
    name: 'Rachel',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
  {
    id: 4,
    name: 'Chandler',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
];

export function LoyalCustomers() {
  const [popular, setPopular] = useState(3); // Initially, we show 5 rewards

  const handleViewAllClick = () => {
    if(popular==3){
    setPopular(customers.length);} // Show all rewards when 'View all' is clicked
    else setPopular( 3)
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-[#6F4E37]">Loyal Customers</h3>
        <Button variant="link" className="text-[#2E8B57]" onClick={handleViewAllClick}>
          View all
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {customers.slice(0, popular).map((customer) => (
          <div
            key={customer.id}
            className="bg-[#FFF5E1] rounded-xl p-4 flex flex-col items-center"
          >
            <img
              src={customer.image}
              alt={customer.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#2E8B57]"
            />
            <h4 className="mt-2 text-sm font-semibold text-[#6F4E37]">
              {customer.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}