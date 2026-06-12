# Animation Guide

## Available Animations

### Basic Animations
- `animate-fade-in` - Fade in effect
- `animate-spin-slow` - Slow spinning rotation
- `animate-bounce-smooth` - Smooth bouncing motion
- `animate-bounce-fast` - Fast bouncing motion

### Slide Animations
- `animate-slide-in-left` - Slide in from left
- `animate-slide-in-right` - Slide in from right
- `animate-slide-in-up` - Slide in from bottom
- `animate-slide-in-down` - Slide in from top

### Advanced Animations
- `animate-scale-up` - Scale up with fade
- `animate-rotate-in` - Rotate in with fade
- `animate-wave` - Wave motion
- `animate-shimmer` - Shimmer effect
- `animate-aurora` - Aurora-like pulsing effect
- `animate-neon-flicker` - Neon flicker effect
- `animate-glow-expand` - Expanding glow effect
- `animate-orbit` - Orbital motion
- `animate-heartbeat` - Heartbeat pulsing
- `animate-float-rotate` - Floating with rotation
- `animate-slide-bounce` - Sliding bounce motion
- `animate-rainbow-glow` - Rainbow color glow
- `animate-text-glow` - Text glow effect

### Combined Animations
- `animate-pulse-bounce` - Bounce with glow pulse
- `animate-float-glow` - Float with glow effect
- `animate-entrance` - Combined slide + fade

## Using Animations in Components

### In JSX with Tailwind
```jsx
<div className="animate-fade-in">Content</div>
<button className="animate-bounce-smooth hover:animate-glow-expand">Click me</button>
```

### With Custom Duration (inline style)
```jsx
<div 
  className="animate-float-rotate"
  style={{ '--animation-duration': '5s' } as React.CSSProperties}
>
  Custom duration
</div>
```

### Stagger Multiple Elements
```jsx
{items.map((item, i) => (
  <div key={i} className={`animate-fade-in animate-stagger-${i+1}`}>
    {item}
  </div>
))}
```

## Hooks

### useAnimation
Hook for scroll-triggered animations:
```jsx
import { useAnimation } from '@/hooks/use-animation';

export function MyComponent() {
  const { ref, animationClass } = useAnimation({
    type: 'fade-in',
    once: true,
    duration: 0.6
  });

  return <div ref={ref} className={animationClass}>Content</div>;
}
```

### AnimatedElement Component
Pre-made animated wrapper:
```jsx
import { AnimatedElement } from '@/hooks/use-animation';

<AnimatedElement type="slide-in-up" duration={0.6}>
  <Card>Your content</Card>
</AnimatedElement>
```

### AnimatedText Component
Animate text:
```jsx
import { AnimatedText } from '@/hooks/use-animation';

<AnimatedText text="Hello" type="fade-in" duration={0.6} />
```

## Special Components

### MorphingShape
Animated morphing gradient shapes:
```jsx
import { MorphingShape } from '@/components/MorphingShapes';

<MorphingShape 
  size="md" 
  duration={8} 
  delay={2}
  colors={['#60A5FA', '#A78BFA', '#F472B6']}
/>
```

### GlowingOrb
Expanding glow effect:
```jsx
import { GlowingOrb } from '@/components/MorphingShapes';

<GlowingOrb className="w-32 h-32" delay={0} />
```

### ParticlesAnimation
Background particle animation:
```jsx
import { ParticlesAnimation } from '@/components/ParticlesAnimation';

<ParticlesAnimation />
```

## Customizing Animations

### Add New Keyframes
Edit `src/styles.css` and add:
```css
@keyframes my-animation {
  0% { /* start state */ }
  100% { /* end state */ }
}

@layer components {
  .animate-my-animation {
    animation: my-animation 1s ease-in-out;
  }
}
```

### Adjust Colors in Glow Effects
Glow effects use CSS variables:
- `--glow` - Primary glow color
- `--glow-secondary` - Secondary glow color

These change based on the selected theme.

## Performance Tips

1. Use `will-change: transform` on animated elements for GPU acceleration
2. Limit particle counts in ParticlesAnimation (default: 50)
3. Use `once: true` in useAnimation hook for scroll-triggered animations
4. Prefer transform/opacity animations for best performance
5. Use `pointer-events-none` on decorative animations

## Theme Support

All glow animations automatically use the current theme colors:
- Bleu Cosmique (default)
- Galaxie Violette
- Émeraude Cosmique
- Éruption Solaire
- Aurore Écarlate
- Nébuleuse Cyan

Colors automatically update when theme changes!
