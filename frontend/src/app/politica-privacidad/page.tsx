import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Política de privacidad</h1>
          <p className="text-gray-600 mb-8">Última actualización: 11 de marzo de 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold mb-3">1. Información que recopilamos</h2>
              <p>
                En Ruggeri Taller Mecánico recopilamos únicamente los datos necesarios para atender consultas y coordinar servicios,
                como nombre, teléfono, correo electrónico y datos básicos del vehículo cuando el cliente los comparte.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">2. Uso de la información</h2>
              <p>
                Utilizamos los datos para responder consultas, agendar turnos, informar presupuestos, dar seguimiento al trabajo
                realizado y mejorar la atención al cliente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">3. Conservación y protección de datos</h2>
              <p>
                Conservamos los datos durante el tiempo razonable para prestar el servicio y cumplir obligaciones administrativas.
                Aplicamos medidas organizativas para evitar accesos no autorizados o uso indebido.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">4. Compartición de datos</h2>
              <p>
                No vendemos datos personales. Solo compartimos información cuando es necesario para cumplir requisitos legales o
                prestar un servicio solicitado por el cliente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">5. Derechos del titular</h2>
              <p>
                El titular puede solicitar acceso, actualización o eliminación de sus datos contactándonos por los medios publicados
                en la sección de contacto del sitio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
