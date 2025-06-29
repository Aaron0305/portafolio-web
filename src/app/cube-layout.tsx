"use client";
import React, { ReactNode } from "react";
import "./cube-transition.css";
import { motion } from "framer-motion";

interface CubeLayoutProps {
  children: ReactNode;
}

export default function CubeLayout({ children }: CubeLayoutProps) {
  return (
    <motion.div
      className="cube-transition-container"
      initial={{ rotateY: -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      exit={{ rotateY: 90, opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.77, 0, 0.18, 1] }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
}
