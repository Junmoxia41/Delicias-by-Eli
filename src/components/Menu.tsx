import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, categories, type MenuItem } from '../data/menu';
import { ShoppingCart, Star, ChevronDown, ChevronUp } from 'lucide-react';

const ProductCard = ({ item }: { item: MenuItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const waMsg = `Hola Eli! Me interesa ${item.name} (${item.price}). ¿Está disponible?`;
  const waUrl = `https://wa.me/5354904825?text=${encodeURIComponent(waMsg)}`;
  const imageSrc = item.image.startsWith('http')
    ? item.image
    : `${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full border border-bakery-pink/10"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageSrc}
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {item.popular && (
          <div className="absolute top-4 left-4 bg-bakery-gold text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 z-10">
            <Star size={12} className="fill-white" />
            Popular
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-bakery-green uppercase tracking-wider">
          {item.category}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight group-hover:text-bakery-gold transition-colors">{item.name}</h3>
          <p className={`text-gray-500 text-sm leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {item.description}
          </p>
          {item.description.length > 100 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-bakery-gold text-xs font-bold mt-2 flex items-center gap-1 hover:underline"
            >
              {isExpanded ? <>Ver menos <ChevronUp size={14}/></> : <>Ver más <ChevronDown size={14}/></>}
            </button>
          )}
        </div>
        
        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">Precio</span>
            <span className="text-2xl font-black text-bakery-gold">{item.price}</span>
          </div>
          
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-bakery-green hover:bg-bakery-gold text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-bakery-gold/20 transform hover:-translate-y-1"
          >
            <ShoppingCart size={20} />
            Lo quiero
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  
  const filteredItems = activeCategory === "Todos" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const activeCategoryData = categories.find(c => c.name === activeCategory);

  return (
    <section id="menu" className="py-24 px-4 bg-bakery-cream/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-monstera-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-script text-6xl text-bakery-green mb-4"
          >
            Nuestro Catálogo
          </motion.h2>
          <div className="w-24 h-1.5 bg-bakery-gold mx-auto rounded-full mb-8" />
          
          {/* Category Tabs agrupados para mobile */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setActiveCategory("Todos")}
                className={`px-4 py-2.5 rounded-full font-bold text-sm leading-tight text-center transition-all border-2 ${
                  activeCategory === "Todos" 
                  ? "bg-bakery-gold border-bakery-gold text-white shadow-lg" 
                  : "bg-white border-bakery-pink/20 text-gray-500 hover:border-bakery-pink"
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-4 py-2.5 rounded-full font-bold text-sm leading-tight text-center transition-all border-2 ${
                    activeCategory === cat.name 
                    ? "bg-bakery-gold border-bakery-gold text-white shadow-lg" 
                    : "bg-white border-bakery-pink/20 text-gray-500 hover:border-bakery-pink"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category Description */}
          <AnimatePresence mode="wait">
            {activeCategoryData && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-3xl mx-auto mb-16"
              >
                <p className="text-gray-600 leading-relaxed italic text-lg">
                  "{activeCategoryData.description}"
                </p>
                <p className="text-bakery-gold font-bold mt-4">
                  {filteredItems.length} {filteredItems.length === 1 ? 'elemento' : 'elementos'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
