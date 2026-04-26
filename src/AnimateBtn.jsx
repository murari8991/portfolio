import React, { useRef } from 'react';
import gsap from 'gsap';
import './App.scss';

const AnimatedButton = ({ onClick, href, target, rel, children, className }) => {
  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    // Lift up slightly
    gsap.to(btnRef.current, { 
      scale: 1.05, 
      duration: 0.3, 
      ease: "power2.out" 
    });
  };

  const handleMouseLeave = () => {
    // Return to resting size
    gsap.to(btnRef.current, { 
      scale: 1, 
      duration: 0.3, 
      ease: "power2.out" 
    });
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

  // Dynamically choose between 'a' or 'button' based on whether an href is provided
  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={btnRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      // Added 'inline-block text-center' so <a> tags transform and align correctly
      className={`skill-chip ${className}`}
    >
      {children}
    </Component>
  );
};
export default AnimatedButton;