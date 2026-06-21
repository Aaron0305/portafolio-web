// src/app/components/layout/ProjectCard.jsx
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "next-view-transitions";

const ProjectCard = ({ project }) => {
  return (
    <CardContainer className="inter-var w-full h-full">
      <CardBody className="bg-white/5 border border-white/10 backdrop-blur-md relative group/card hover:shadow-2xl hover:shadow-purple-500/10 hover:border-white/20 w-full min-h-[550px] rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 overflow-hidden">
        {/* Brillo sutil de fondo en hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white relative z-10"
          >
            {project.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-gray-400 text-sm max-w-sm mt-2 line-clamp-3 relative z-10"
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
                  className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full relative z-10 backdrop-blur-sm"
                >
                  {tech}
                </CardItem>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4 mt-4">
          {project.showModal ? (
            <CardItem
              translateZ={20}
              className="flex-1"
            >
              <Link
                href={`/proyects/${project.id}`}
                className="block w-full bg-gradient-to-r from-[#EA906C] via-[#B31312] to-[#2B2A4C] text-white text-center py-3 px-4 rounded-xl font-bold transition-all duration-300 text-sm cursor-pointer shadow-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(234,144,108,0.4)]"
              >
                Explorar Proyecto
              </Link>
            </CardItem>
          ) : project.liveUrl ? (
            <CardItem
              translateZ={20}
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-[#EA906C] via-[#B31312] to-[#2B2A4C] text-white text-center py-3 px-4 rounded-xl font-bold transition-all duration-300 text-sm cursor-pointer shadow-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(234,144,108,0.4)]"
            >
              Explorar Proyecto 
            </CardItem>
          ) : (
            <div className="flex-1"></div>
          )}

          <CardItem
            translateZ={20}
            as="a"
            href={project.githubUrl || project.liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-white/20 text-gray-300 text-center py-2.5 px-4 rounded-xl font-bold hover:border-[#EA906C] hover:text-[#EA906C] hover:bg-[#EA906C]/10 transition-all duration-300 text-sm cursor-pointer"
          >
            Link del Proyecto
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
