'use client';

import { motion } from "framer-motion";

export const BackgroundLines = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700/50 dark:to-blue-900/20 ${className}`}>
            <SVGBackground />
            <div className="relative z-10 w-full h-full">{children}</div>
        </div>
    );
};

const SVGBackground = () => {
    // Crear líneas diagonales
    const lines = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x1: `${i * 20}%`,
        y1: "0%",
        x2: `${i * 20 + 40}%`,
        y2: "100%",
    }));

    return (
        <div className="absolute inset-0 w-full h-full opacity-40">
            <svg
                className="absolute inset-0 h-full w-full"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    {/* Gradiente azul a cyan */}
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                    </linearGradient>

                    {/* Gradiente morado a rosa */}
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
                    </linearGradient>

                    {/* Gradiente amarillo a naranja */}
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#eab308" stopOpacity="1" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="1" />
                    </linearGradient>
                </defs>

                {/* Líneas diagonales animadas */}
                {lines.map((line, i) => (
                    <motion.line
                        key={`diagonal-${line.id}`}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke={`url(#grad${(i % 3) + 1})`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{
                            pathLength: 0,
                            opacity: 0,
                        }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Líneas horizontales */}
                {[0, 1, 2].map((i) => (
                    <motion.line
                        key={`horizontal-${i}`}
                        x1="0%"
                        y1={`${30 + i * 20}%`}
                        x2="100%"
                        y2={`${30 + i * 20}%`}
                        stroke={`url(#grad${(i % 3) + 1})`}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{
                            pathLength: 0,
                            opacity: 0,
                        }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "linear",
                        }}
                    />
                ))}

                {/* Curvas suaves */}
                <motion.path
                    d="M0,30 Q50,10 100,30 T200,30"
                    stroke="url(#grad1)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{
                        pathLength: 0,
                        opacity: 0,
                    }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 0.9, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </svg>
        </div>
    );
};
