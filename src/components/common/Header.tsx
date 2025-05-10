
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn("relative py-6", className)}>
      <div className="container flex flex-col items-center justify-between text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text animate-glow">
          Guidance AI
        </h1>
        <div className="mt-2 text-muted-foreground text-sm md:text-base">
          Find your ideal career path in tech development
        </div>
      </div>
    </header>
  );
}
