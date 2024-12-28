import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { cn } from '@/lib/utils';

interface PointsCardProps {
  title: string;
  points: number;
  max: number;
  variant: 'redeem' | 'reward';
}

export function PointsCard({ title, points, max, variant }: PointsCardProps) {
  const percentage = (points / max) * 100;
  
  const colors = {
    redeem: {
      text: '#2E8B57',
      path: '#2E8B57',
    },
    reward: {
      text: '#FF5151',
      path: '#FF5151',
    },
  };

  return (
    <div className="bg-[#FFF5E1] rounded-xl p-6 flex items-center gap-4">
      <div className="flex-1">
        <h3 className={cn(
          "text-lg font-semibold mb-1",
          variant === 'redeem' ? 'text-[#2E8B57]' : 'text-[#FF5151]'
        )}>
          {title}
        </h3>
        <p className="text-sm text-gray-600">this week</p>
      </div>
      <div className="w-16">
        <CircularProgressbar
          value={percentage}
          text={`${points}`}
          styles={buildStyles({
            textSize: '24px',
            pathColor: colors[variant].path,
            textColor: colors[variant].text,
            trailColor: '#E6E6E6',
          })}
        />
      </div>
    </div>
  );
}