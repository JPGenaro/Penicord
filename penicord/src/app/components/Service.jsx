import { FaCog, FaOilCan, FaCar, FaTools, FaExclamationTriangle, FaCarBattery } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaOilCan className="text-3xl text-red-600" />,
      title: "Cambio de Aceite",
      description: "Servicio completo de cambio de aceite y filtros con productos de primera calidad."
    },
    {
      icon: <FaCog className="text-3xl text-red-600" />,
      title: "Reparación de Motor",
      description: "Diagnóstico y reparación especializada de motores de todas las marcas."
    },
    {
      icon: <FaCar className="text-3xl text-red-600" />,
      title: "Alineación y Balanceo",
      description: "Servicio profesional de alineación, balanceo y rotación de neumáticos."
    },
    {
      icon: <FaTools className="text-3xl text-red-600" />,
      title: "Mecánica General",
      description: "Reparaciones generales y mantenimiento preventivo para tu vehículo."
    },
    {
      icon: <FaExclamationTriangle className="text-3xl text-red-600" />,
      title: "Frenos",
      description: "Revisión y reparación completa del sistema de frenos de tu automóvil."
    },
    {
      icon: <FaCarBattery className="text-3xl text-red-600" />,
      title: "Sistema Eléctrico",
      description: "Diagnóstico y reparación de problemas eléctricos y electrónicos."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios mecánicos completos con los más altos estándares de calidad
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
            href="https://wa.me/5493512345678"
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