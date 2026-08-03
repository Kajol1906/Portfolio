import { ReactNode, useRef } from 'react';
import { motion } from 'motion/react';
import { useMagneticEffect } from '../../../hooks/useMagneticEffect';
import { cn } from '../ui/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'grey' | 'outline' | 'ghost';
  className?: string;
}

export function MagneticButton({ children, variant = 'primary', className, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  useMagneticEffect(ref);

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium transition-colors duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20",
    grey: "bg-zinc-800 text-white hover:bg-zinc-700 shadow-lg shadow-black/20",
    outline: "border border-white/20 text-white hover:bg-white/5",
    ghost: "text-white hover:bg-white/10"
  };

  return (
    <motion.button
      ref={ref}
      className={cn(baseStyles, variants[variant], className)}
      whileTap={{ scale: 0.95 }}
      {...props as any}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </motion.button>
  );
}
