import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { personal, stats } from '../data';
import { useLang } from '../LangContext';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import NetworkMesh from './NetworkMesh';
import Magnetic from './Magnetic';

function SplitWord({ text, delay = 0 }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <span>{text}</span>;
  return (
    <span className="inline-flex">
      {text.split('').map((ch, i) => (
        <motion.span
          key={`${text}-${i}`}
          initial={{ opacity: 0, y: 42, rotateX: 50, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.55, delay: delay + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

function CountUp({ value, inView }) {
  const reduced = usePrefersReducedMotion();
  const [n, setN] = useState(value);

  useEffect(() => {
    const match = String(value).match(/^(\d+)/);
    if (!inView || reduced || !match) {
      setN(value);
      return;
    }
    const target = Number(match[1]);
    const suffix = String(value).slice(match[1].length);
    setN(`0${suffix}`);
    let start;
    let raf;
    const dur = 1100;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - (1 - p) ** 3;
      setN(`${Math.round(target * eased)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduced]);

  return n;
}

function TypewriterText({ texts }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = texts[textIndex % texts.length];

  useEffect(() => {
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex(i => (i + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, current]);

  useEffect(() => {
    setCharIndex(0);
    setDeleting(false);
    setTextIndex(0);
  }, [texts]);

  return (
    <span className="text-accent">
      {current.slice(0, charIndex)}
      <span className="inline-block w-0.5 h-8 bg-accent ml-1 animate-pulse align-middle" />
    </span>
  );
}

function TiltPhoto() {
  const containerRef = useRef(null);
  const glareRef = useRef(null);
  const hoveredRef = useRef(false);
  const frameRef = useRef(null);
  const startRef = useRef(0);

  const applyTransform = (rx, ry, scale, glareX = 50, glareY = 50, glareOpacity = 0) => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 60%)`;
    }
  };

  useEffect(() => {
    const animate = (now) => {
      if (!hoveredRef.current) {
        const t = (now - startRef.current) / 1000;
        const rx = Math.sin(t * 1.8) * 11;
        const ry = Math.cos(t * 1.3) * 11;
        applyTransform(rx, ry, 1);
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -18;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 18;
    const gx = ((e.clientX - rect.left) / rect.width) * 100;
    const gy = ((e.clientY - rect.top) / rect.height) * 100;
    applyTransform(rx, ry, 1.04, gx, gy, 0.18);
  };

  const handleMouseEnter = () => {
    hoveredRef.current = true;
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.08s ease-out, box-shadow 0.3s ease';
      containerRef.current.style.boxShadow = 'var(--shadow-photo-hover)';
    }
  };

  const handleMouseLeave = () => {
    hoveredRef.current = false;
    startRef.current = performance.now();
    if (containerRef.current) {
      containerRef.current.style.transition = 'box-shadow 0.3s ease';
      containerRef.current.style.boxShadow = 'var(--shadow-photo)';
    }
    if (glareRef.current) glareRef.current.style.background = 'none';
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex-shrink-0 rounded-full overflow-hidden cursor-pointer w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72"
      style={{ boxShadow: 'var(--shadow-photo)' }}
    >
      <img
        src="/profile.jpeg"
        alt="Thomas Wimart"
        className="w-full h-full object-cover object-top"
        draggable={false}
      />
      <div
        ref={glareRef}
        className="absolute inset-0 rounded-full pointer-events-none"
      />
    </div>
  );
}

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-16"
    >
      <NetworkMesh />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-mono text-muted mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {t.hero.badge}
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.86, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltPhoto />
          </motion.div>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-main leading-[0.95] text-center sm:text-left"
            style={{ letterSpacing: '-0.04em', perspective: '600px' }}
          >
            <span className="block"><SplitWord text="Thomas" delay={0.15} /></span>
            <span className="block text-accent"><SplitWord text="WIMART" delay={0.4} /></span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-6 min-h-10"
        >
          <TypewriterText texts={t.hero.typewriter} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.personal.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-3 gap-3 max-w-xl mx-auto mb-10"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              className="glass glass-spot rounded-2xl px-3 py-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.08, duration: 0.5 }}
            >
              <div className="font-display font-bold text-accent text-lg sm:text-xl leading-none mb-1">
                <CountUp value={s.value[lang]} inView />
              </div>
              <div className="text-[10px] sm:text-xs text-muted leading-snug">{t.hero.stats[s.key]}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <Magnetic>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 glow-hover"
              style={{
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))',
                color: '#fff',
              }}
            >
              {t.hero.cta_contact}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#experience"
              className="inline-block glass px-6 py-3 rounded-xl font-semibold text-sm text-muted hover:text-accent transition-all duration-300"
            >
              {t.hero.cta_work}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={personal.cv}
              download
              className="inline-block glass px-6 py-3 rounded-xl font-semibold text-sm text-muted hover:text-accent transition-all duration-300"
            >
              {t.hero.cta_cv}
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <SocialLink href={personal.github} label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </SocialLink>
          <SocialLink href={personal.linkedin} label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </SocialLink>
          <SocialLink href={`mailto:${personal.email}`} label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </SocialLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 mt-10 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs font-mono tracking-widest uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="glass w-10 h-10 rounded-xl flex items-center justify-center text-muted hover:text-accent transition-all duration-200 glow-hover"
    >
      {children}
    </a>
  );
}
