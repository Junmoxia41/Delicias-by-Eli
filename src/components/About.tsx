import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Banknote, Ban } from 'lucide-react';

const About = () => {
  const profileWebp = `${import.meta.env.BASE_URL}imagen/eli-repostera.webp`;
  const profileJpg = `${import.meta.env.BASE_URL}imagen/eli-repostera.jpg`;

  const infoPills = [
    { icon: <Star size={18} className="text-bakery-gold fill-bakery-gold" />, text: "5.0 (2 reseñas)", label: "Calificación" },
    { icon: <Banknote size={18} className="text-bakery-green" />, text: "CUP ($$ - $$$$$)", label: "Rango de Precios" },
    { icon: <MapPin size={18} className="text-bakery-green" />, text: "Santa Clara, Villa Clara", label: "Ubicación" },
    { icon: <Clock size={18} className="text-bakery-green" />, text: "Lun-Dom 8am - 8pm", label: "Horario" },
    { icon: <Ban size={18} className="text-red-500" />, text: "No disponible", label: "Domicilio" },
  ];

  return (
    <section id="nosotros" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3.5rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src={profileWebp}
                onError={(e) => { e.currentTarget.src = profileJpg; }}
                alt="Eli en su cocina artesanal" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-bakery-pink rounded-full -z-0 opacity-40 blur-2xl" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-bakery-gold rounded-full -z-0 opacity-20 blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-script text-6xl text-bakery-green mb-8">Nuestra Historia</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-10">
              <p>
                Bienvenidos a un rincón donde la dulzura se convierte en arte. 
                Desde suaves tres leches hasta rellenos tropicales como coco, guayaba o leche condensada cocida, cada creación está pensada para celebrar momentos únicos.
              </p>
              <p className="font-bold italic border-l-4 border-bakery-gold pl-6 py-2 text-bakery-green">
                "Decoraciones festivas, sabores auténticos y nombres que despiertan recuerdos: aquí, cada pastel tiene alma."
              </p>
              
              <ul className="space-y-4 pt-4 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎂</span>
                  <span>Pasteles personalizados para cumpleaños, eventos y celebraciones especiales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🧁</span>
                  <span>Mini cakes, cupcakes y colecciones temáticas con encanto visual.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🌸</span>
                  <span>Inspiración tropical, poética y emocional en cada diseño.</span>
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {infoPills.map((pill, index) => (
                <div key={index} className="bg-bakery-cream p-5 rounded-[2rem] flex items-center gap-4 border border-bakery-pink/10 shadow-sm">
                  <div className="bg-white p-3 rounded-2xl shadow-sm text-bakery-green">
                    {pill.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">{pill.label}</p>
                    <p className="text-sm font-black text-gray-800 leading-none">{pill.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
