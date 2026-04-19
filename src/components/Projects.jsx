import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data';
import SectionTitle from './SectionTitle';

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 glow-hover transition-all duration-300 group flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-surface2 flex items-center justify-center text-accent">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
          </svg>
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
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
      <p className="text-muted text-sm leading-relaxed flex-1 mb-4">
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
    </motion.div>
  );
}

function ComingSoonCard({ index }) {
  const [ref, inView] = useInView(0.15);
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
      <p className="text-muted text-sm font-medium">More projects coming soon</p>
      <p className="text-muted text-xs mt-1">Stay tuned!</p>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Work"
          title="Projects"
          subtitle="Things I've built and worked on."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
          <ComingSoonCard index={projects.length} />
          <ComingSoonCard index={projects.length + 1} />
        </div>
      </div>
    </section>
  );
}
