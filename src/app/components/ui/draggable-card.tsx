import React from "react";
import { motion, useMotionValue, useSpring, PanInfo } from "framer-motion";

export const DraggableCardContainer = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`relative ${className}`}>
            {children}
        </div>
    );
};

export const DraggableCardBody = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const rotateX = useSpring(0, springConfig);
    const rotateY = useSpring(0, springConfig);

    const handleDrag = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const rotateXValue = info.offset.y / 10;
        const rotateYValue = info.offset.x / 10;
        rotateX.set(rotateXValue);
        rotateY.set(rotateYValue);
    };

    const handleDragEnd = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            drag
            dragConstraints={{
                top: -200,
                left: -200,
                right: 200,
                bottom: 200,
            }}
            dragElastic={0.1}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            style={{
                x,
                y,
                rotateX,
                rotateY,
                cursor: "grab",
            }}
            whileDrag={{
                cursor: "grabbing",
                scale: 1.05,
            }}
            className={`touch-none ${className}`}
        >
            <div
                style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                }}
            >
                {children}
            </div>
        </motion.div>
    );
};
