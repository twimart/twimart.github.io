import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experiences, education } from '../data';
import { useLang } from '../LangContext';
import SectionTitle from './SectionTitle';

function TimelineItem({ item, index, isExperience }) {
  const [ref, inView] = useInView(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-main" />

      <div className="glass rounded-2xl p-6 glow-hover transition-all duration-300 group">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div className="min-w-0">
            <h3 className="font-bold text-main text-base group-hover:text-accent transition-colors leading-snug">
              {isExperience ? item.role : item.degree}
            </h3>
            <p className="text-accent font-semibold text-sm">
              {isExperience ? item.company : item.school}
            </p>
          </div>
          <div className="sm:text-right shrink-0">
            <span className="font-mono text-xs text-muted bg-surface2 rounded-full px-3 py-1 whitespace-nowrap">
              {item.period}
            </span>
            {item.duration && (
              <div className="text-xs text-muted mt-1">{item.duration}</div>
            )}
          </div>
        </div>

        {item.location && (
          <div className="flex items-center gap-1 text-muted text-xs mb-3 font-mono">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {item.location}
          </div>
        )}

        {item.description && (
          <ul className="space-y-1.5 mb-4">
            {(Array.isArray(item.description) ? item.description : [item.description]).map((d, i) => (
              <li key={i} className="text-muted text-sm flex items-start gap-2">
                <span className="text-accent mt-1.5 shrink-0">›</span>
                {d}
              </li>
            ))}
          </ul>
        )}

        {item.tags && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded-md text-accent"
                style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.15)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { t } = useLang();

  const experiencesData = experiences.map((exp, i) => ({
    ...exp,
    role: t.experiences[i]?.role ?? exp.role,
    description: t.experiences[i]?.description ?? exp.description,
  }));

  const educationData = education.map((edu, i) => ({
    ...edu,
    degree: t.education[i]?.degree ?? edu.degree,
    school: t.education[i]?.school ?? edu.school,
    description: t.education[i]?.description ?? edu.description,
  }));

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          label={t.experience.label}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold text-main mb-8 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-surface2 flex items-center justify-center text-sm">💼</span>
              {t.experience.work}
            </h3>
            {experiencesData.map((exp, i) => (
              <TimelineItem key={i} item={exp} index={i} isExperience />
            ))}
          </div>

          <div>
            <h3 className="text-lg font-bold text-main mb-8 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-surface2 flex items-center justify-center text-sm">🎓</span>
              {t.experience.education}
            </h3>
            {educationData.map((edu, i) => (
              <TimelineItem key={i} item={edu} index={i} isExperience={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
