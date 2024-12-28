import { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { Reward } from '@/lib/types/rewards';

interface EditRewardDialogProps {
  reward: Reward | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (reward: Reward) => void;
}

export function EditRewardDialog({ reward, open, onOpenChange, onSave }: EditRewardDialogProps) {
  if (!reward) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#6F4E37] font-georgia">
            Edit Reward
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="edit-image">Image</Label>
            <div className="flex items-center gap-4">
              <img 
                src={reward.image} 
                alt={reward.name} 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <Input id="edit-image" type="file" accept="image/*" /> 
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="edit-name">Reward Name</Label>
            <Input 
              id="edit-name" 
              defaultValue={reward.name}
              placeholder="Enter reward name" 
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="edit-category">Category</Label>
            <Select defaultValue={reward.category}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="coffee">Coffee</SelectItem>
                <SelectItem value="snacks">Snacks</SelectItem>
                <SelectItem value="merch">Merchandise</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="edit-points">Points Required</Label>
            <Input
              id="edit-points"
              type="number"
              defaultValue={reward.points}
              placeholder="Enter points required"
              min="0"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="edit-description">Description</Label>
            <Textarea
              id="edit-description"
              defaultValue={reward.description}
              placeholder="Enter reward description"
              className="h-20"
            />
          </div>
        </div>
        
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={() => {
              // In a real app, you'd collect form data here
              onSave(reward);
              onOpenChange(false);
            }}
            className="bg-[#6F4E37] hover:bg-[#6F4E37]/90"
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}