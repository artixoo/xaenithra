import { useEffect } from 'react';
import Lenis from 'lenis';

import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Team from './sections/Team';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative min-h-screen text-charcoal bg-bone">
      <div className="grain-overlay" />
      <CustomCursor />
      <Navigation />

      <div className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Team />
        <Projects />
        <Timeline />
      </div>

      <Footer />
    </main>
  );
}

export default App;
