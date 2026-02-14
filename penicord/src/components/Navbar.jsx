'use client';
import { useState } from 'react';
import { FaPhone, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

/**
 * Navbar - barra de navegación principal.
 *
 * Maneja el estado de menú móvil y renderiza enlaces y botones de acción.
 * @component
 * @returns {JSX.Element} Barra de navegación fija en la parte superior.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
              <span className="font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">PENICORD</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#inicio" className="text-gray-700 hover:text-red-600 font-medium">Inicio</a>
            <a href="/#servicios" className="text-gray-700 hover:text-red-600 font-medium">Servicios</a>
            <a href="/nosotros" className="text-gray-700 hover:text-red-600 font-medium">Nosotros</a>
            <a href="/galeria" className="text-gray-700 hover:text-red-600 font-medium">Galería</a>
            <a href="/#contacto" className="text-gray-700 hover:text-red-600 font-medium">Contacto</a>
            
            <a
              href="https://wa.me/543518900167"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-red-600 font-medium">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-red-600 font-medium">Servicios</a>
              <a href="#nosotros" className="text-gray-700 hover:text-red-600 font-medium">Nosotros</a>
              <a href="#galeria" className="text-gray-700 hover:text-red-600 font-medium">Galería</a>
              <a href="#contacto" className="text-gray-700 hover:text-red-600 font-medium">Contacto</a>
              
              <a
                href="https://wa.me/5493512033152"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-lg" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;