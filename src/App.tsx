import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessInfo from './components/BusinessInfo';
import About from './components/About';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import HowToOrder from './components/HowToOrder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-bakery-pink selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <BusinessInfo />
            <About />
            <HowToOrder />
            <Menu />
            <Gallery />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
}

export default App;
