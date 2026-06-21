"use client";

import { Magnet } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

interface AttractButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number;
  attractRadius?: number;
  text?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function AttractButton({
  className = "",
  particleCount = 12,
  attractRadius = 50,
  text = "INICIO",
  ...props
}: AttractButtonProps) {
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesControl = useAnimation();

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 360 - 180,
      y: Math.random() * 360 - 180,
    }));
    setParticles(newParticles);
  }, [particleCount]);

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true);
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    });
  }, [particlesControl]);

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false);
    await particlesControl.start((i) => ({
      x: particles[i].x,
      y: particles[i].y,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }));
  }, [particlesControl, particles]);

  return (
    <button
      className={`relative touch-none rounded-lg px-2 py-1 font-bold tracking-widest text-2xl
        drop-shadow-[0_0_8px_rgba(234,144,108,0.5)] hover:drop-shadow-[0_0_15px_rgba(234,144,108,0.8)]
        transition-all duration-500 ${className}`}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchEnd={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      {...props}
    >
      {particles.map((_, index) => (
        <motion.div
          animate={particlesControl}
          className={`absolute h-[3px] w-[3px] rounded-full bg-[#EA906C] shadow-[0_0_5px_#EA906C] transition-opacity duration-300 ${
            isAttracting ? "opacity-100" : "opacity-0"
          }`}
          custom={index}
          initial={{ x: particles[index]?.x || 0, y: particles[index]?.y || 0 }}
          key={index}
        />
      ))}
      <span className="relative flex w-full items-center justify-center">
        <span className={`transition-transform duration-500 text-transparent bg-clip-text bg-gradient-to-r from-[#EA906C] to-[#B31312] ${isAttracting ? "scale-105" : ""}`}>
          {text}
        </span>
      </span>
    </button>
  );
}
