import React, { useRef } from 'react';
import gsap from 'gsap';
import './App.scss';

const AnimatedButton = ({ onClick, children, className }) => {
  const btnRef = useRef(null);
  const shineRef = useRef(null);
  const shineAnimation = useRef(null);

  const handleMouseEnter = () => {
    // Lift up slightly
    gsap.to(btnRef.current, { 
      scale: 1.05, 
      duration: 0.3, 
      ease: "power2.out" 
    });

    // Start the infinite shimmer/glitter sweep
    shineAnimation.current = gsap.fromTo(shineRef.current, 
      { x: "-200%", opacity: 1 }, 
      { x: "200%", duration: 1.2, repeat: -1, ease: "none" }
    );
  };

  const handleMouseLeave = () => {
    // Return to resting size
    gsap.to(btnRef.current, { 
      scale: 1, 
      duration: 0.3, 
      ease: "power2.out" 
    });

    // Fade out and kill the shimmer animation smoothly
    if (shineAnimation.current) {
      gsap.to(shineRef.current, { 
        opacity: 0, 
        duration: 0.3, 
        onComplete: () => shineAnimation.current.kill() 
      });
    }
  };

  const handleMouseDown = () => {
    // Physical compression on click
    gsap.to(btnRef.current, { 
      scale: 0.95, 
      duration: 0.1, 
      ease: "power2.out" 
    });
  };

  const handleMouseUp = () => {
    // Bounce back up to the hover state
    gsap.to(btnRef.current, { 
      scale: 1.05, 
      duration: 0.1, 
      ease: "power2.out" 
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      // Added relative and overflow-hidden to contain the inner shine
      className={`skill-chip ${className}`}
    >
      {/* The shimmer/glitter element */}
      <div 
        ref={shineRef} 
        className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none opacity-0"
      />
      {/* Wrap children in relative z-10 so text stays above the shine */}
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};
export default AnimatedButton;