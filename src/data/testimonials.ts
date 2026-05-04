export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  stars: number;
  date: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Javier Correa",
    role: "Cliente Destacado",
    text: "Exquisito, casi todo lo he probado. Muy recomendado.",
    stars: 5,
    date: "nov 2025",
    avatar: "https://i.pravatar.cc/150?u=javier"
  },
  {
    id: 2,
    name: "Francis Montenegro",
    role: "Cliente Satisfecho",
    text: "Puras delicias. Muy recomendado.",
    stars: 5,
    date: "sept 2025",
    avatar: "https://i.pravatar.cc/150?u=francis"
  }
];
