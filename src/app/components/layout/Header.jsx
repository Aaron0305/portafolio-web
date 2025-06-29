'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const [isClient, setIsClient] = useState(false); // Nuevo estado para saber si estamos en el cliente
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true); // Solo después de montar
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
      setHideHeader(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isClient]);

  const navItems = [
    { href: "/proyects", label: "Proyectos" },
    { href: "/experiencia", label: "Experiencia" },
    { href: "/contacto", label: "Contacto" }
  ];

  return (
    <div>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
          ${isClient && isScrolled 
            ? 'bg-black/20 backdrop-blur-xl border-white/10 shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent backdrop-blur-sm border-white/5'
          }
          border-b
          ${isClient && hideHeader ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}
        `}
        style={isClient ? {
          transform: `translateY(${hideHeader ? '-3rem' : (scrollY > 100 ? -scrollY * 0.1 : 0)}px)`,
        } : {}}
      >
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={isClient ? {
            background: `linear-gradient(
              ${90 + scrollY * 0.1}deg, 
              rgba(6, 182, 212, 0.1) 0%, 
              rgba(147, 51, 234, 0.1) 50%, 
              rgba(236, 72, 153, 0.1) 100%
            )`,
            transform: `translateX(${scrollY * 0.2}px)`,
          } : {}}
        />
        
        {/* Glowing border effect */}
        <div 
          className={`
            absolute bottom-0 left-0 right-0 h-px transition-all duration-700
            ${isScrolled 
              ? 'bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent' 
              : 'bg-gradient-to-r from-transparent via-purple-400/30 to-transparent'
            }
          `}
        />

        <div className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo with holographic effect */}
          <div className="relative group">
            <Link 
              href="/" 
              className="relative text-2xl font-bold tracking-wider"
            >
              <span 
                className={`
                  relative z-10 transition-all duration-500
                  ${isScrolled 
                    ? 'text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]' 
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
                  }
                `}
              >
                PORTAFOLIO
              </span>
              
              {/* Holographic reflection */}
              <span 
                className="absolute top-0 left-0 text-2xl font-bold tracking-wider opacity-30 blur-sm transform scale-105 animate-pulse"
                style={{
                  background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                PORTAFOLIO
              </span>
            </Link>
          </div>

          {/* Desktop Navigation with futuristic hover effects */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.href} className="relative group">
                <Link 
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300
                    ${pathname === item.href 
                      ? 'text-cyan-400' 
                      : 'text-white/70 hover:text-white'
                    }
                  `}
                >
                  {item.label}
                  
                  {/* Animated underline */}
                  <span 
                    className={`
                      absolute bottom-0 left-0 h-px bg-gradient-to-r from-cyan-400 to-purple-400
                      transition-all duration-300 transform origin-left
                      ${pathname === item.href 
                        ? 'w-full scale-x-100' 
                        : 'w-0 group-hover:w-full group-hover:scale-x-100'
                      }
                    `}
                  />
                  
                  {/* Glowing background on hover */}
                  <span 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 
                               rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300
                               blur-sm"
                  />
                </Link>
              </div>
            ))}
          </nav>

          {/* Social Icons with magnetic effect */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://linkedin.com/in/tu-perfil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 
                            rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 blur-sm" />
              <svg className="relative z-10 w-5 h-5 text-white/70 group-hover:text-blue-400 transition-colors duration-300" 
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="https://github.com/Aaron0305?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-2 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 
                            rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 blur-sm" />
              <svg className="relative z-10 w-5 h-5 text-white/70 group-hover:text-gray-300 transition-colors duration-300" 
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          {/* Futuristic Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 
                          rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 blur-sm" />
            <div className="relative flex flex-col justify-center items-center w-6 h-6">
              <span className={`block h-0.5 w-6 bg-white/70 transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-white/70 transform transition-all duration-300 my-1 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-white/70 transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu with slide-in animation */}
      <div className={`
        fixed top-0 right-0 h-screen w-80 bg-black/90 backdrop-blur-xl z-40
        transform transition-transform duration-500 ease-out md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col pt-20 px-6 space-y-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                text-lg font-medium tracking-wide transition-all duration-300
                ${pathname === item.href ? 'text-cyan-400' : 'text-white/70'}
                hover:text-white hover:translate-x-2
              `}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="flex space-x-6 pt-8">
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer"
               className="text-white/70 hover:text-blue-400 transition-colors duration-300">
              LinkedIn
            </a>
            <a href="https://github.com/Aaron0305?tab=repositories" target="_blank" rel="noopener noreferrer"
               className="text-white/70 hover:text-gray-300 transition-colors duration-300">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;