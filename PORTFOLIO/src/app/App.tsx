import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';
import { GridBackground } from './components/effects/GridBackground';
import { SpotlightEffect } from './components/effects/SpotlightEffect';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { CommandPalette } from './components/ui/CommandPalette';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function App() {
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <CommandPalette />
      <div className="noise-bg" />
      <GridBackground />
      <SpotlightEffect />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}