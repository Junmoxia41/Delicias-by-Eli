import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const text = "Hola Eli! Vi tu página y quiero hacer un pedido 🎂 ¿Podemos coordinar?";
  const url = `https://wa.me/5354904825?text=${encodeURIComponent(text)}`;

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
      title="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
