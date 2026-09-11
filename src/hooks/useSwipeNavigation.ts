import { useEffect, useRef } from 'react';

interface SwipeConfig {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  threshold?: number;
  preventInsideInteractive?: boolean;
}

export function useSwipeNavigation<T extends HTMLElement>({ 
  onSwipeLeft, 
  onSwipeRight, 
  threshold = 50, 
  preventInsideInteractive = true 
}: SwipeConfig) {
  const ref = useRef<T>(null);
  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (preventInsideInteractive) {
        let target = e.target as HTMLElement | null;
        while (target && target !== element) {
          const tag = target.tagName.toLowerCase();
          if (['button', 'a', 'select', 'input', 'textarea'].includes(tag)) {
            return;
          }
          if (target.style?.cursor === 'pointer' || target.classList?.contains('cursor-pointer') || target.classList?.contains('cursor-default')) {
            return;
          }
          if (target.closest && target.closest('button')) {
            return;
          }
          target = target.parentElement;
        }
      }

      touchStart.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now()
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      
      const dx = touchEndX - touchStart.current.x;
      const dy = touchEndY - touchStart.current.y;
      const dt = Date.now() - touchStart.current.time;
      
      touchStart.current = null;

      // Ignore slow swipes
      if (dt > 1000) return;

      // Must be mostly horizontal (dx > dy * 1.5) and exceed threshold
      if (Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > threshold) {
        if (dx > 0) {
          onSwipeRight();
        } else {
          onSwipeLeft();
        }
      }
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, threshold, preventInsideInteractive]);

  return ref;
}
