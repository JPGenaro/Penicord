'use client'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion'; 

const About = () => {

  const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
        delayChildren: 0.2
      }
    }
  };

  const itemStagger = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
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
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Block: Animación de entrada por la izquierda */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative h-96"
            >
              <div className="absolute inset-0 bg-red-600/10 rounded-3xl"></div>
              <div className="relative h-full bg-gray-200 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl text-red-400 mb-4 mx-auto">👥</div>
                  <p className="text-gray-600">Equipo Penicord</p>
                </div>
              </div>
            </motion.div>

            {/* Content Block: Animación de entrada por abajo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Penicord</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos un taller mecánico especializado en electromecánica con una trayectoria desde 1960 en Córdoba, Argentina. Nos dedicamos a ofrecer un servicio honesto, rápido y confiable, centrado en la calidad y la satisfacción del cliente.
              </p>
              
              {/* Bullet Points: Animación escalonada  */}
              <motion.div 
                variants={containerStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="space-y-4 mb-8"
              >
                <motion.div variants={itemStagger} className="flex items-center">
                  <span className="w-4 h-4 bg-red-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Trabajo honesto y transparente</span>
                </motion.div>
                <motion.div variants={itemStagger} className="flex items-center">
                  <span className="w-4 h-4 bg-red-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Reparaciones rápidas y fiables</span>
                </motion.div>
                <motion.div variants={itemStagger} className="flex items-center">
                  <span className="w-4 h-4 bg-red-600 rounded-full mr-3"></span>
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
                    className="text-center p-4 bg-red-50 rounded-lg"
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