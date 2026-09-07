import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills, certifications } from '../data';
import { useLang } from '../LangContext';
import SectionTitle from './SectionTitle';

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass glass-spot rounded-2xl p-6 glow-hover transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{skill.icon}</span>
        <h3 className="font-bold text-main group-hover:text-accent transition-colors">{skill.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
            whileHover={{ scale: 1.08 }}
            className="text-sm px-3 py-1.5 rounded-lg font-medium transition-all duration-200 cursor-default"
            style={{
              background: 'var(--color-surface2)',
              color: 'var(--color-muted)',
              border: '1px solid var(--color-border)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(56,189,248,0.1)';
              e.currentTarget.style.color = 'var(--color-accent)';
              e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--color-surface2)';
              e.currentTarget.style.color = 'var(--color-muted)';
              e.currentTarget.style.borderColor = 'var(--color-border)';
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t, lang } = useLang();

  const skillsData = skills.map((s, i) => ({
    ...s,
    category: t.skillCategories[i] ?? s.category,
  }));

  return (
    <section id="skills" className="py-24 px-6 bg-main2">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label={t.skills.label}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsData.map((s, i) => (
            <SkillCard key={s.category} skill={s} index={i} />
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-4">{t.certifications.title}</h3>
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass glass-spot rounded-xl px-5 py-4 flex items-start gap-3 glow-hover max-w-md"
                >
                  <span className="text-2xl mt-0.5">{cert.icon}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <p className="text-sm font-semibold text-main">{cert.name}</p>
                      {cert.academic && (
                        <span
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full font-medium"
                          style={{
                            color: '#fbbf24',
                            background: 'rgba(251,191,36,0.1)',
                            border: '1px solid rgba(251,191,36,0.3)',
                          }}
                        >
                          {t.certifications.academic}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted">
                      {typeof cert.issuer === 'string' ? cert.issuer : cert.issuer[lang]}
                    </p>
                    <p className="text-xs text-muted mt-1.5 leading-relaxed">
                      {typeof cert.description === 'string' ? cert.description : cert.description[lang]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
