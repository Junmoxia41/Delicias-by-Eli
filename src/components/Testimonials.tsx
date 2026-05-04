import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl text-bakery-green mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-600">Nada nos hace más felices que endulzar sus momentos especiales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-bakery-cream p-8 rounded-3xl relative"
            >
              <div className="absolute top-6 right-8 text-bakery-pink/20">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-bakery-gold text-bakery-gold" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-8 relative z-10">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-bakery-gold"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
