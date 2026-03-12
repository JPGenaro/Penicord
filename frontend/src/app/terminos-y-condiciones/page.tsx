import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TermsAndConditionsPage() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Términos y condiciones</h1>
          <p className="text-gray-600 mb-8">Última actualización: 11 de marzo de 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold mb-3">1. Alcance del servicio</h2>
              <p>
                Ruggeri Taller Mecánico ofrece diagnóstico, mantenimiento y reparación de vehículos según disponibilidad técnica,
                repuestos y tiempos acordados con cada cliente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">2. Presupuestos</h2>
              <p>
                Los presupuestos se elaboran en base a la revisión inicial del vehículo. Si durante el trabajo surge una necesidad
                adicional, se informa al cliente antes de avanzar.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">3. Entrega y retiro</h2>
              <p>
                El cliente se compromete a retirar el vehículo dentro de un plazo razonable una vez informado que el trabajo está
                finalizado. La documentación y pertenencias personales del vehículo son responsabilidad del titular.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">4. Garantía del trabajo</h2>
              <p>
                Las reparaciones cuentan con garantía sobre mano de obra según el servicio realizado y condiciones de uso normal.
                No cubre desgaste natural, mal uso o intervenciones de terceros.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">5. Modificaciones</h2>
              <p>
                Estos términos pueden actualizarse para reflejar cambios operativos o legales. La versión vigente será la publicada
                en este sitio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
