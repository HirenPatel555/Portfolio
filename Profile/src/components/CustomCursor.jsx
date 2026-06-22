import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if it is a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Glow Aura */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-screen opacity-80 border border-[#00F2FE] bg-[#00F2FE]/5 shadow-[0_0_8px_rgba(0,242,254,0.3)] blur-[0.5px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* Dynamic Cursor Light Aura (Larger, softer background glow) */}
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] -translate-x-[184px] -translate-y-[184px] rounded-full pointer-events-none z-30 mix-blend-screen opacity-20 cursor-glow-soft bg-[radial-gradient(circle,rgba(0,242,254,0.12)_0%,rgba(6,182,212,0.03)_50%,transparent_70%)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  );
}
