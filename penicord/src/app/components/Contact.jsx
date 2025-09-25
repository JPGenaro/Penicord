import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-xl text-gray-300">Estamos para ayudarte con tu vehículo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Dirección</h4>
                  <p className="text-gray-300">Alejandro Aguado 1017, Barrio Talleres Oeste</p>
                  <p className="text-gray-300">Córdoba, Argentina</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Teléfono</h4>
                  <p className="text-gray-300">+54 351 203-3152</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-gray-300">+54 351 203-3152</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Horarios</h4>
                  <p className="text-gray-300">Lunes a Viernes: 9:00 - 13:00 y 15:30 - 19:00</p>
                  <p className="text-gray-300">Sábados y Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Solicitar Turno</h3>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Describe el problema de tu vehículo"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                Enviar Solicitud
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">O contáctanos directamente por</p>
              <a
                href="https://wa.me/5493512033152"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg mt-2"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;