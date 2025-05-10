
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export default function ProgressBar({ current, total, className }: ProgressBarProps) {
  const percentage = Math.max(0, Math.min(100, (current / total) * 100));

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between mb-1 text-xs">
        <span className="text-muted-foreground">Question {current} of {total}</span>
        <span className="text-muted-foreground">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full h-2 bg-muted/40 rounded-full overflow-hidden">
        <div 
          className="h-full bg-neon-gradient rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
