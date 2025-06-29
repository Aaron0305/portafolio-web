"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <main key={pathname}>{children}</main>
    </AnimatePresence>
  );
}
