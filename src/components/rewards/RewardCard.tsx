import { Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import type { Reward } from '@/lib/types/rewards';

interface RewardCardProps {
  reward: Reward;
  onEdit: (reward: Reward) => void;
  onDelete: (id: number) => void;
}

export function RewardCard({ reward, onEdit, onDelete }: RewardCardProps) {
  return (
    <div className="bg-[#FFF5E1] rounded-xl p-4 relative group">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 opacity-1 group-hover:opacity-100 transition-opacity"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-white'>
          <DropdownMenuItem onClick={() => onEdit(reward)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onDelete(reward.id)}
            className="text-red-600"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <img
        src={reward.image}
        alt={reward.name}
        className="w-full aspect-square object-cover rounded-lg mb-3"
      />
      <h4 className="text-sm font-semibold text-[#6F4E37] text-center">
        {reward.name}
      </h4>
      <p className="text-xs text-[#6F4E37]/60 text-center">
        {reward.points} points
      </p>
    </div>
  );
}