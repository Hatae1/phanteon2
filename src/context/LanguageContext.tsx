import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, translations, TranslationDictionary } from '../data/translations';
import { MythologicalCharacter, MythologicalItem } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationDictionary;
  getCharName: (char: MythologicalCharacter) => string;
  getCharRomanName: (char: MythologicalCharacter) => string;
  getItemName: (item: MythologicalItem) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'ko';

  // 1. Check user preference stored in localStorage
  try {
    const saved = localStorage.getItem('olympus_pref_lang');
    if (saved === 'ko' || saved === 'en') {
      return saved as Language;
    }
  } catch {
    // ignore local storage restrictions if any
  }

  // 2. Check user browser / connection environment language
  try {
    const browserLangs = navigator.languages || [navigator.language];
    for (const lang of browserLangs) {
      if (!lang) continue;
      const lower = lang.toLowerCase().trim();
      if (lower.startsWith('ko')) {
        return 'ko';
      }
    }
  } catch {
    // ignore
  }

  // Default to English for international users
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('olympus_pref_lang', lang);
    } catch {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = useMemo(() => translations[language], [language]);

  const getCharName = (char: MythologicalCharacter): string => {
    return language === 'en' ? (char.nameEn || char.nameKo) : char.nameKo;
  };

  const getCharRomanName = (char: MythologicalCharacter): string => {
    return language === 'en' ? (char.romanNameEn || char.romanNameKo) : char.romanNameKo;
  };

  const getItemName = (item: MythologicalItem): string => {
    return language === 'en' ? (item.nameEn || item.nameKo) : item.nameKo;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      getCharName,
      getCharRomanName,
      getItemName,
    }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
