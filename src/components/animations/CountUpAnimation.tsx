import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CountUpAnimationProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  triggerOnce?: boolean;
}

export default function CountUpAnimation({
  end,
  start = 0,
  duration = 2.0,
  suffix = '',
  prefix = '',
  className = '',
  triggerOnce = true
}: CountUpAnimationProps) {
  const [displayNumber, setDisplayNumber] = useState(start);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    const animation = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      end: 'bottom 15%',
      onEnter: () => {
        if (triggerOnce && hasTriggered.current) return;
        
        const obj = { value: start };
        
        gsap.to(obj, {
          value: end,
          duration: duration,
          ease: 'power2.out',
          onUpdate: () => {
            setDisplayNumber(Math.round(obj.value));
          },
          onComplete: () => {
            setDisplayNumber(end);
          }
        });
        
        hasTriggered.current = true;
      },
      onLeaveBack: () => {
        if (!triggerOnce) {
          setDisplayNumber(start);
          hasTriggered.current = false;
        }
      }
    });

    return () => {
      animation.kill();
    };
  }, [end, start, duration, triggerOnce]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{displayNumber.toLocaleString()}{suffix}
    </span>
  );
}