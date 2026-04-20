import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(l => (l === 'fr' ? 'en' : 'fr'));
  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
