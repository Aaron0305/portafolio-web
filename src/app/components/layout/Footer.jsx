import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-white dark:bg-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700">
      © {new Date().getFullYear()} Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
