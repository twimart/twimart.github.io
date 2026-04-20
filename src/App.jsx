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

  return (
    <LangProvider>
      <div className="min-h-screen bg-main text-main">
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
