import { useState } from 'react';
import { RewardCard } from './RewardCard';
import { EditRewardDialog } from './EditRewardDialog';
import { INITIAL_REWARDS } from '@/lib/constants/rewards';
import type { Reward } from '@/lib/types/rewards';

export function RewardsList() {
  const [editingReward, setEditingReward] = useState<Reward | null>(null);

  const handleEdit = (reward: Reward) => {
    setEditingReward(reward);
  };

  const handleSaveEdit = (updatedReward: Reward) => {
    console.log('Save edited reward:', updatedReward);
    setEditingReward(null);
  };

  const handleDelete = (id: number) => {
    console.log('Delete reward:', id);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-georgia font-semibold text-[#6F4E37]">
          Manage Rewards
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {INITIAL_REWARDS.map((reward) => (
          <RewardCard 
            key={reward.id} 
            reward={reward}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <EditRewardDialog
        reward={editingReward}
        open={!!editingReward}
        onOpenChange={(open) => !open && setEditingReward(null)}
        onSave={handleSaveEdit}
      />
    </div>
  );
}