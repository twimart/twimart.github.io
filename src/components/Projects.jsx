import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data';
import { useLang } from '../LangContext';
import SectionTitle from './SectionTitle';

const statusStyles = {
  live: { bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)', text: '#4ade80' },
  'in-progress': { bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)', text: '#fbbf24' },
  concept: { bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)', text: '#a78bfa' },
};

function StatusBadge({ status }) {
  const { t } = useLang();
  const s = statusStyles[status] || statusStyles.live;
  return (
    <span
      className="text-xs font-mono px-2 py-1 rounded-md font-medium"
      style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.text }}
    >
      {t.projects.status[status]}
    </span>
  );
}

function ProjectCard({ project, index, onClick }) {
  const { t } = useLang();
  const [ref, inView] = useInView(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(project)}
      className="glass rounded-2xl overflow-hidden glow-hover transition-all duration-300 group flex flex-col cursor-pointer"
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      {project.image && (
        <div className="w-full h-40 overflow-hidden bg-surface2 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          {project.status ? <StatusBadge status={project.status} /> : <div />}
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted hover:text-accent transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted hover:text-accent transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <h3 className="font-bold text-main text-lg mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-1 rounded-md text-accent2"
              style={{ background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.15)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="text-xs text-accent flex items-center gap-1 group-hover:gap-2 transition-all duration-200 mt-4">
          {t.projects.view_details}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  const { t } = useLang();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-start justify-center sm:p-4 sm:pt-16"
        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="glass w-full sm:max-w-2xl max-h-[90vh] sm:max-h-[80vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl"
          style={{ border: '1px solid var(--color-border)' }}
        >
          {/* Image */}
          {project.image && (
            <div className="w-full h-56 overflow-hidden rounded-t-3xl bg-surface2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Header */}
          <div className={`sticky top-0 px-5 sm:px-8 py-4 sm:py-5 flex items-start justify-between gap-4 ${project.image ? '' : 'rounded-t-3xl'}`} style={{ background: 'var(--color-bg)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--color-border)' }}>
            <div>
              {project.status && <StatusBadge status={project.status} />}
              <h2 className="font-bold text-main text-xl mt-2 leading-snug">{project.title}</h2>
              <div className="flex gap-3 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline font-mono flex items-center gap-1"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent2 hover:underline font-mono flex items-center gap-1"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    {t.projects.live_site}
                  </a>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="glass rounded-lg p-2 text-muted hover:text-accent transition-colors shrink-0 mt-1 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-5 sm:px-8 pb-8 pt-6">
            <p className="text-muted text-sm leading-relaxed mb-6 italic border-l-2 pl-4" style={{ borderColor: 'var(--color-accent2)' }}>
              {project.description}
            </p>

            <h3 className="text-xs font-mono uppercase tracking-widest text-muted mb-3">{t.projects.tech_stack}</h3>
            <div className="flex flex-wrap gap-2 pb-6" style={{ borderBottom: '1px solid var(--color-border)' }}>
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-1 rounded-md text-accent2"
                  style={{ background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.15)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
  );
}

function ComingSoonCard({ index }) {
  const [ref, inView] = useInView(0.15);
  const { t } = useLang();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-40 border-dashed"
      style={{ borderStyle: 'dashed', borderColor: 'var(--color-border)', borderWidth: '1px' }}
    >
      <div className="text-muted text-3xl mb-3">+</div>
      <p className="text-muted text-sm font-medium">{t.projects.coming_soon}</p>
      <p className="text-muted text-xs mt-1">{t.projects.coming_soon_sub}</p>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const { t } = useLang();

  const projectsData = projects.map(p => ({
    ...p,
    description: t.projectDescriptions[p.id] ?? p.description,
  }));

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label={t.projects.label}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} onClick={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={{ ...selected, description: t.projectDescriptions[selected.id] ?? selected.description }} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
