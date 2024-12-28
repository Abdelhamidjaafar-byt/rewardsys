import { useState } from 'react';
import { RewardCategories } from '@/components/rewards/RewardCategories';
import { RewardsList } from '@/components/rewards/RewardsList';
import { AddRewardDialog } from '@/components/rewards/AddRewardDialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function RewardsPage() {
  const [isAddRewardOpen, setIsAddRewardOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-georgia font-bold text-[#6F4E37]">Rewards Management</h1>
        <Button 
          onClick={() => setIsAddRewardOpen(true)}
          className="bg-[#2E8B57] hover:bg-[#2E8B57]/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Reward
        </Button>
      </div>

      <RewardCategories />
      <RewardsList />
      
      <AddRewardDialog 
        open={isAddRewardOpen} 
        onOpenChange={setIsAddRewardOpen}
      />
    </div>
  );
}