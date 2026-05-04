import { motion } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';

const Hero = () => {
  const heroImage = 'imagen/hero-cake.jpg';

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${heroImage}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6 text-white/90 bg-white/10 backdrop-blur-md w-fit mx-auto px-4 py-1.5 rounded-full border border-white/20">
            <MapPin size={16} className="text-bakery-pink" />
            <span className="text-sm font-medium tracking-wide uppercase">Santa Clara, Cuba</span>
          </div>
          
          <h1 className="font-script text-6xl md:text-9xl text-white drop-shadow-2xl mb-6 leading-tight">
            Delicias by Eli
          </h1>
          <p className="text-xl md:text-3xl text-bakery-cream font-medium mb-12 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
            Repostería artesanal en Santa Clara. Sabores auténticos, decorados únicos y un toque de alma caribeña.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(212 175 55 / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5354904825?text=Hola%20Eli!%20Vi%20tu%20página%20y%20quiero%20hacer%20un%20pedido%20🎂"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bakery-gold text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl flex items-center gap-2 transition-all"
            >
              Pedir por WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="bg-white/20 backdrop-blur-md border-2 border-white/40 text-white px-10 py-5 rounded-full text-xl font-bold transition-all"
            >
              Ver menú
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={40} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
