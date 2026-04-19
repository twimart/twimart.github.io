import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function SectionTitle({ label, title, subtitle }) {
  const [ref, inView] = useInView(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="font-mono text-xs text-accent tracking-widest uppercase mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-main mb-4" style={{ letterSpacing: '-0.01em' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted max-w-xl mx-auto text-base leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
