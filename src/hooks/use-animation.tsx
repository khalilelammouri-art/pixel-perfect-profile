import { useEffect, useRef, useState } from 'react';

type AnimationType = 
  | 'fade-in'
  | 'slide-in-left'
  | 'slide-in-right'
  | 'slide-in-up'
  | 'slide-in-down'
  | 'scale-up'
  | 'rotate-in'
  | 'float'
  | 'bounce'
  | 'glow-expand';

interface UseAnimationOptions {
  type: AnimationType;
  duration?: number;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export function useAnimation(options: UseAnimationOptions) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.once, options.threshold]);

  const animationClass = isVisible ? `animate-${options.type}` : 'opacity-0';
  const style = {
    '--animation-duration': `${options.duration ?? 0.6}s`,
    '--animation-delay': `${options.delay ?? 0}s`,
  } as React.CSSProperties;

  return { ref, animationClass, style };
}

export function AnimatedText({
  text,
  type = 'fade-in',
  duration = 0.6,
  delay = 0,
}: {
  text: string;
  type?: AnimationType;
  duration?: number;
  delay?: number;
}) {
  return (
    <span
      className={`inline-block animate-${type}`}
      style={{
        '--animation-duration': `${duration}s`,
        '--animation-delay': `${delay}s`,
      } as React.CSSProperties}
    >
      {text}
    </span>
  );
}

export function AnimatedElement({
  children,
  type = 'fade-in',
  duration = 0.6,
  delay = 0,
  once = true,
  className = '',
}: {
  children: React.ReactNode;
  type?: AnimationType;
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}) {
  const { ref, animationClass } = useAnimation({
    type,
    duration,
    delay,
    once,
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClass} ${className}`}
      style={{
        '--animation-duration': `${duration}s`,
        '--animation-delay': `${delay}s`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
