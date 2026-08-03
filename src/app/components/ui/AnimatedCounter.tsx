import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  plus?: boolean;
}

export function AnimatedCounter({ value, duration = 2000, plus = false }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useScrollReveal();
  const countRef = useRef(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeProgress * value);
        
        if (currentCount !== countRef.current) {
          countRef.current = currentCount;
          setCount(currentCount);
        }
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{plus && '+'}
    </span>
  );
}
