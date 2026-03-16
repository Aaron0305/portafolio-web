'use client';
// src/app/components/layout/ModalProject.tsx
import React, { useEffect } from 'react';
import Image from 'next/image';

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  gallery?: ProjectImage[];
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ModalProjectProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ModalProject: React.FC<ModalProjectProps> = ({ project, isOpen, onClose }) => {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center rounded-t-2xl z-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h2>
          <button 
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-3xl font-light leading-none transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
          
          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Tecnologías utilizadas:</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Capturas del proyecto:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      priority={index < 2}
                    />
                    {image.caption && (
                      <p className="p-3 text-sm text-gray-600 dark:text-gray-400">{image.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Características principales:</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5">✦</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                🌐 Ver Proyecto en Vivo
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2"
              >
                💻 Ver en GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;