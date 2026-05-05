import { Star, MessageCircle, MapPin, Clock, Ban, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-20 px-4 border-t border-bakery-pink/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="font-script text-4xl text-bakery-green mb-6">Delicias by Eli</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Donde la dulzura se convierte en arte. Repostería artesanal con amor desde el corazón de Santa Clara.
            </p>
            <div className="flex items-center gap-2 bg-bakery-cream w-fit px-4 py-2 rounded-full border border-bakery-pink/10">
              <Star size={16} className="text-bakery-gold fill-bakery-gold" />
              <span className="text-sm font-bold text-gray-700">5.0 (2 reseñas)</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-widest text-sm">Navegación</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#inicio" className="hover:text-bakery-gold transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-bakery-gold transition-colors">Nosotros</a></li>
              <li><a href="#menu" className="hover:text-bakery-gold transition-colors">Menú</a></li>
              <li><a href="#galeria" className="hover:text-bakery-gold transition-colors">Galería</a></li>
              <li><a href="#testimonios" className="hover:text-bakery-gold transition-colors">Reseñas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-widest text-sm">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin size={20} className="text-bakery-green flex-shrink-0" />
                <span>Santa Clara, Villa Clara, Cuba</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <MessageCircle size={20} className="text-bakery-green flex-shrink-0" />
                <span>+53 5490 4825</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <Clock size={20} className="text-bakery-green flex-shrink-0" />
                <span>Lun-Dom 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-6 uppercase tracking-widest text-sm">Importante</h4>
            <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-start gap-3">
              <Ban size={20} className="text-red-400 flex-shrink-0" />
              <p className="text-xs text-red-700 leading-tight">
                <strong>Domicilio no disponible:</strong> Todos los pedidos deben ser retirados en nuestro taller en Santa Clara.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © 2026 Delicias by Eli. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span className="hover:text-bakery-gold transition-colors cursor-pointer">Privacidad</span>
            <span className="hover:text-bakery-gold transition-colors cursor-pointer">Términos</span>
            <span className="text-bakery-pink">Hecho con ❤️ en Cuba</span>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-bakery-pink/20 bg-bakery-cream/70 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-gray-600">
            Desarrollo web por <span className="font-bold text-bakery-green">Studio Lexair</span>. Si quieres crear tu pagina web:
            <span className="font-semibold"> studio.lexair@gmail.com</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:studio.lexair@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-bakery-green/30 px-4 py-2 text-sm font-bold text-bakery-green hover:bg-white"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href="https://wa.me/5352678747?text=Hola%20Studio%20Lexair,%20quiero%20crear%20mi%20pagina%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white hover:opacity-90"
            >
              <MessageCircle size={16} />
              WhatsApp 52678747
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
