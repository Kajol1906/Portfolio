import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { cn } from '../ui/utils';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  const { ref, isInView } = useScrollReveal(true, "-20%");

  return (
    <section id={id} className={cn("min-h-screen py-24 px-6 flex items-center justify-center relative", className)}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
