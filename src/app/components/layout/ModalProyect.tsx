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
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
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
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={handleOverlayClick}
        >
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-lg">
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <button 
                className="text-gray-500 hover:text-gray-700 text-3xl font-light leading-none transition-colors"
                onClick={onClose}
            >
                ×
            </button>
            </div>
            
            <div className="p-6">
            <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
            
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Tecnologías utilizadas:</h3>
                <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </div>

            {project.gallery && project.gallery.length > 0 && (
                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Capturas del proyecto:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                        priority={index < 2} // Prioridad para las primeras 2 imágenes
                        />
                        {image.caption && (
                        <p className="p-3 text-sm text-gray-600">{image.caption}</p>
                        )}
                    </div>
                    ))}
                </div>
                </div>
            )}

            {project.features && project.features.length > 0 && (
                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Características principales:</h3>
                <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{feature}</span>
                    </li>
                    ))}
                </ul>
                </div>
            )}

            <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                >
                    Ver Proyecto en Vivo
                </a>
                )}
                {project.githubUrl && (
                <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                >
                    Ver en GitHub
                </a>
                )}
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ModalProject;