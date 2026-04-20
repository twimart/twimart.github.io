import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { articles } from '../data';
import { useLang } from '../LangContext';
import SectionTitle from './SectionTitle';

const categoryColors = {
  Linux: { bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)', text: '#4ade80' },
  Privacy: { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)', text: '#c084fc' },
  'Sustainable Tech': { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', text: '#34d399' },
  Security: { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)', text: '#f87171' },
  AI: { bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.2)', text: '#38bdf8' },
};

function CategoryBadge({ category }) {
  const c = categoryColors[category] || categoryColors.AI;
  return (
    <span
      className="text-xs font-mono px-2 py-1 rounded-md font-medium"
      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
    >
      {category}
    </span>
  );
}

function ArticleCard({ article, index, onClick }) {
  const [ref, inView] = useInView(0.1);
  const { t } = useLang();

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onClick(article)}
      className="glass rounded-2xl p-6 cursor-pointer glow-hover transition-all duration-300 group flex flex-col"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <CategoryBadge category={article.category} />
        <span className="text-xs text-muted font-mono shrink-0">{article.readTime}</span>
      </div>

      <h3 className="font-bold text-main text-base mb-2 group-hover:text-accent transition-colors leading-snug">
        {article.title}
      </h3>

      <p className="text-muted text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-muted font-mono">{article.date}</span>
        <span className="text-xs text-accent flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
          {t.articles.read_more}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </motion.article>
  );
}

function ArticleModal({ article, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  // Simple markdown-ish renderer
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-xl font-bold text-main mt-8 mb-3" style={{ color: 'var(--color-accent)' }}>
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-lg font-semibold text-main mt-6 mb-2">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith('```')) {
        const codeLines = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <pre key={i} className="rounded-xl p-4 my-4 overflow-x-auto text-sm font-mono" style={{ background: 'var(--color-surface2)', border: '1px solid var(--color-border)' }}>
            <code className="text-accent">{codeLines.join('\n')}</code>
          </pre>
        );
      } else if (line.startsWith('- ')) {
        const items = [];
        while (i < lines.length && lines[i].startsWith('- ')) {
          items.push(lines[i].slice(2));
          i++;
        }
        elements.push(
          <ul key={i} className="space-y-1.5 my-3 ml-4">
            {items.map((item, j) => (
              <li key={j} className="text-muted text-sm flex items-start gap-2">
                <span className="text-accent mt-1 shrink-0">›</span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
              </li>
            ))}
          </ul>
        );
        continue;
      } else if (line.startsWith('| ')) {
        const tableLines = [];
        while (i < lines.length && lines[i].startsWith('|')) {
          if (!lines[i].match(/^\|[-\s|]+\|$/)) tableLines.push(lines[i]);
          i++;
        }
        const [header, ...rows] = tableLines;
        const headers = header.split('|').filter(Boolean).map(h => h.trim());
        elements.push(
          <div key={i} className="overflow-x-auto my-4">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  {headers.map((h, j) => (
                    <th key={j} className="text-left py-2 px-3 text-muted font-mono text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, j) => (
                  <tr key={j} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    {row.split('|').filter(Boolean).map((cell, k) => (
                      <td key={k} className="py-2 px-3 text-muted text-sm">{cell.trim()}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={i} className="border-l-2 pl-4 py-1 my-4 italic text-muted text-sm" style={{ borderColor: 'var(--color-accent)' }}>
            {line.slice(2)}
          </blockquote>
        );
      } else if (line.trim() === '') {
        // skip
      } else {
        elements.push(
          <p key={i} className="text-muted text-sm leading-relaxed my-2"
            dangerouslySetInnerHTML={{ __html: formatInline(line) }}
          />
        );
      }
      i++;
    }
    return elements;
  };

  const formatInline = (text) => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-main font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code style="background:var(--color-surface2);color:var(--color-accent);padding:1px 5px;border-radius:4px;font-size:0.85em">$1</code>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--color-accent);text-decoration:underline;text-underline-offset:3px">$1</a>');
  };

  return (
    <AnimatePresence>
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
          {/* Header */}
          <div className="sticky top-0 rounded-t-3xl px-5 sm:px-8 py-4 sm:py-5 flex items-start justify-between gap-4" style={{ background: 'var(--color-bg)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--color-border)' }}>
            <div>
              <CategoryBadge category={article.category} />
              <h2 className="font-bold text-main text-xl mt-2 leading-snug">{article.title}</h2>
              <div className="flex gap-3 mt-2 text-xs text-muted font-mono">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="glass rounded-lg p-2 text-muted hover:text-accent transition-colors shrink-0 mt-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-5 sm:px-8 pb-8 pt-4">
            <p className="text-muted text-base leading-relaxed mb-6 italic border-l-2 pl-4" style={{ borderColor: 'var(--color-accent2)' }}>
              {article.excerpt}
            </p>
            {renderContent(article.content)}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
              {article.tags.map(tag => (
                <span key={tag} className="text-xs font-mono px-2 py-1 rounded-md text-muted" style={{ background: 'var(--color-surface2)', border: '1px solid var(--color-border)' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Articles() {
  const [selected, setSelected] = useState(null);
  const { t } = useLang();

  return (
    <section id="articles" className="py-24 px-6 bg-main2">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label={t.articles.label}
          title={t.articles.title}
          subtitle={t.articles.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} onClick={setSelected} />
          ))}
        </div>
      </div>

      {selected && <ArticleModal article={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
