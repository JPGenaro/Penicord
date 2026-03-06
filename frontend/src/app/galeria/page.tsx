'use client'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

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

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar /> 
      
      <section id="galeria-historias" className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Título de la Sección */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
              Historias de Taller 🛠️
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detrás de cada reparación hay una historia. Te mostramos nuestros trabajos más recientes y destacados.
            </p>
          </motion.div>

          {/* Contenedor de las Historias con Stagger */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            role="list"
          >
            {historiasTrabajos.map((historia) => (
              <motion.article
                key={historia.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 ease-out border-t-4 border-red-600"
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{historia.titulo}</h2>
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
                        className="text-xs font-medium bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {servicio}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-700 mb-4">
              ¿Tu vehículo necesita una historia de éxito como estas?
            </p>
            <a
              href="https://wa.me/543518900167"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
            >
              Agenda tu turno por WhatsApp
            </a>
          </motion.div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default GaleriaPage;