// src/app/components/layout/ProjectCard.jsx
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "next-view-transitions";

const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <CardContainer className="inter-var w-full h-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-800 dark:border-white/[0.2] border-black/[0.1] w-full min-h-[550px] rounded-xl p-6 border flex flex-col justify-between">
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {project.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
          >
            {project.description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-full h-48 rounded-xl overflow-hidden group-hover/card:shadow-xl">
              <Image
                src={project.image}
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={project.title}
              />
            </div>
          </CardItem>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <CardItem
                  translateZ={40}
                  key={index}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                >
                  {tech}
                </CardItem>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4 mt-4">
          {project.liveUrl ? (
            <CardItem
              translateZ={20}
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm cursor-pointer shadow-lg hover:shadow-xl"
            >
              Ver Proyecto
            </CardItem>
          ) : (
            // Espacio vacío para mantener alineación si no hay botón izquierdo
            <div className="flex-1"></div>
          )}

          <CardItem
            translateZ={20}
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white text-center py-2.5 px-4 rounded-xl font-bold hover:border-blue-500 hover:text-blue-500 transition-all duration-300 text-sm cursor-pointer"
          >
            GitHub
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
