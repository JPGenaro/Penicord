'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

/**
 * FAQ - Sección de preguntas frecuentes con acordeón expandible.
 *
 * @component
 * @returns {JSX.Element} Sección FAQ completa con animaciones.
 */
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué tipo de vehículos reparan?",
      answer: "Trabajamos con todo tipo de vehículos: autos particulares, camionetas, utilitarios y vehículos clásicos. Nos especializamos en marcas como Renault, Ford, Fiat, Volkswagen y otras marcas nacionales e importadas."
    },
    {
      question: "¿Cuánto tiempo demora una reparación?",
      answer: "Depende del tipo de trabajo. Un service o cambio de aceite puede llevar 1-2 horas. Reparaciones de motor o instalación eléctrica completa pueden tomar de 2 a 5 días. Siempre te informamos el tiempo estimado al hacer el diagnóstico."
    },
    {
      question: "¿Dan garantía por los trabajos realizados?",
      answer: "Sí, todos nuestros trabajos tienen garantía. La duración depende del tipo de reparación: repuestos nuevos tienen garantía de fabricante, instalaciones eléctricas 90 días, y reparaciones de motor hasta 6 meses."
    },
    {
      question: "¿Hacen presupuestos sin cargo?",
      answer: "Absolutamente. El presupuesto es gratuito. Revisamos el vehículo, hacemos un diagnóstico honesto y te explicamos qué necesita y cuánto costaría. Sin compromiso."
    },
    {
      question: "¿Aceptan tarjetas de crédito/débito?",
      answer: "Sí, aceptamos efectivo, tarjetas de débito y crédito, y transferencias bancarias. También podemos coordinar planes de pago para trabajos mayores."
    },
    {
      question: "¿Necesito turno o puedo ir directamente?",
      answer: "Recomendamos coordinar un turno por WhatsApp para asegurarte atención inmediata. De todas formas, si venís sin turno hacemos lo posible por atenderte según disponibilidad del taller."
    },
    {
      question: "¿Trabajan con seguros?",
      answer: "No trabajamos directamente con compañías de seguros, pero podemos proporcionarte toda la documentación necesaria para que gestiones el reintegro con tu aseguradora."
    },
    {
      question: "¿Hacen service de VTV?",
      answer: "Sí, preparamos tu vehículo para pasar la VTV sin problemas. Revisamos luces, frenos, dirección, neumáticos y todo lo necesario según las normativas vigentes."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-red-100/30 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-red-100/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaQuestionCircle className="text-4xl text-red-600" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Preguntas Frecuentes
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Las dudas más comunes de nuestros clientes, respondidas con claridad.
          </p>
        </motion.div>

        {/* Acordeón de FAQs */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white border rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'border-red-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              {/* Pregunta - Botón expandible */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-red-50 transition-colors duration-200 cursor-pointer"
                aria-expanded={activeIndex === index}
                type="button"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown className={`text-xl transition-colors duration-200 ${activeIndex === index ? 'text-red-600' : 'text-gray-400'}`} />
                </motion.div>
              </button>

              {/* Respuesta - Animación de expansión */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Llamado a la acción */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">¿No encontraste lo que buscabas?</p>
          <a
            href="#contacto"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Contactanos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
