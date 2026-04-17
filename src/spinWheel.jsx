import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import pinwheelSvg from './assets/Pinwheel.svg';

// gsap animation to rotate the pinwheel

const Pinwheel = ({ className }) => {
  const pinwheelRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(pinwheelRef.current, {
        rotation: 360, 
        duration: 0.5,
        repeat: -1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <img
      ref={pinwheelRef}
      src={pinwheelSvg}
      alt="Spinning Pinwheel"
      className={className} 
    />
  );
};
export default Pinwheel;