'use client'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion'; 

const About = () => {

  const fadeInVariants = {
  hidden: { y: 30 },
  visible: { y: 0, transition: { duration: 0.6 } }
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.2
      }
    }
  };

  const itemStagger = {
    hidden: { y: 15 },
    visible: { y: 0, transition: { duration: 0.5 } }
  };


  const features = [
    {
      title: "Trayectoria",
      description: "Operando con éxito desde 1960 en la ciudad de Córdoba."
    },
    {
      title: "Especialistas",
      description: "Expertos en electromecánica y electricidad del automotor."
    },
    {
      title: "Equipo Calificado",
      description: "Con formación técnica en Renault y electricidad avanzada."
    }
  ];

  return (
    <main>
      <Navbar />
      <section id="nosotros" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-red-100/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Block: Animación de entrada por la izquierda */}
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-500/5 rounded-3xl blur-sm"></div>
              <div className="relative h-full bg-white border border-gray-100 shadow-2xl rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-4xl text-red-600 mb-4 mx-auto">👥</div>
                  <p className="text-gray-700 font-semibold">Equipo Penicord</p>
                  <p className="text-gray-500 text-sm mt-1">Atención directa y cercana</p>
                </div>
              </div>
            </div>

            {/* Content Block: Animación de entrada por abajo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Sobre Penicord</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos un taller mecánico especializado en electromecánica con trayectoria desde 1960 en Córdoba. Trabajamos con trato humano, diagnóstico claro y soluciones responsables.
              </p>
              
              {/* Bullet Points: Animación escalonada  */}
              <motion.div 
                variants={containerStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="space-y-4 mb-8"
              >
                <motion.div variants={itemStagger} className="flex items-center bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                  <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Trabajo honesto y transparente</span>
                </motion.div>
                <motion.div variants={itemStagger} className="flex items-center bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                  <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Reparaciones rápidas y fiables</span>
                </motion.div>
                <motion.div variants={itemStagger} className="flex items-center bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                  <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Atendido por sus propios dueños</span>
                </motion.div>
              </motion.div>

              {/* Feature Cards: Animación escalonada */}
              <motion.div 
                variants={containerStagger} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemStagger} 
                    className="text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;