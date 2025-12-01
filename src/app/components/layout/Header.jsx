'use client';
import React, { useState, useEffect } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setIsScrolled(latest > 50);
    setHideHeader(latest > previous && latest > 100);
  });

  const navItems = [
    { href: "/proyects", label: "Proyectos" },
    { href: "/certifications", label: "Certificaciones" }
  ];

  const headerVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        animate={hideHeader ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 
          ${isScrolled
            ? 'bg-white/80 dark:bg-black/20 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-2xl shadow-cyan-500/10'
            : 'bg-transparent border-b border-transparent dark:border-white/5'
          }
        `}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-30 pointer-events-none"
          animate={{
            background: isScrolled
              ? [
                "linear-gradient(90deg, rgba(6,182,212,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(236,72,153,0.1) 100%)",
                "linear-gradient(90deg, rgba(236,72,153,0.1) 0%, rgba(6,182,212,0.1) 50%, rgba(147,51,234,0.1) 100%)"
              ]
              : "none"
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
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
              <motion.span
                className={`
                  relative z-10 block
                  ${isScrolled
                    ? 'text-gray-900 dark:text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]'
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                PORTAFOLIO
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300
                    ${pathname === item.href
                      ? 'text-cyan-600 dark:text-cyan-400'
                      : 'text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white'
                    }
                  `}
                >
                  {item.label}

                  {pathname === item.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-400 to-purple-400"
                    />
                  )}

                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </div>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { href: "https://www.linkedin.com/in/aar%C3%B3n-estrada-mart%C3%ADnez-94b86b1a8/", icon: "linkedin" },
              { href: "https://github.com/Aaron0305?tab=repositories", icon: "github" },
              { href: "https://www.credly.com/users/aaron-estrada-martinez", icon: "credly" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                {social.icon === "linkedin" ? (
                  <svg className="relative z-10 w-5 h-5 text-gray-600 dark:text-white/70 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ) : social.icon === "github" ? (
                  <svg className="relative z-10 w-5 h-5 text-gray-600 dark:text-white/70 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                ) : (
                  <svg className="relative z-10 w-5 h-5 text-gray-600 dark:text-white/70 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 z-50"
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative flex flex-col justify-center items-center w-6 h-6">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-gray-600 dark:bg-white/70 mb-1.5"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-gray-600 dark:bg-white/70 mb-1.5"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-gray-600 dark:bg-white/70"
              />
            </div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-black/95 border-l border-gray-200 dark:border-white/10 z-50 md:hidden p-6 pt-24 shadow-2xl"
            >
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      className={`text-xl font-medium ${pathname === item.href ? 'text-cyan-600 dark:text-cyan-400' : 'text-gray-600 dark:text-white/70'}`}
                      whileHover={{ x: 10, color: "#06b6d4" }}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))}

                <div className="h-px bg-gray-200 dark:bg-white/10 my-4" />

                <div className="flex space-x-6">
                  <motion.a
                    href="https://www.linkedin.com/in/aar%C3%B3n-estrada-mart%C3%ADnez-94b86b1a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: "#0077b5" }}
                    className="text-gray-600 dark:text-white/70"
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://github.com/Aaron0305?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: "#333" }}
                    className="text-gray-600 dark:text-white/70"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.credly.com/users/aaron-estrada-martinez"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: "#f97316" }}
                    className="text-gray-600 dark:text-white/70"
                  >
                    Credly
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;