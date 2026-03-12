import { FaTools } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center mb-4 justify-center md:justify-start">
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-2.5 rounded-lg mr-3 shadow-lg shadow-red-900/30">
                <FaTools className="text-2xl" />
              </div>
              <span className="text-2xl font-bold">RUGGERI</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Taller mecánico familiar en Córdoba. Trabajo honesto, diagnóstico claro y trato de confianza.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400 flex flex-col items-center md:items-start">
              <li>
                <a href="/#inicio" className="hover:text-white transition-colors inline-flex items-center gap-2 group"><span className="h-0.5 w-0 bg-red-500 group-hover:w-3 transition-all" />Inicio</a>
              </li>
              <li>
                <a href="/#servicios" className="hover:text-white transition-colors inline-flex items-center gap-2 group"><span className="h-0.5 w-0 bg-red-500 group-hover:w-3 transition-all" />Servicios</a>
              </li>
              <li>
                <a href="/nosotros" className="hover:text-white transition-colors inline-flex items-center gap-2 group"><span className="h-0.5 w-0 bg-red-500 group-hover:w-3 transition-all" />Nosotros</a>
              </li>
              <li>
                <a href="/galeria" className="hover:text-white transition-colors inline-flex items-center gap-2 group"><span className="h-0.5 w-0 bg-red-500 group-hover:w-3 transition-all" />Galería</a>
              </li>
              <li>
                <a href="/#contacto" className="hover:text-white transition-colors inline-flex items-center gap-2 group"><span className="h-0.5 w-0 bg-red-500 group-hover:w-3 transition-all" />Contacto</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" />Cambio de Aceite y Filtros</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" />Electricidad del Automotor</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" />Reparación de Motor</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" />Mecánica General</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500" />Sistemas de Frenos</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/80 mt-10 pt-8 text-center text-gray-400 relative z-10">
          <p>&copy; {currentYear} Ruggeri Taller Mecánico. Todos los derechos reservados.</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="/politica-privacidad" className="hover:text-white transition-colors">Política de privacidad</a>
            <span className="text-gray-600">•</span>
            <a href="/terminos-y-condiciones" className="hover:text-white transition-colors">Términos y condiciones</a>
            <span className="text-gray-600">•</span>
            <a href="/politica-cookies" className="hover:text-white transition-colors">Política de cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;