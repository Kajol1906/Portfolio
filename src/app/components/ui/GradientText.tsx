import { cn } from './utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  subtle?: boolean;
}

export function GradientText({ children, className, subtle = false }: GradientTextProps) {
  return (
    <span 
      className={cn(
        "inline-block text-transparent bg-clip-text",
        subtle 
          ? "bg-gradient-to-r from-zinc-200 to-zinc-500" 
          : "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400",
        className
      )}
    >
      {children}
    </span>
  );
}
