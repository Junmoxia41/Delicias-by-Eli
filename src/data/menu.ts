export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  popular?: boolean;
}

export const categories = [
  {
    name: "Cake sencillo",
    description: "Nuestros pasteles vienen con rellenos a elección: coco, guayaba o leche condensada cocinada. Su tamaño es de 18cm de diámetro y 8 de altura aproximadamente. Cada pastel es una obra única: rellenos exquisitos, diseño a tu medida, y una experiencia que despierta los sentidos."
  },
  {
    name: "Cake de chocolate",
    description: "Para los amantes del cacao intenso y las decoraciones divertidas."
  },
  {
    name: "Cake 3 leches",
    description: "Panetela de vainilla con relleno de nata o leche condensada cocinada. Pueden ser de vainilla, chocolate o fresa."
  },
  {
    name: "Bocados dulces",
    description: "Pequeños placeres artesanales para cualquier momento del día."
  },
  {
    name: "Mini cake",
    description: "El formato perfecto para celebraciones íntimas o regalos especiales."
  },
  {
    name: "Cakes temáticos. Encuentra la Fantasía ✨🎂",
    description: "Cada cake temático que creamos es una historia comestible, una celebración visual y un homenaje al arte de la repostería. Diseñados para emocionar, nuestros pasteles no solo deleitan el paladar, sino que transforman cualquier ocasión en un recuerdo inolvidable."
  }
];

export const menuItems: MenuItem[] = [
  // CAKE SENCILLO
  {
    id: 1,
    name: "Suspiro de Capuchino",
    description: "Panetela de capuchino con relleno de guayaba, coco o leche condensada cocinada. Incluye una decoración sencilla.",
    price: "5500,00 CUP",
    image: "/imagen/cake-sencillo/suspiro-de-capuchino.webp",
    category: "Cake sencillo",
    popular: false
  },
  {
    id: 2,
    name: "Latido de guayaba",
    description: "✨ Pastel de Vainilla con Relleno de Mermelada de Guayaba Una celebración de sabor caribeño en cada capa. Este pastel está elaborado con panetela de vainilla suave y esponjosa, rellena con mermelada de guayaba cocinada lentamente hasta alcanzar una textura sedosa y un dulzor vibrante. El contraste entre la delicadeza de la vainilla y la intensidad frutal de la guayaba crea una experiencia envolvente, cálida y festiva. Perfecto para cumpleaños, tardes especiales o como un detalle que despierta recuerdos dulces y tropicales.",
    price: "3000,00 CUP",
    image: "/imagen/cake-sencillo/latido-de-guayaba.webp",
    category: "Cake sencillo",
    popular: true
  },
  {
    id: 3,
    name: "Ternura cocida",
    description: "🥛✨ Pastel de Vainilla con Relleno de Leche Condensada Cocinada Una delicia que combina suavidad y profundidad en cada capa. Este pastel está elaborado con panetela de vainilla esponjosa, rellena con leche condensada cocinada lentamente hasta alcanzar una textura cremosa y un sabor caramelizado, similar al dulce de leche. Cada bocado es cálido, envolvente y lleno de carácter, perfecto para quienes buscan una dulzura intensa con un toque artesanal. Ideal para celebraciones con alma tradicional y gusto refinado.",
    price: "3200,00 CUP",
    image: "/imagen/cake-sencillo/ternura-cocida.webp",
    category: "Cake sencillo",
    popular: true
  },
  {
    id: 4,
    name: "Temáticos",
    description: "Ideales para celebraciones infantiles, colores vivos y decoraciones juguetonas.",
    price: "3000,00 CUP",
    image: "/imagen/cake-sencillo/tematicos.webp",
    category: "Cake sencillo",
    popular: true
  },
  {
    id: 5,
    name: "Doble capricho",
    description: "Pastel doble que viene con rellenos a elección: coco, guayaba o leche condensada cocinada. Cada pastel es una obra única: rellenos exquisitos, diseño a tu medida, y una experiencia que despierta los sentidos.",
    price: "6000,00 CUP",
    image: "/imagen/cake-sencillo/doble-capricho.webp",
    category: "Cake sencillo",
    popular: false
  },
  {
    id: 6,
    name: "Caricia de coco",
    description: "🌴 Pastel de Vainilla con Relleno de Dulce de Coco Una combinación que acaricia el paladar con calidez y textura. Este pastel está elaborado con panetela de vainilla suave y esponjosa, rellena con dulce de coco cocinado lentamente hasta alcanzar una consistencia cremosa y envolvente. Cada bocado es una invitación a saborear lo tropical con elegancia, donde la vainilla aporta delicadeza y el coco, carácter. Ideal para celebraciones con alma caribeña, momentos especiales o simplemente para regalarte un instante de dulzura auténtica.",
    price: "3000,00 CUP",
    image: "/imagen/cake-sencillo/caricia-de-coco.webp",
    category: "Cake sencillo",
    popular: true
  },
  // CAKE DE CHOCOLATE
  {
    id: 7,
    name: "Chocoaventura",
    description: "Cake de chocolate con chucherías (18cm de diámetro y 8cm de alto aproximadamente).",
    price: "6800,00 CUP",
    image: "/imagen/cake-chocolate/chocoaventura.webp",
    category: "Cake de chocolate",
    popular: true
  },
  // CAKE 3 LECHES
  {
    id: 8,
    name: "Beso de ángel",
    description: "Un cake de panetela de vainilla, suave y esponjoso, completamente humedecido en una mezcla cremosa de tres leches que lo vuelve jugoso y delicado. En el centro lleva un relleno de flan firme y sedoso, que aporta un contraste dulce y suave. El resultado es un postre fresco, cremoso y muy equilibrado, donde la vainilla, la leche y el flan se unen en una textura irresistible.",
    price: "7500,00 CUP",
    image: "/imagen/cake-3-leches/beso-de-angel.webp",
    category: "Cake 3 leches",
    popular: true
  },
  {
    id: 9,
    name: "Dulce capricho",
    description: "🍰 Pastel Tres Leches con Relleno de Chantilly de Vainilla Sumérgete en la suavidad de una panetela bañada en tres tipos de leche, que se funden en cada bocado con una dulzura delicada y envolvente. En su interior, una capa generosa de crema chantilly batida al punto perfecto aporta ligereza y un toque sedoso que equilibra la intensidad láctea. Ideal para celebraciones especiales, este pastel combina tradición y elegancia en una presentación que conquista tanto la vista como el paladar.",
    price: "5200,00 CUP",
    image: "/imagen/cake-3-leches/dulce-capricho.webp",
    category: "Cake 3 leches",
    popular: false
  },
  {
    id: 10,
    name: "Suspiro de cacao",
    description: "🍫✨ Pastel Tres Leches de Chocolate con Confituras. (30×25×10cm) (largo×ancho×alto) Una creación que celebra el exceso con elegancia. Este pastel combina la suavidad de una panetela de chocolate bañada en tres leches con una cobertura de crema batida ligera, coronada por una sinfonía de confituras: galletas, barquillos, chocolates y detalles crujientes que despiertan todos los sentidos. El contraste entre lo húmedo y lo crocante, lo cremoso y lo intenso, convierte cada porción en una experiencia festiva y sofisticada. Ideal para cumpleaños con carácter, celebraciones memorables o simplemente para regalar un momento de puro deleite.",
    price: "13.200,00 CUP",
    image: "/imagen/cake-3-leches/suspiro-de-cacao.webp",
    category: "Cake 3 leches",
    popular: true
  },
  {
    id: 11,
    name: "Suspiro de chocolate",
    description: "🍫 Mini Cake Tres Leches de chocolate Una delicia en formato pequeño que combina lo mejor del cacao y la suavidad láctea. Este mini pastel está elaborado con panetela de chocolate intenso, bañada en una mezcla de tres leches que le aporta una textura húmeda y envolvente. En su interior, una capa de crema chantilly de chocolate aporta equilibrio, ligereza y un contraste sedoso que realza cada bocado. Perfecto para regalar, compartir o disfrutar en un momento especial. Un clásico reinventado con carácter y dulzura.",
    price: "1500,00 CUP",
    image: "/imagen/cake-3-leches/suspiro-de-chocolate.webp",
    category: "Cake 3 leches",
    popular: false
  },
  {
    id: 12,
    name: "Bomba de chocolate",
    description: "Una suave y esponjosa panetela de cacao intenso, rellena con delicada crema chantilly de chocolate (nata), batida hasta alcanzar una textura sedosa y envolvente. Perfecta para celebraciones con estilo, donde el sabor y la presentación se convierten en protagonistas.",
    price: "4500,00 CUP",
    image: "/imagen/cake-3-leches/bomba-de-chocolate.webp",
    category: "Cake 3 leches",
    popular: true
  },
  {
    id: 13,
    name: "Suspiro rosado",
    description: "🍓 Mini Cake Tres Leches con Mousse de Fresa Una joya en formato pequeño con frescura. Este mini pastel está elaborado con panetela suave, bañada en una mezcla de tres leches que le aporta una textura húmeda y delicada. En su interior, una mousse de fresa ligera y aireada añade un toque frutal y vibrante, creando un contraste perfecto entre lo cremoso y lo refrescante. Ideal para celebraciones románticas, detalles especiales o simplemente para regalarte un momento de dulzura con estilo.",
    price: "1500,00 CUP",
    image: "/imagen/cake-3-leches/suspiro-rosado.webp",
    category: "Cake 3 leches",
    popular: false
  },
  {
    id: 14,
    name: "Mini suspiro de leche",
    description: "🍰 Mini Cake Tres Leches con Chantilly de Vainilla Pequeño en tamaño, inmenso en sabor. Este delicado pastel está elaborado con una panetela suave, bañada en una mezcla de tres leches que le aporta una textura húmeda y envolvente. En su interior, una capa generosa de crema chantilly batida con vainilla realza cada bocado con una suavidad sedosa y un dulzor equilibrado. Perfecto para celebraciones íntimas, detalles especiales o simplemente para regalarte un momento de dulzura refinada.",
    price: "1500,00 CUP",
    image: "/imagen/cake-3-leches/mini-suspiro-de-leche.webp",
    category: "Cake 3 leches",
    popular: false
  },
  // BOCADOS DULCES
  {
    id: 15,
    name: "Brownie",
    description: "Brownie artesanal de chocolate intenso, crujiente por fuera y suave por dentro. Un bocado irresistible para los amantes del cacao puro.",
    price: "140,00 CUP",
    image: "/imagen/bocados-dulces/brownie.webp",
    category: "Bocados dulces",
    popular: false
  },
  {
    id: 16,
    name: "Mini donas",
    description: "Pequeñas donas artesanales, esponjosas y deliciosas. El bocado perfecto para endulzar cualquier momento del día.",
    price: "50,00 CUP",
    image: "/imagen/bocados-dulces/mini-donas.webp",
    category: "Bocados dulces",
    popular: false
  },
  {
    id: 17,
    name: "Suspiros dulces",
    description: "🧁 Cupcakes de Vainilla, Chocolate o Fresa con Merengue Pequeños placeres que despiertan grandes emociones. Cada cupcake está elaborado con una base suave y esponjosa, disponible en tres sabores irresistibles: 🌼 Vainilla delicada, 🍫 chocolate intenso o 🍓 fresa vibrante. Coronados con un merengue batido hasta alcanzar una textura ligera y brillante, que se funde suavemente en cada bocado. Perfectos para celebraciones, regalos dulces o simplemente para consentirte.",
    price: "120,00 CUP",
    image: "/imagen/bocados-dulces/suspiros-dulces.webp",
    category: "Bocados dulces",
    popular: false
  },
  {
    id: 18,
    name: "Trufas de chocolate 🍫",
    description: "Trufas artesanales de chocolate negro, elaboradas con ingredientes de primera calidad. Intensas, cremosas y perfectas como regalo o detalle especial.",
    price: "120,00 CUP",
    image: "/imagen/bocados-dulces/trufas-de-chocolate.webp",
    category: "Bocados dulces",
    popular: false
  },
  // MINI CAKE
  {
    id: 19,
    name: "Mini cake personal",
    description: "Cake mini 3 leches personalizado.",
    price: "1300,00 CUP",
    image: "/imagen/mini-cake/mini-cake-tres-leches.webp",
    category: "Mini cake",
    popular: true
  },
  {
    id: 20,
    name: "Mini cake personal",
    description: "Puede ser con relleno de coco o leche condensada cocinada.",
    price: "1000,00 CUP",
    image: "/imagen/mini-cake/mini-cake-sencillo.webp",
    category: "Mini cake",
    popular: false
  },
  // CAKES TEMÁTICOS
  {
    id: 21,
    name: "Cake temático mega grande con papele comestible",
    description: "Rinde para 50-60 porciones.",
    price: "12.500,00 CUP",
    image: "/imagen/cakes-tematicos/cake-tematico-mega-papel.webp",
    category: "Cakes temáticos. Encuentra la Fantasía ✨🎂",
    popular: true
  },
  {
    id: 22,
    name: "Brisa de Melocotón y Dulce de Leche",
    description: "Un bizcocho de vainilla suave y esponjoso con Doble relleno de dulce de leche cremoso, trozos jugosos de melocotón y pequeños merenguitos. Todo queda envuelto en una capa ligera de nata montada, creando un equilibrio perfecto entre dulzura, frescura y textura.",
    price: "15.000,00 CUP",
    image: "/imagen/cakes-tematicos/brisa-de-melocoton.webp",
    category: "Cakes temáticos. Encuentra la Fantasía ✨🎂",
    popular: false
  },
  {
    id: 23,
    name: "Cake temático mega grande",
    description: "Panetela de bandeja con relleno de su elección con un segundo piso redondo mas pequeño. Rinde para 60-70 porciones.",
    price: "16.000,00 CUP",
    image: "/imagen/cakes-tematicos/cake-tematico-mega.webp",
    category: "Cakes temáticos. Encuentra la Fantasía ✨🎂",
    popular: false
  },
  {
    id: 24,
    name: "Cake temático de 3 pisos",
    description: "Una obra maestra de tres niveles. Diseño personalizado, sabores a elección y una presencia imponente que convierte cualquier celebración en un evento inolvidable.",
    price: "24.000,00 CUP",
    image: "/imagen/cakes-tematicos/cake-tematico-3-pisos.webp",
    category: "Cakes temáticos. Encuentra la Fantasía ✨🎂",
    popular: false
  },
  {
    id: 25,
    name: "Cake de bandeja con temática",
    description: "Pastel de bandeja con diseño temático personalizado. Perfecto para grupos grandes, combinando el sabor artesanal con una presentación única y festiva.",
    price: "10.000,00 CUP",
    image: "/imagen/cakes-tematicos/cake-bandeja-tematica.webp",
    category: "Cakes temáticos. Encuentra la Fantasía ✨🎂",
    popular: false
  },
  {
    id: 26,
    name: "Cake sencillo con temática",
    description: "Nuestro clásico cake sencillo elevado con decoración temática personalizada. La combinación perfecta entre sabor artesanal y diseño único para tu celebración.",
    price: "5000,00 CUP",
    image: "/imagen/cakes-tematicos/cake-sencillo-tematica.webp",
    category: "Cakes temáticos. Encuentra la Fantasía ✨🎂",
    popular: false
  }
];
