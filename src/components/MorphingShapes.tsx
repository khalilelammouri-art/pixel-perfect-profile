import React from 'react';

interface MorphingShapeProps {
  duration?: number;
  delay?: number;
  className?: string;
  colors?: string[];
  size?: 'sm' | 'md' | 'lg';
}

export function MorphingShape({
  duration = 8,
  delay = 0,
  className = '',
  colors = ['#60A5FA', '#A78BFA', '#F472B6'],
  size = 'md',
}: MorphingShapeProps) {
  const sizeMap = {
    sm: 'w-20 h-20',
    md: 'w-40 h-40',
    lg: 'w-60 h-60',
  };

  const gradient = `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`;

  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-20 ${sizeMap[size]} ${className}`}
      style={{
        background: gradient,
        animation: `float-rotate ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        filter: 'blur(40px)',
      }}
    />
  );
}

export function MorphingGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: '#A78BFA', stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>

        {/* Grid lines with animation */}
        <g className="opacity-30" filter="url(#glow)">
          {Array.from({ length: 20 }).map((_, i) => (
            <React.Fragment key={`h-${i}`}>
              <line
                x1="0"
                y1={`${(i * 100) / 20}%`}
                x2="100%"
                y2={`${(i * 100) / 20}%`}
                stroke="url(#grad1)"
                strokeWidth="1"
                opacity={0.3}
              />
            </React.Fragment>
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <React.Fragment key={`v-${i}`}>
              <line
                x1={`${(i * 100) / 20}%`}
                y1="0"
                x2={`${(i * 100) / 20}%`}
                y2="100%"
                stroke="url(#grad1)"
                strokeWidth="1"
                opacity={0.3}
              />
            </React.Fragment>
          ))}
        </g>

        {/* Animated circles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <circle
            key={`circle-${i}`}
            cx={`${(i * 100) / 5}%`}
            cy={`${(i * 100) / 5}%`}
            r="50"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1"
            opacity={0.15}
            style={{
              animation: `orbit ${6 + i}s linear infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function GlowingOrb({
  className = '',
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute rounded-full animate-glow-expand ${className}`}
      style={{
        animationDelay: `${delay}s`,
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.8) 0%, rgba(167, 139, 250, 0.4) 100%)',
        boxShadow: '0 0 40px rgba(96, 165, 250, 0.6)',
      }}
    />
  );
}
