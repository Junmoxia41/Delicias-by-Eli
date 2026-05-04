export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: 'Cake sencillo' | 'Cake de chocolate' | 'Cake 3 leches' | 'Bocados dulces' | 'Mini cake' | 'Cakes temáticos. Encuentra la Fantasía ✨🎂';
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/imagen/cake-sencillo/latido-de-guayaba.webp",
    alt: "Cake de Vainilla y Guayaba",
    category: 'Cake sencillo'
  },
  {
    id: 2,
    src: "/imagen/cakes-tematicos/cake-tematico-mega-papel.webp",
    alt: "Cake Temático",
    category: 'Cakes temáticos. Encuentra la Fantasía ✨🎂'
  },
  {
    id: 3,
    src: "/imagen/mini-cake/mini-cake-tres-leches.webp",
    alt: "Mini Cakes",
    category: 'Mini cake'
  },
  {
    id: 4,
    src: "/imagen/cake-3-leches/beso-de-angel.webp",
    alt: "Tres Leches Especial",
    category: 'Cake 3 leches'
  },
  {
    id: 5,
    src: "/imagen/cakes-tematicos/cake-tematico-3-pisos.webp",
    alt: "Cake de 3 Pisos",
    category: 'Cakes temáticos. Encuentra la Fantasía ✨🎂'
  },
  {
    id: 6,
    src: "/imagen/cake-chocolate/chocoaventura.webp",
    alt: "Chocoaventura",
    category: 'Cake de chocolate'
  },
  {
    id: 7,
    src: "/imagen/bocados-dulces/suspiros-dulces.webp",
    alt: "Cupcakes Decorados",
    category: 'Bocados dulces'
  },
  {
    id: 8,
    src: "/imagen/mini-cake/mini-cake-sencillo.webp",
    alt: "Mini Cake de Corazón",
    category: 'Mini cake'
  },
  {
    id: 9,
    src: "/imagen/cake-sencillo/ternura-cocida.webp",
    alt: "Ternura Cocida",
    category: 'Cake sencillo'
  }
];
