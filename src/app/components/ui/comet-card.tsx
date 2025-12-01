"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const CometCard = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({ x, y });

        // Calcular rotación 3D basada en la posición del mouse
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -10; // -10 a 10 grados
        const rotateYValue = ((x - centerX) / centerX) * 10;  // -10 a 10 grados

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative ${className}`}
            style={{
                perspective: "1000px",
            }}
        >
            <motion.div
                style={{
                    transformStyle: "preserve-3d",
                    rotateX,
                    rotateY,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
            >
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.2), transparent 40%)`,
                    }}
                />
                <motion.div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
                    }}
                />
                {children}
            </motion.div>
        </div>
    );
};
