import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personal } from '../data';
import SectionTitle from './SectionTitle';

const facts = [
  { icon: '🏢', label: 'Company', value: 'Thales' },
  { icon: '🎓', label: 'School', value: 'UniLaSalle Amiens' },
  { icon: '📍', label: 'Location', value: 'Amiens, France' },
  { icon: '🌐', label: 'Languages', value: 'FR · EN (C1)' },
];

export default function About() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" className="py-24 px-6 bg-main2">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Introduction" title="About Me" />

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted text-lg leading-relaxed mb-6">
              I'm a 3rd-year apprentice engineering student specialising in{' '}
              <span className="text-accent font-medium">Computer Networks & Cybersecurity</span>,
              currently on a work-study contract at{' '}
              <span className="text-accent font-medium">Thales</span> in Lambersart.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-6">
              My day-to-day work involves configuring and deploying network equipment
              (routers, switches, firewalls), validating complex network configurations,
              and writing technical documentation.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Beyond networking, I'm passionate about{' '}
              <span className="text-accent font-medium">Linux, automation, and AI</span>.
              I'm always looking to expand my skill set and explore new technologies.
            </p>
          </motion.div>

          {/* Facts grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass rounded-2xl p-5 glow-hover transition-all duration-300"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="text-xs text-muted font-mono uppercase tracking-wider mb-1">{f.label}</div>
                <div className="text-sm font-semibold text-main">{f.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
