'use client';

import { motion } from "framer-motion";
import CubeLayout from "../cube-layout";
import { BackgroundLines } from "../components/ui/background-lines";
import { CometCard } from "../components/ui/comet-card";

export default function CertificationsPage() {
    const certifications = [
        {
            title: "Certificado Profesional de Soporte de TI de Google",
            issuer: "Google",
            date: "Julio 2024",
            link: "https://coursera.org/share/ad1c37539d99c75fe371eae169305e35",
            skills: ["Computer Networking", "Operating Systems", "System Administration", "Security", "IT Support"]
        },
        {
            title: "Aspectos básicos de la asistencia técnica",
            issuer: "Google",
            date: "Julio 2024",
            link: "https://coursera.org/share/3fa7508f78c629563060fb634ba4a3eb",
            skills: ["Technical Support", "Customer Service", "Troubleshooting", "IT Fundamentals"]
        },
        {
            title: "Los bits y bytes de las redes informáticas",
            issuer: "Google",
            date: "Julio 2024",
            link: "https://coursera.org/share/4f5b0197599792e453dc0de66f6bd2ff",
            skills: ["Computer Networking", "TCP/IP", "DNS", "Network Protocols", "Troubleshooting"]
        },
        {
            title: "Administración de sistemas y servicios de infraestructura de TI",
            issuer: "Google",
            date: "Julio 2024",
            link: "https://coursera.org/share/64bcb2c4be2b3bde20dac78011bc0257",
            skills: ["Software Visualization", "Cloud Computing", "Network Security", "Web Development", "Accounting"]
        },
        {
            title: "Seguridad informática: defensa contra las artes oscuras digitales",
            issuer: "Google",
            date: "Julio 2024",
            link: "https://coursera.org/share/cae924062ac40cbe2f7d914bc8aac64b",
            skills: ["Computer Networking", "Security Software", "Cloud Storage", "Software Security", "Security Engineering"]
        },
        {
            title: "Sistemas operativos y tú: Convertirse en un usuario avanzado",
            issuer: "Google",
            date: "Julio 2024",
            link: "https://coursera.org/share/31c257b0ab494dcb7c4391141fa1ac78",
            skills: ["Linux", "Operating Systems", "Command Line", "User Management"]
        },
        {
            title: "Fundamentos de Linux",
            issuer: "Cisco",
            date: "Diciembre 2024",
            link: "https://www.credly.com/users/aaron-estrada-martinez",
            skills: ["Linux", "CLI", "Open Source", "Command Line"]
        },
        {
            title: "CCNA: Introducción a las redes",
            issuer: "Cisco",
            date: "Junio 2025",
            link: "https://www.credly.com/users/aaron-estrada-martinez",
            skills: ["Networking", "CCNA", "IP Addressing", "Ethernet"]
        },
        {
            title: "Introducción a la Ciberseguridad",
            issuer: "Cisco",
            date: "Octubre 2025",
            link: "https://www.credly.com/users/aaron-estrada-martinez",
            skills: ["Cybersecurity", "Privacy", "Malware Protection", "Security Policies"]
        },
        {
            title: "Introducción al Internet de las Cosas y Transformación Digital",
            issuer: "Cisco",
            date: "Octubre 2025",
            link: "https://www.credly.com/users/aaron-estrada-martinez",
            skills: ["IoT", "Digital Transformation", "Automation", "Data Analytics"]
        },
        {
            title: "Google Cloud Computing Foundations Certificate",
            issuer: "Google Cloud",
            date: "Noviembre 2025",
            link: "https://www.credly.com/users/aaron-estrada-martinez",
            skills: ["Cloud Computing", "Google Cloud Platform", "Infrastructure", "Big Data", "Machine Learning"]
        }
    ];

    return (
        <CubeLayout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                            Mis Certificaciones
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-16">
                            Validación de mis conocimientos y habilidades técnicas
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {certifications.map((cert, index) => (
                                <CometCard key={index}>
                                    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col">
                                        <BackgroundLines className="h-48 flex items-center justify-center">
                                            <div className="text-center z-10">
                                                {cert.issuer.includes("Google") ? (
                                                    <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2 tracking-tighter">
                                                        <span className="text-blue-500">G</span>
                                                        <span className="text-red-500">o</span>
                                                        <span className="text-yellow-500">o</span>
                                                        <span className="text-blue-500">g</span>
                                                        <span className="text-green-500">l</span>
                                                        <span className="text-red-500">e</span>
                                                        {cert.issuer === "Google Cloud" && <span className="text-gray-500 dark:text-gray-400 ml-2 text-2xl">Cloud</span>}
                                                    </div>
                                                ) : (
                                                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 tracking-tighter">
                                                        CISCO
                                                    </div>
                                                )}
                                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">Certificado</span>
                                            </div>
                                        </BackgroundLines>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                                {cert.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                                {cert.issuer} • {cert.date}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {cert.skills.slice(0, 4).map((skill, i) => (
                                                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium">
                                                        {skill}
                                                    </span>
                                                ))}
                                                {cert.skills.length > 4 && (
                                                    <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium">
                                                        +{cert.skills.length - 4} más
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                                                >
                                                    Ver Credencial
                                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </CometCard>
                            ))}
                        </div>

                        <div className="mt-16 text-center pb-12">
                            <a
                                href="https://www.credly.com/users/aaron-estrada-martinez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                            >
                                <span className="mr-3 text-orange-500">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </span>
                                Ver todas mis credenciales en Credly
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </CubeLayout>
    );
}
