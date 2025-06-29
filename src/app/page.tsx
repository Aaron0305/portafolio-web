"use client";
import Image from "next/image";
import SkillsCards from "./components/layout/cards"; 
import CubeLayout from "./cube-layout";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from 'next/link';
import ProjectCard from "./components/layout/ProjectCard";
import projects from "./components/layout/projectsData";
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
  Code,
  Database,
  Send,
  User,
  AtSign
} from "lucide-react";

// Componente para animaciones reutilizables
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
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

// Componente de formulario mejorado
const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/mwkajnkl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <Send className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Envíame un Mensaje
        </h3>
      </div>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg">
          <p className="text-green-700 dark:text-green-300">¡Mensaje enviado correctamente!</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg">
          <p className="text-red-700 dark:text-red-300">Error al enviar el mensaje. Inténtalo de nuevo.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              id="name"
              value={formState.name}
              onChange={handleInputChange}
              required
              placeholder="Tu nombre completo"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div className="relative">
            <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              id="email"
              value={formState.email}
              onChange={handleInputChange}
              required
              placeholder="tu.email@ejemplo.com"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formState.message}
              onChange={handleInputChange}
              required
              placeholder="Escribe tu mensaje aquí..."
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar Mensaje
            </>
          )}
        </button>
      </form>
    </div>
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
      value: "+52 (55) 1234-5678",
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
      href: "https://facebook.com",
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/525512345678",
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
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
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Sígueme en redes sociales
        </h4>
        <div className="flex flex-wrap gap-3">
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

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <CubeLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
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
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hola, soy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-pulse">
                  Aarón Estrada
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Estudiante del 7° semestre de <strong>Ingeniería en Sistemas Computacionales</strong>,
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
                    Soy un desarrollador <strong>Full Stack</strong> con más de <strong>1 año de experiencia</strong> creando 
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
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Proyectos Completados</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
                    <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1.5+</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Años de Experiencia</p>
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
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-cyan-600/30 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                  
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/10 to-slate-800/10 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                    <Image
                      src="/images/Data-extraction.gif"
                      alt="Desarrollo de software"
                      fill
                      className="object-contain p-8 transition-all duration-700 group-hover:scale-110"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
                      }}
                    />
                    
                    {/* Efectos visuales mejorados */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
                      <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
                      <div className="absolute bottom-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-3000"></div>
                    </div>
                  </div>
                </div>
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

        {/* Projects Section */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section Mejorado */}
        <AnimatedSection 
          delay={0.5}
          className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Mis Servicios
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Soluciones web completas y personalizadas para impulsar tu negocio
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Desarrollo Frontend
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Interfaces de usuario modernas, responsivas y accesibles usando React, Next.js, TypeScript y las mejores prácticas de UX/UI.
                </p>
              </motion.div>
              
              <motion.div 
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Desarrollo Backend
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  APIs robustas y escalables con Node.js, bases de datos optimizadas (MongoDB, MySQL) y arquitecturas serverless.
                </p>
              </motion.div>
            </div>
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
                Hablemos
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="order-2 lg:order-1">
                <ContactInfo />
              </div>
              
              <div className="order-1 lg:order-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400 text-lg">
                © {currentYear} Aarón Estrada Martínez. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </motion.div>
    </CubeLayout>
  );
}