"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ColourfulText({ text }: { text: string }) {
    const letters = text.split("");
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    const handleHoverStart = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setAnimationKey(prev => prev + 1);

            // Calcular duración total de la animación
            const totalDuration = 0.6 + (letters.length * 0.05);

            // Desactivar el estado después de que termine la animación
            setTimeout(() => {
                setIsAnimating(false);
            }, totalDuration * 1000);
        }
    };

    return (
        <motion.span
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 cursor-pointer"
            onHoverStart={handleHoverStart}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={`${index}-${animationKey}`}
                    className="inline-block"
                    style={{
                        display: letter === " " ? "inline" : "inline-block",
                        pointerEvents: isAnimating ? "none" : "auto"
                    }}
                    whileHover={
                        !isAnimating ? {
                            scale: 1.15,
                            color: "#ec4899",
                            textShadow: "0 0 25px rgba(236, 72, 153, 0.9)",
                            transition: { duration: 0.1 },
                        } : undefined
                    }
                    animate={
                        isAnimating
                            ? {
                                textShadow: [
                                    "0 0 0px rgba(59, 130, 246, 0)",
                                    "0 0 25px rgba(59, 130, 246, 1)",
                                    "0 0 25px rgba(139, 92, 246, 1)",
                                    "0 0 25px rgba(6, 182, 212, 1)",
                                    "0 0 0px rgba(6, 182, 212, 0)",
                                ],
                                scale: [1, 1.08, 1],
                            }
                            : {
                                textShadow: "0 0 0px rgba(0, 0, 0, 0)",
                                scale: 1,
                            }
                    }
                    transition={{
                        textShadow: {
                            duration: 0.6,
                            delay: index * 0.05,
                            ease: "easeInOut",
                        },
                        scale: {
                            duration: 0.6,
                            delay: index * 0.05,
                            ease: "easeInOut",
                        },
                    }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
}
