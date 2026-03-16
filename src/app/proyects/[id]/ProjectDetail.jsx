"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import projects from "../../components/layout/projectsData";

const ProjectDetailPage = () => {
  const params = useParams();
  const [mounted, setMounted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const project = projects.find((p) => p.id === Number(params.id));

  useEffect(() => {
    // Use requestAnimationFrame for smoother initial paint
    const raf = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Auto-rotate gallery images
  useEffect(() => {
    if (!project?.gallery) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.gallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Proyecto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* ═══════════ HERO SECTION WITH IMAGE BACKGROUND ═══════════ */}
      <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background image with parallax-like effect */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover scale-105"
            style={{ filter: "blur(2px)", willChange: "transform" }}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            fetchPriority="high"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-50 dark:to-gray-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Tech badges floating */}
          <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-4'}`}>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight leading-none transition-all duration-600 ease-out ${mounted ? 'opacity-100 translate-y-0 delay-75' : 'opacity-0 translate-y-6'}`}>
            {project.title}
          </h1>

          {/* Animated line */}
          <div className={`flex items-center gap-3 mb-6 transition-all duration-500 ease-out ${mounted ? 'opacity-100 w-full delay-300' : 'opacity-0 w-0'}`}>
            <div className="h-[3px] w-24 bg-gradient-to-r from-blue-400 to-purple-500 dark:from-cyan-400 dark:to-purple-500 rounded-full" />
            <div className="h-[3px] w-12 bg-white/30 rounded-full" />
            <div className="h-[3px] w-6 bg-white/10 rounded-full" />
          </div>

          {/* Description */}
          <p className={`text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0 delay-[350ms]' : 'opacity-0 translate-y-4'}`}>
            {project.description}
          </p>
        </div>
      </div>

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════ GALLERY SECTION ═══════════ */}
        {project.gallery && project.gallery.length > 0 && (
          <div className={`py-16 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-cyan-400/70 mb-2">Galería</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Capturas del Proyecto</h2>
              </div>
              {/* Navigation arrows */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveImage((prev) => prev === 0 ? project.gallery.length - 1 : prev - 1)}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-blue-500 dark:hover:border-cyan-400 hover:text-blue-500 dark:hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                >
                  ←
                </button>
                <button
                  onClick={() => setActiveImage((prev) => (prev + 1) % project.gallery.length)}
                  className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-blue-500 dark:hover:border-cyan-400 hover:text-blue-500 dark:hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>
            
            {/* Main showcase image */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl dark:shadow-cyan-500/5 group mb-6">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-[3px] border-l-[3px] border-blue-500 dark:border-cyan-400 z-20 rounded-tl-2xl opacity-80" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-[3px] border-r-[3px] border-purple-500 dark:border-purple-400 z-20 rounded-tr-2xl opacity-80" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-[3px] border-l-[3px] border-purple-500 dark:border-purple-400 z-20 rounded-bl-2xl opacity-80" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-[3px] border-r-[3px] border-blue-500 dark:border-cyan-400 z-20 rounded-br-2xl opacity-80" />
              
              {/* Image counter */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-sm font-mono font-bold text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  {String(activeImage + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}
                </span>
              </div>

              {/* Image */}
              <div className="bg-white dark:bg-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.gallery[activeImage].src}
                  alt={project.gallery[activeImage].alt}
                  className="w-full h-auto block transition-opacity duration-500"
                  style={{ imageRendering: "auto" }}
                />
              </div>
              
              {/* Caption bar */}
              {project.gallery[activeImage].caption && (
                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-6 py-4 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{project.gallery[activeImage].caption}</p>
                </div>
              )}
            </div>

            {/* Thumbnail strip with progress indicator */}
            <div className="flex gap-3 items-center">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-1 rounded-xl overflow-hidden transition-all duration-500 ${
                    activeImage === index
                      ? "ring-2 ring-blue-500 dark:ring-cyan-400 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-950 scale-105 shadow-lg"
                      : "opacity-40 hover:opacity-80 grayscale hover:grayscale-0"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full aspect-video object-cover"
                  />
                  {/* Active indicator bar */}
                  {activeImage === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ═══════════ FEATURES SECTION ═══════════ */}
        {project.features && project.features.length > 0 && (
          <div className={`py-16 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Section header */}
            <div className="text-center mb-14">
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-cyan-400/70 mb-3">Funcionalidades</h3>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Características Principales</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-1 w-8 bg-blue-300 dark:bg-cyan-400/30 rounded-full" />
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-purple-500 rounded-full" />
                <div className="h-1 w-8 bg-purple-300 dark:bg-purple-400/30 rounded-full" />
              </div>
            </div>
            
            {/* Bento grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.features.map((feature, index) => {
                // Different icons for variety
                const icons = ["⚡", "🔐", "📊", "🎯", "📱", "🔔", "📈", "📅", "👥", "🔍", "📄", "🎓"];
                const icon = icons[index % icons.length];
                
                // First two items are "hero" cards spanning 2 columns
                const isHero = index < 2;
                
                return (
                  <div
                    key={index}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-cyan-500/10 ${
                      isHero 
                        ? "md:col-span-1 lg:col-span-1" 
                        : ""
                    }`}
                  >
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 dark:from-cyan-400/20 dark:via-purple-500/20 dark:to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                      <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900" />
                    </div>
                    
                    {/* Card content */}
                    <div className="relative bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 group-hover:border-transparent rounded-2xl p-6 h-full flex items-start gap-4 transition-all duration-500">
                      {/* Icon circle */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border border-blue-100 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-cyan-500/40 flex items-center justify-center text-xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 dark:group-hover:shadow-cyan-500/10">
                        {icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        {/* Feature number */}
                        <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400 dark:text-cyan-500/60 mb-1 block">
                          Feature {String(index + 1).padStart(2, "0")}
                        </span>
                        {/* Feature text */}
                        <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors block">
                          {feature}
                        </span>
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600 group-hover:bg-blue-50 dark:group-hover:bg-cyan-900/30 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-all duration-300 self-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                        <span className="text-xs">→</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ═══════════ ACTION BUTTONS ═══════════ */}
        <div className={`flex flex-wrap gap-5 py-16 transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-500 dark:to-blue-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 dark:hover:from-cyan-400 dark:hover:to-blue-500 transition-all duration-500 shadow-xl shadow-blue-500/25 dark:shadow-cyan-500/25 hover:shadow-blue-500/40 dark:hover:shadow-cyan-500/40 hover:scale-[1.02] group overflow-hidden text-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                🌐 Ver Proyecto en Vivo
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:border-blue-500 dark:hover:border-cyan-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-500 group hover:scale-[1.02] text-lg hover:shadow-lg"
            >
              💻 Link del Proyecto
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          )}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-400/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
