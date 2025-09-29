import { FaCog, FaOilCan, FaCar, FaTools, FaExclamationTriangle, FaCarBattery } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaOilCan className="text-3xl text-red-600" />,
      title: "Cambio de Aceite y Filtros",
      description: "Servicio completo de cambio de aceite y filtros de primera calidad para un óptimo rendimiento."
    },
    {
      icon: <FaCarBattery className="text-3xl text-red-600" />,
      title: "Electricidad del Automotor",
      description: "Reparación e instalación eléctrica para vehículos y camiones, incluyendo arranques y alternadores."
    },
    {
      icon: <FaExclamationTriangle className="text-3xl text-red-600" />,
      title: "Sistemas de Frenos",
      description: "Revisión y reparación completa del sistema de frenos para garantizar tu seguridad."
    },
    {
      icon: <FaTools className="text-3xl text-red-600" />,
      title: "Mecánica General",
      description: "Mantenimiento preventivo y reparaciones generales para mantener tu vehículo en perfectas condiciones."
    },
    {
      icon: <FaCog className="text-3xl text-red-600" />,
      title: "Reparación de Motor",
      description: "Diagnóstico y reparación especializada de motores de todas las marcas y modelos."
    },
    {
      icon: <FaCar className="text-3xl text-red-600" />,
      title: "Servicios Electromecánicos",
      description: "Soluciones integrales para fallas complejas en los sistemas de tu vehículo."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios mecánicos y electromecánicos con un enfoque en la calidad y la experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-50 p-4 rounded-xl inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5493512033152"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            Consultar por todos los servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;