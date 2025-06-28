import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gray-900 text-center text-gray-400 text-sm mt-8">
      © {new Date().getFullYear()}  Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
