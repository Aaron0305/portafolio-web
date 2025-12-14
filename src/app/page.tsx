"use client";
import Image from "next/image";
import SkillsCards from "./components/layout/cards";
import CubeLayout from "./cube-layout";
import { motion, useInView } from "framer-motion";
import { useRef, useState, ReactNode, useEffect } from "react";
import { Link } from 'next-view-transitions';
import ProjectCard from "./components/layout/ProjectCard";
import projectsData from "./components/layout/projectsData";
import ColourfulText from "./components/ui/colourful-text";
import CodeEngineerScene from "./components/three/CodeEngineerScene";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Code
} from "lucide-react";

// Componente para animaciones reutilizables
interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedSection = ({ children, delay = 0, className = "" }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};



// Componente de información de contacto mejorado
const ContactInfo = () => {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: "ryaaron000@gmail.com",
      href: "mailto:ryaaron000@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "(+52) 7122956288",
      href: "tel:+525512345678",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Estado de México, México",
      href: "https://maps.google.com/?q=Estado+de+México,+México",
      color: "purple"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/aron.estrada.1023",
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aaron_es09/",
      label: "Instagram",
      color: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/7122956288",
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Github,
      href: "https://github.com/Aaron0305",
      label: "GitHub",
      color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aar%C3%B3n-estrada-mart%C3%ADnez-94b86b1a8/",
      label: "LinkedIn",
      color: "bg-blue-700 hover:bg-blue-800"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target={item.href.startsWith('http') ? "_blank" : undefined}
            rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`w-12 h-12 bg-${item.color}-100 dark:bg-${item.color}-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 break-all">
                {item.value}
              </p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" />
          </motion.a>
        ))}
      </div>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
          Sígueme en redes sociales
        </h4>
        <div className="flex flex-wrap gap-3 justify-center">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl ${social.color} transition-all duration-300 p-3 shadow-md hover:shadow-lg flex items-center justify-center`}
              aria-label={social.label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6 text-white" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Interface para los proyectos
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string | null;
  githubUrl?: string;
  showModal?: boolean;
  gallery?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  features?: string[];
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        // Simulamos una carga asíncrona
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProjects(projectsData as Project[]);
        setError(null);
      } catch (err) {
        console.error("Error loading projects:", err);
        setError("No se pudieron cargar los proyectos");
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <CubeLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        {/* Hero Section Mejorado */}
        <AnimatedSection className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative">
            <div className="text-center">
              <motion.div
                className="relative w-40 h-40 mx-auto mb-8 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/images/aaron.jpg"
                    alt="Aarón Estrada Martínez - Desarrollador Full Stack"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    priority
                    quality={100}
                  />
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hola, soy{" "}
                <ColourfulText text="Aarón Estrada Martínez" />
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Estudiante del 8° semestre de <strong>Ingeniería en Sistemas Computacionales</strong>,
                especializado en crear experiencias web modernas con <strong>React</strong>, <strong>Next.js</strong> y tecnologías de vanguardia.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  href="/proyects"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  <Code className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Ver Proyectos
                </Link>
                <button
                  onClick={() => window.open('https://te674-my.sharepoint.com/:b:/g/personal/2022150480299_tesjo_edu_mx/EcQa8nsubZZFrU-yKrNRp2ABNVxYGRkficLba_9dksH6XQ?e=puLLwI', '_blank')}
                  className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                  Descargar CV
                </button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* About Section Mejorado */}
        <AnimatedSection
          delay={0.2}
          className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Sobre Mí
                </motion.h2>

                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Soy un Estudiante con más de <strong>1 año de experiencia</strong> creando
                    aplicaciones web modernas y escalables. Mi stack principal incluye <strong>React</strong>, <strong>Next.js</strong>,
                    <strong>TypeScript</strong>, <strong>Node.js</strong> y <strong>MongoDB</strong>.
                  </p>
                  <p>
                    Me especializo en transformar ideas complejas en soluciones digitales elegantes,
                    con un enfoque especial en la experiencia de usuario y la arquitectura de software limpia.
                  </p>
                  <p>
                    Constantemente estoy aprendiendo nuevas tecnologías y mejores prácticas para
                    mantenerme actualizado en este mundo tecnológico en constante evolución.
                  </p>
                </div>

                <motion.div
                  className="grid grid-cols-2 gap-8 mt-12"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-2xl">
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Proyectos Completados</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="order-1 lg:order-2 relative"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Sección de animación con three.js */}
                <CodeEngineerScene />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection
          delay={0.3}
          className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Mis Habilidades
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tecnologías y herramientas que domino para crear soluciones web completas y escalables
              </p>
            </div>
            <SkillsCards />
          </div>
        </AnimatedSection>
        {/* Projects Section Mejorada */}
        <AnimatedSection
          delay={0.4}
          className="py-24 bg-white dark:bg-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Proyectos Destacados
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Una selección de mis trabajos más recientes y significativos
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="h-full bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden animate-pulse">
                    <div className="h-48 bg-gray-200 dark:bg-gray-600"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                      <div className="flex gap-2">
                        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500 dark:text-red-400 text-lg">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reintentar
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(80,80,200,0.15)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
                    viewport={{ once: true }}
                  >
                    <ProjectCard
                      project={project}
                      onOpenModal={() => { }}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
        {/* Contact Section Completamente Renovado */}
        <AnimatedSection
          delay={0.6}
          className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Contactame
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Si te intereso mi perfil puedes contactarme a través de los siguientes medios:
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 60 }}
                viewport={{ once: true }}
              >
                <ContactInfo />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 60 }}
                viewport={{ once: true }}
              >
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </motion.div>
    </CubeLayout>
  );
}