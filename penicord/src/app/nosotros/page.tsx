import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const About = () => {
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
            {/* Image */}
            <div className="relative h-96">
              <div className="absolute inset-0 bg-red-600/10 rounded-3xl"></div>
              <div className="relative h-full bg-gray-200 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl text-red-400 mb-4 mx-auto">👥</div>
                  <p className="text-gray-600">Equipo Penicord</p>
                  <p className="text-sm text-gray-500 mt-2">(Reemplazar con foto real del equipo)</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Penicord</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos un taller mecánico especializado en **electromecánica** con una trayectoria desde **1960** en Córdoba, Argentina. Nos dedicamos a ofrecer un servicio honesto, rápido y confiable, centrado en la calidad y la satisfacción del cliente.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-red-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Trabajo honesto y transparente</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-red-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Reparaciones rápidas y fiables</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-red-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Atendido por sus propios dueños</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;