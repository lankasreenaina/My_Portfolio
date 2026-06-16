"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for fluid movement
  const springX = useSpring(mouseX, { stiffness: 150, damping: 35 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 35 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half of glow width (300px / 2 = 150px) to center the spotlight
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY]);

  // Completely unmount/disable after user scrolls past the Hero (typical hero height is 700px-800px)
  if (scrollY > 650) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        opacity: isHovered ? 0.12 : 0,
        backgroundImage: "radial-gradient(circle, var(--primary) 0%, rgba(56, 189, 248, 0.1) 45%, transparent 70%)"
      }}
      className="fixed top-0 left-0 w-75 h-75 rounded-full pointer-events-none z-10 filter blur-2xl transition-opacity duration-300"
    />
  );
}
