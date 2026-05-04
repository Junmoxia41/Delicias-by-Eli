import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Send, Ban } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 px-4 bg-bakery-cream">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-bakery-pink/10">
          {/* Info side */}
          <div className="bg-bakery-gold p-12 lg:w-2/5 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-monstera-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="font-script text-6xl mb-10">Contactame</h2>
              <p className="mb-12 text-white/90 text-lg">
                ¿Tenés una duda o querés un presupuesto personalizado? Estoy aquí para ayudarte a crear el pastel de tus sueños.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 uppercase font-bold tracking-widest mb-1">WhatsApp & Móvil</p>
                    <p className="text-xl font-bold">+53 5490 4825</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 uppercase font-bold tracking-widest mb-1">Ubicación</p>
                    <p className="text-xl font-bold">Santa Clara, Villa Clara, Cuba</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 uppercase font-bold tracking-widest mb-1">Horario</p>
                    <p className="text-xl font-bold">Lun-Dom 8:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-red-400/30 p-4 rounded-2xl backdrop-blur-md border border-red-400/20">
                    <Ban size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-white/70 uppercase font-bold tracking-widest mb-1">Entrega</p>
                    <p className="text-xl font-bold">Solo retiro en Santa Clara</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-white/20">
                <a 
                  href="https://wa.me/5354904825?text=Hola%20Eli!%20Quiero%20hacer%20un%20pedido%20🎂"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-bakery-gold px-8 py-4 rounded-2xl font-black shadow-xl hover:bg-bakery-pink hover:text-white transition-all transform hover:scale-105"
                >
                  <MessageCircle size={24} />
                  Chat Directo
                </a>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="p-12 lg:w-3/5 bg-white">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Enviame un mensaje</h3>
            <form action="https://formspree.io/f/mnqkgrrr" method="POST" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Tu Nombre</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-bakery-gold focus:ring-4 focus:ring-bakery-gold/10 outline-none transition-all bg-gray-50/50"
                    placeholder="Ej. Maria González"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Fecha del Evento</label>
                  <input 
                    type="date" 
                    name="event_date"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-bakery-gold focus:ring-4 focus:ring-bakery-gold/10 outline-none transition-all bg-gray-50/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">¿Qué necesitás?</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-bakery-gold focus:ring-4 focus:ring-bakery-gold/10 outline-none transition-all bg-gray-50/50 resize-none"
                  placeholder="Contame detalles: sabor, diseño, porciones..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(46 90 46 / 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-bakery-green text-white font-bold py-5 rounded-2xl shadow-xl hover:bg-bakery-green/90 transition-all flex items-center justify-center gap-3 text-lg"
              >
                <Send size={20} />
                Enviar Mensaje
              </motion.button>
              
              <p className="text-sm text-gray-400 text-center">
                Te responderé lo antes posible a través de WhatsApp o llamada.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
