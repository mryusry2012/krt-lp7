import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Committee from './sections/Committee';
import Activities from './sections/Activities';
import GallerySection from './sections/GallerySection';
import Footer from './components/Footer';

function App() {
  const sectionIdsRef = useRef([
    'hero',
    'about',
    'committee-members',
    'activities',
    'gallery',
    'footer'
  ]);
  const currentSection = useRef(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key !== 'PageDown' && e.key !== 'PageUp') return;

      const sectionIds = sectionIdsRef.current;
      const direction = e.key === 'PageDown' ? 1 : -1;
      const nextSection = currentSection.current + direction;

      if (nextSection >= 0 && nextSection < sectionIds.length) {
        currentSection.current = nextSection;
        const target = document.getElementById(sectionIds[currentSection.current]);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <main className="bg-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Committee />
      <Activities />
      <GallerySection />
      <Footer />
    </main>
  );
}

export default App;
