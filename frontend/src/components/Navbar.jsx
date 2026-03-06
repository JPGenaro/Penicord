'use client';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp, FaTools } from 'react-icons/fa';

/**
 * Navbar - barra de navegación principal mejorada.
 *
 * Con efectos glassmorphism, animaciones y scroll detection.
 * @component
 * @returns {JSX.Element} Barra de navegación fija en la parte superior.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/#inicio", label: "Inicio" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#contacto", label: "Contacto" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/galeria", label: "Galería" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-white/90 backdrop-blur-md shadow-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Mejorado */}
          <a 
            href="/" 
            className="flex items-center gap-3 group relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Logo container */}
              <div className="relative bg-gradient-to-br from-red-600 to-red-700 text-white p-2.5 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300">
                <FaTools className="text-xl" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                PENICORD
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">Taller Mecánico</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-red-600 group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover effect */}
                <span className="absolute inset-0 bg-red-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                {/* Active indicator */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
            
            {/* CTA Button Mejorado */}
            <a
              href="https://wa.me/543518900167"
              target="_blank"
              rel="noopener noreferrer"
              className="relative ml-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-out"></span>
              
              <span className="relative z-10 flex items-center gap-2">
                <FaWhatsapp className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden lg:inline">Pedir turno</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button Mejorado */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 text-gray-700 hover:text-red-600 transition-colors duration-300"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <FaBars 
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} 
                size={24} 
              />
              <FaTimes 
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} 
                size={24} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Mejorado */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-100 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-red-50 hover:text-red-600 transition-all duration-300 group overflow-hidden"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-red-600 group-hover:h-1/2 transition-all duration-300 rounded-r"></span>
                  <span className="relative z-10 pl-2">{link.label}</span>
                </a>
              ))}
              
              <a
                href="https://wa.me/543518900167"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 group"
              >
                <FaWhatsapp className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                <span>Pedir turno por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;