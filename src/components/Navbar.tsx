import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Menú', href: '#menu' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Reseñas', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#inicio" className={`font-script text-3xl md:text-4xl transition-colors ${scrolled ? 'text-bakery-green' : 'text-white'} font-bold`}>
              Delicias by Eli
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-all ${scrolled ? 'text-gray-600 hover:text-bakery-gold' : 'text-white/80 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5354904825"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bakery-gold hover:bg-bakery-green text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <ShoppingBag size={18} />
                Pedir
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-2 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-lg font-bold text-gray-700 hover:bg-bakery-pink/10 rounded-2xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5354904825"
                className="block w-full bg-bakery-gold text-white px-8 py-5 rounded-2xl font-bold mt-6 shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                Pedir por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
