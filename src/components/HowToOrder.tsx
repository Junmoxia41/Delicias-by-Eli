import { motion } from 'framer-motion';
import { Palette, MessageSquare, Cake } from 'lucide-react';

const HowToOrder = () => {
  const steps = [
    {
      icon: <Palette size={40} className="text-bakery-gold" />,
      title: "1. Elegí tu diseño",
      desc: "Navega por nuestra galería o envíanos una idea de lo que deseas."
    },
    {
      icon: <MessageSquare size={40} className="text-bakery-pink" />,
      title: "2. Contactame",
      desc: "Escríbeme por WhatsApp para coordinar fecha, sabor y presupuesto."
    },
    {
      icon: <Cake size={40} className="text-bakery-green" />,
      title: "3. ¡Disfrutá!",
      desc: "Retira tu pastel en Santa Clara o coordinamos la entrega."
    }
  ];

  return (
    <section className="py-20 px-4 bg-bakery-green text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl mb-4 text-bakery-pink">¿Cómo hacer tu pedido?</h2>
          <p className="text-bakery-cream/80">Tres pasos sencillos para tener el pastel de tus sueños.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-bakery-cream/70 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
