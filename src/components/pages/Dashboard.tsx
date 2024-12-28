import { PointsCard } from '@/components/dashboard/PointsCard';
import { SalesChart } from '@/components/dashboard/SalesChart';
import { PopularRewards } from '@/components/dashboard/PopularRewards';
import { LoyalCustomers } from '@/components/dashboard/LoyalCustomers';

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PointsCard
          title="Redeem Points"
          points={450}
          max={1000}
          variant="redeem"
        />
        <PointsCard
          title="Rewarded Points"
          points={950}
          max={1000}
          variant="reward"
        />
      </div>
      
      <SalesChart />
      
      <PopularRewards />
      
      <LoyalCustomers />
    </div>
  );
}