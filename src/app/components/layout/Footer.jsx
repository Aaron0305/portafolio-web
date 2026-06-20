import React from "react";
import Galaxy from "../ui/Galaxy";

const Footer = () => {
  return (
    <footer className="relative w-full py-5 bg-gray-50 dark:bg-gray-950 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Fondo interactivo de Galaxia */}
      <div className="absolute inset-0 z-0 opacity-80 dark:opacity-100">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1.2}
          glowIntensity={0.4}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.4}
          rotationSpeed={0.08}
          repulsionStrength={2.5}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
          transparent={true}
        />
      </div>

      {/* Contenido del Footer */}
      <div className="relative z-10 pointer-events-none select-none font-medium">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
