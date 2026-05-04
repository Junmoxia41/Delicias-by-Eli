import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Banknote, Ban } from 'lucide-react';

const BusinessInfo = () => {
  const info = [
    { icon: <Star size={18} className="text-bakery-gold fill-bakery-gold" />, text: "5.0 · 2 reseñas" },
    { icon: <MapPin size={18} className="text-bakery-green" />, text: "Santa Clara, Cuba" },
    { icon: <Clock size={18} className="text-bakery-green" />, text: "Abierto · Cierra 8pm" },
    { icon: <Banknote size={18} className="text-bakery-green" />, text: "Precios en CUP" },
    { icon: <Ban size={18} className="text-red-500" />, text: "Sin domicilio · Solo retiro" },
  ];

  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white border-b border-bakery-pink/20 py-4 shadow-sm sticky top-[64px] md:top-[72px] z-40 overflow-x-auto whitespace-nowrap scrollbar-hide"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-8 md:justify-center">
        {info.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm font-bold text-gray-600 flex-shrink-0">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default BusinessInfo;
