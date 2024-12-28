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

interface AddRewardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddRewardDialog({ open, onOpenChange }: AddRewardDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#6F4E37] font-georgia">
            Add New Reward
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" accept="image/*" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="name">Reward Name</Label>
            <Input id="name" placeholder="Enter reward name" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className=' bg-white'>
                <SelectItem value="coffee">Coffee</SelectItem>
                <SelectItem value="snacks">Snacks</SelectItem>
                <SelectItem value="merch">Merchandise</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="points">Points Required</Label>
            <Input
              id="points"
              type="number"
              placeholder="Enter points required"
              min="0"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter reward description"
              className="h-20"
            />
          </div>
        </div>
        
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-[#2E8B57] hover:bg-[#2E8B57]/90" onClick={() => onOpenChange(false)}>
            Add Reward
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}