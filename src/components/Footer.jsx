import { personal } from '../data';
import { useLang } from '../LangContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="py-8 px-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm font-mono">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="text-muted text-xs">
          {t.footer.built}
        </p>
        <div className="flex gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors text-sm">
            GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors text-sm">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
