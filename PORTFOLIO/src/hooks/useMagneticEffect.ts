import { useEffect, useRef } from 'react';

export function useMagneticEffect(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const xTo = (x: number) => {
      element.style.transform = `translateX(${x}px) translateY(${element.dataset.y || 0}px)`;
      element.dataset.x = x.toString();
    };
    
    const yTo = (y: number) => {
      element.style.transform = `translateX(${element.dataset.x || 0}px) translateY(${y}px)`;
      element.dataset.y = y.toString();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // Gentle movement (multiply by a small factor)
      xTo(x * 0.2);
      yTo(y * 0.2);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref]);
}
