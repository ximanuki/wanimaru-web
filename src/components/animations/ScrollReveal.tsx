import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  trigger?: string;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1.2,
  distance = 60,
  trigger,
  className = ''
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    // Initial state based on direction
    const getInitialState = () => {
      switch (direction) {
        case 'up':
          return { y: distance, opacity: 0 };
        case 'down':
          return { y: -distance, opacity: 0 };
        case 'left':
          return { x: distance, opacity: 0 };
        case 'right':
          return { x: -distance, opacity: 0 };
        case 'scale':
          return { scale: 0.8, opacity: 0 };
        case 'fade':
        default:
          return { opacity: 0 };
      }
    };

    // Final state
    const getFinalState = () => {
      switch (direction) {
        case 'up':
        case 'down':
          return { y: 0, opacity: 1 };
        case 'left':
        case 'right':
          return { x: 0, opacity: 1 };
        case 'scale':
          return { scale: 1, opacity: 1 };
        case 'fade':
        default:
          return { opacity: 1 };
      }
    };

    // Set initial state
    gsap.set(element, getInitialState());

    // Create animation
    const animation = gsap.to(element, {
      ...getFinalState(),
      duration: duration,
      ease: 'power3.out',
      delay: delay,
      scrollTrigger: {
        trigger: trigger || element,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
        markers: false, // Set to true for debugging
      }
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [direction, delay, duration, distance, trigger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}