import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CookiesPolicyPage() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50 text-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Política de cookies</h1>
          <p className="text-gray-600 mb-8">Última actualización: 11 de marzo de 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold mb-3">1. Qué son las cookies</h2>
              <p>
                Las cookies son pequeños archivos que se guardan en el navegador para recordar preferencias y mejorar la experiencia
                de navegación.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">2. Qué cookies usamos</h2>
              <p>
                Este sitio puede utilizar cookies técnicas para el funcionamiento básico y cookies de medición para conocer el uso
                general de la web (por ejemplo, páginas más visitadas).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">3. Finalidad</h2>
              <p>
                Las usamos para mantener la estabilidad del sitio, optimizar rendimiento y mejorar contenido y navegación para los
                usuarios.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">4. Gestión de cookies</h2>
              <p>
                El usuario puede desactivar o eliminar cookies desde la configuración de su navegador. Esto puede afectar algunas
                funciones de la web.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">5. Cambios en esta política</h2>
              <p>
                Esta política puede actualizarse cuando haya cambios técnicos o normativos. La versión vigente será la publicada en
                esta sección.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
