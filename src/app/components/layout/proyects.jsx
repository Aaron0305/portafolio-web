"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";
import StarfieldBackground from "../ui/StarfieldBackground";

const Proyects = () => {
  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden py-20">
      <StarfieldBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado recientemente
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyects;