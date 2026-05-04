import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/gallery';

const Gallery = () => {
  const [filter, setFilter] = useState('Todos');
  const realCategories = [
    'Todos', 
    'Cake sencillo', 
    'Cake de chocolate', 
    'Cake 3 leches', 
    'Bocados dulces', 
    'Mini cake', 
    'Cakes temáticos. Encuentra la Fantasía ✨🎂'
  ];

  const filteredItems = filter === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="galeria" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-script text-6xl text-bakery-green mb-4">Nuestras Creaciones</h2>
        <div className="w-24 h-1.5 bg-bakery-gold mx-auto rounded-full mb-12" />

        {/* Filter buttons agrupados para mobile */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {realCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 rounded-full border-2 transition-all font-bold text-sm leading-tight text-center ${
                  filter === cat 
                  ? 'bg-bakery-gold border-bakery-gold text-white shadow-lg' 
                  : 'bg-white border-bakery-pink/30 text-gray-500 hover:border-bakery-pink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-96 overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl border-4 border-white"
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bakery-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
                  <p className="text-white font-bold text-xl drop-shadow-lg">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
          <p className="text-gray-400 mt-8 italic">Próximamente más fotos de esta categoría...</p>
        )}
      </div>
    </section>
  );
};

export default Gallery;
