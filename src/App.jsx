import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { LangProvider } from './LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onMove = (e) => {
      const target = e.target.closest?.('.glass-spot');
      if (!target) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty('--mx', `${e.clientX - r.left}px`);
      target.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <LangProvider>
      <div className="min-h-screen bg-main text-main noise">
        <Navbar dark={dark} toggleTheme={toggle} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Articles />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
