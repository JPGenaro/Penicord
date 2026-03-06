'use client'; 
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';

// --- Data de Ejemplos para la Galería ---
const historiasTrabajos = [
  {
    id: 1,
    titulo: "El Clásico Renault 12: Cambio de Instalación Eléctrica Completa",
    descripcion: "Un cliente nos trajo su amado R-12, con un sistema eléctrico muy deteriorado. Desmontamos toda la instalación y colocamos un nuevo cableado y fusibles, devolviéndole la vida a cada luz e instrumento. Un trabajo de precisión que nos tomó 3 días.",
    imagenUrl: '/entrada1.webp',
    fecha: 'Marzo 2024',
    servicios: ["Electricidad del Automotor", "Diagnóstico"]
  },
  {
    id: 2,
    titulo: "Motor Recalentado en una F-100: Reemplazo de Junta de Tapa de Cilindros",
    descripcion: "Una camioneta Ford F-100 sufría de un recalentamiento severo. Detectamos la falla en la junta de tapa de cilindros. Se planificó la tapa, se reemplazaron los sellos y se ajustó el motor a las especificaciones de fábrica. ¡Quedó como nueva!",
    imagenUrl: '/herramientas1.webp', 
    fecha: 'Febrero 2024',
    servicios: ["Reparación de Motor", "Mecánica General"]
  },
  {
    id: 3,
    titulo: "Ajuste Fino de Carburador y Encendido en un Fiat 600",
    descripcion: "Trabajamos en la puesta a punto de un 'Fitito' para un coleccionista. Ajustamos el carburador y el sistema de encendido para optimizar el consumo y la respuesta del motor. Pequeños autos, grandes desafíos.",
    imagenUrl: '/interior2.webp', 
    fecha: 'Enero 2024',
    servicios: ["Puesta a Punto", "Mecánica General"]
  },
  {
    id: 4,
    titulo: "Reparación Sistema de Frenos en Volkswagen Gol",
    descripcion: "Reemplazo completo de pastillas, discos y líquido de frenos. El cliente reportaba ruidos y pérdida de efectividad en la frenada. Ahora frena perfectamente y con total seguridad.",
    imagenUrl: '/entrada1.webp',
    fecha: 'Diciembre 2023',
    servicios: ["Sistema de Frenos", "Mecánica General"]
  },
  {
    id: 5,
    titulo: "Diagnóstico Electrónico y Scanner en Chevrolet Corsa",
    descripcion: "El auto presentaba fallas intermitentes y se encendía la luz del motor. Realizamos diagnóstico completo con scanner, detectamos sensor de oxígeno defectuoso y lo reemplazamos. Problema resuelto.",
    imagenUrl: '/herramientas1.webp',
    fecha: 'Noviembre 2023',
    servicios: ["Diagnóstico", "Electricidad del Automotor"]
  },
  {
    id: 6,
    titulo: "Service Completo 10.000 km - Peugeot 208",
    descripcion: "Cambio de aceite, filtros (aceite, aire, habitáculo), revisión de niveles, inspección de frenos y neumáticos. Service preventivo para mantener el auto en óptimas condiciones.",
    imagenUrl: '/interior2.webp',
    fecha: 'Octubre 2023',
    servicios: ["Puesta a Punto", "Mecánica General"]
  }
];

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.42, 0, 0.58, 1] 
    } 
  }
};

const GaleriaPage = () => {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  // Obtener categorías únicas
  const categorias = ['Todos', ...new Set(historiasTrabajos.flatMap(trabajo => trabajo.servicios))];

  // Filtrar trabajos según categoría seleccionada
  const trabajosFiltrados = filtroActivo === 'Todos' 
    ? historiasTrabajos 
    : historiasTrabajos.filter(trabajo => trabajo.servicios.includes(filtroActivo));

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar /> 
      
      <section id="galeria-historias" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-red-100/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Título de la Sección */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Trabajos del Taller
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Algunos trabajos recientes para que veas cómo encaramos cada reparación, con criterio y prolijidad.
            </p>
          </motion.div>

          {/* Sistema de Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaFilter className="text-red-600 text-xl" />
              <h3 className="text-lg font-semibold text-gray-700">Filtrar por servicio:</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setFiltroActivo(categoria)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    filtroActivo === categoria
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:text-red-600'
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>

            {/* Contador de resultados */}
            <motion.p
              key={filtroActivo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4 text-gray-600"
            >
              {trabajosFiltrados.length} {trabajosFiltrados.length === 1 ? 'trabajo' : 'trabajos'} 
              {filtroActivo !== 'Todos' && ` en "${filtroActivo}"`}
            </motion.p>
          </motion.div>

          {/* Contenedor de las Historias con Stagger */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={filtroActivo}
            role="list"
          >
            {trabajosFiltrados.map((historia) => (
              <motion.article
                key={historia.id}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                role="listitem"
              >
                {/* Imagen del Trabajo */}
                <div className="relative h-60 w-full">
                  <Image
                    src={historia.imagenUrl}
                    alt={historia.titulo}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-6">
                  {/* Título y Fecha */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{historia.titulo}</h2>
                  <p className="text-sm text-red-600 font-semibold mb-4">{historia.fecha}</p>
                  
                  {/* Descripción de la Historia */}
                  <p className="text-gray-600 mb-4 line-clamp-4">
                    {historia.descripcion}
                  </p>

                  {/* Tags de Servicios */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {historia.servicios.map((servicio) => (
                      <span 
                        key={servicio}
                        className="text-xs font-medium bg-red-50 text-red-700 px-3 py-1 rounded-full border border-red-100"
                      >
                        {servicio}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Mensaje si no hay resultados */}
          {trabajosFiltrados.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-gray-500">No hay trabajos en esta categoría todavía.</p>
            </motion.div>
          )}

          {/* Cierre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-16 bg-white border border-gray-100 rounded-2xl p-8 shadow-md"
          >
            <p className="text-lg text-gray-700">
              Cada auto se revisa según su estado real. Si querés consultarnos, en la sección de contacto están todos los datos.
            </p>
          </motion.div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default GaleriaPage;