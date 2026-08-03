import { cn } from './utils';

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        "bg-white/5 border border-white/10 text-zinc-300",
        "transition-colors hover:bg-white/10 hover:text-white cursor-default",
        className
      )}
    >
      {children}
    </span>
  );
}
