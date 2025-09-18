import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">PENICORD</span>
            </div>
            <p className="text-gray-400">
              Taller mecánico especializado con más de 15 años de experiencia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cambio de Aceite</li>
              <li>Reparación de Motor</li>
              <li>Alineación y Balanceo</li>
              <li>Mecánica General</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p>Av. Siempre Viva 742</p>
              <p>Springfield</p>
              <p>+54 351 234-5678</p>
              <p>info@penicord.com</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-red-600 p-3 rounded-full transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-red-600 p-3 rounded-full transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-red-600 p-3 rounded-full transition-colors">
                <FaTwitter />
              </a>
              <a href="https://wa.me/5493512345678" className="bg-gray-700 hover:bg-green-600 p-3 rounded-full transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Penicord Taller Mecánico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;