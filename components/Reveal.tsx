import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = '100%', 
  delay = 0, 
  className = "",
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
      if (!isVisible) {
          if (direction === 'up') return 'translateY(40px)';
          if (direction === 'left') return 'translateX(-40px)';
          if (direction === 'right') return 'translateX(40px)';
      }
      return 'translate(0)';
  };

  return (
    <div ref={ref} className={`${className}`} style={{ width, position: 'relative' }}>
      <div
        style={{
          transform: getTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
};