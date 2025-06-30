// src/app/components/layout/projectsData.js
const projects = [
  {
    id: 1,
    title: "Plataforma de Aprendisaje Inclusivo",
    description:
      "Plataforma de aprendizaje para niños con dislexia desarrollada con React, Tailwind, Node.js y MongoDB. Incluye panel inicial informativo, test de dislexia, ejercicios interactivos especiales para niños con dislexia.",
    image: "/images/home.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://dislearn-client-92ur.vercel.app/",
    githubUrl: "https://github.com/tuusuario/ecommerce",
  },
  {
    id: 2,
    title: "Sistema integral de Servicio Social",
    description:
      "Página web de gestión de tareas con funcionalidades, inicio de sesión con correo institucional, chequeo automático de horas, actividades realizadas se pueden consultar por día gracias a un calendario que se implementó. Desarrollada con React, Material UI y base de datos No relacionales.",
    image: "/images/Pusuario.png",
    technologies: ["React", "MongoDB", "Material UI", "React Router", "JavaScript"],
    liveUrl: null, // Se abrirá el modal en lugar del link
    githubUrl: "https://github.com/Aaron0305/medidor",
    showModal: true, // Indica que debe mostrar modal
    gallery: [
      {
        src: "/projects/servicio-social/dashboard.jpg",
        alt: "Dashboard principal del sistema",
        caption: "Panel principal con resumen de actividades y horas"
      },
      {
        src: "/projects/servicio-social/login.jpg",
        alt: "Pantalla de inicio de sesión",
        caption: "Sistema de autenticación con correo institucional"
      },
      {
        src: "/projects/servicio-social/calendar.jpg",
        alt: "Calendario de actividades",
        caption: "Calendario interactivo para consultar actividades por día"
      },
      {
        src: "/projects/servicio-social/activities.jpg",
        alt: "Lista de actividades",
        caption: "Gestión y seguimiento de actividades realizadas"
      },
      {
        src: "/projects/servicio-social/hours-tracking.jpg",
        alt: "Seguimiento de horas",
        caption: "Control automático de horas de servicio social"
      },
      {
        src: "/projects/servicio-social/reports.jpg",
        alt: "Reportes y estadísticas",
        caption: "Generación de reportes detallados del progreso"
      }
    ],
    features: [
      "Autenticación con correo institucional",
      "Calendario interactivo para consulta de actividades",
      "Seguimiento automático de horas de servicio",
      "Dashboard con métricas y progreso",
      "Gestión completa de actividades",
      "Generación de reportes detallados",
      "Interfaz responsive con Material UI"
    ]
  },
  {
    id: 3,
    title: "Implemetación graficas",
    description:
      "Sitio web para control escolar, para estudiantes de nuevo ingreso. Analisis de datos de todos los estudiantes de dos planteles y a su vez filtrado por carreras.",
    image: "/images/graficasT.png",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MariaDB"],
    liveUrl: null, // Se abrirá el modal en lugar del link
    githubUrl: "https://github.com/Aaron0305/pagina-tec",
    showModal: true, // Indica que debe mostrar modal
    gallery: [
      {
        src: "/projects/restaurant/homepage.jpg",
        alt: "Página principal del restaurante",
        caption: "Página de inicio con diseño atractivo y navegación intuitiva"
      },
      {
        src: "/projects/restaurant/menu.jpg",
        alt: "Menú interactivo",
        caption: "Menú digital con categorías y descripción de platillos"
      },
      {
        src: "/projects/restaurant/reservations.jpg",
        alt: "Sistema de reservas",
        caption: "Formulario de reservas online con selección de fecha y hora"
      },
      {
        src: "/projects/restaurant/gallery.jpg",
        alt: "Galería de imágenes",
        caption: "Galería fotográfica del restaurante y sus platillos"
      },
      {
        src: "/projects/restaurant/contact.jpg",
        alt: "Página de contacto",
        caption: "Información de contacto y ubicación del restaurante"
      },
      {
        src: "/projects/restaurant/mobile-view.jpg",
        alt: "Vista móvil",
        caption: "Diseño responsive optimizado para dispositivos móviles"
      }
    ],
    features: [
      "Diseño responsive y moderno",
      "Sistema de reservas online",
      "Menú interactivo con categorías",
      "Galería de imágenes del restaurante",
      "Optimización SEO",
      "Formulario de contacto funcional",
      "Integración con mapas de ubicación",
      "Carga rápida y optimizada"
    ]
  },
];

export default projects;