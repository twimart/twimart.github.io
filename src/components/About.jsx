import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLang } from '../LangContext';
import SectionTitle from './SectionTitle';

const factIcons = ['🏢', '🎓', '📍', '🌐'];
const factKeys = ['company', 'school', 'location', 'languages'];
const factValues = ['Thales', 'UniLaSalle Amiens', 'Amiens, France', 'FR · EN (C1)'];

export default function About() {
  const [ref, inView] = useInView(0.2);
  const { t } = useLang();

  const facts = factKeys.map((key, i) => ({
    icon: factIcons[i],
    label: t.about.facts[key],
    value: factValues[i],
  }));

  return (
    <section id="about" className="py-24 px-6 bg-main2">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label={t.about.label} title={t.about.title} />

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted text-lg leading-relaxed mb-6">
              {t.about.p1[0]}{' '}
              <span className="text-accent font-medium">{t.about.p1[1]}</span>
              {t.about.p1[2]}{' '}
              <span className="text-accent font-medium">{t.about.p1[3]}</span>
              {t.about.p1[4]}
            </p>
            <p className="text-muted text-lg leading-relaxed mb-6">
              {t.about.p2}
            </p>
            <p className="text-muted text-lg leading-relaxed">
              {t.about.p3[0]}{' '}
              <span className="text-accent font-medium">{t.about.p3[1]}</span>
              {t.about.p3[2]}
            </p>
          </motion.div>

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
