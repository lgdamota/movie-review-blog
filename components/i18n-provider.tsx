"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Import all message files
import enMessages from '../messages/en.json';
import ptMessages from '../messages/pt.json';
import esMessages from '../messages/es.json';

export const locales = ['en', 'pt', 'es'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

interface I18nContextType {
  locale: Locale;
  messages: Record<string, any>;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Message cache to avoid re-importing
const messageCache: Record<Locale, Record<string, any>> = {
  en: enMessages,
  pt: ptMessages,
  es: esMessages,
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Record<string, any>>(enMessages);

  // Load saved locale on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('preferred-language') as Locale;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    setMessages(messageCache[newLocale]);
    localStorage.setItem('preferred-language', newLocale);
  };

  const t = (key: string, params?: Record<string, any>): string => {
    const keys = key.split('.');
    let value: any = messages;

    // Navigate through nested object
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    // If value is not found, return the key
    if (value === undefined) {
      console.warn(`Translation key "${key}" not found for locale "${locale}"`);
      return key;
    }

    // Handle parameter substitution
    if (params && typeof value === 'string') {
      return Object.entries(params).reduce((str, [paramKey, paramValue]) => {
        return str.replace(new RegExp(`\\$\\{${paramKey}\\}`, 'g'), String(paramValue));
      }, value);
    }

    return String(value);
  };

  const value: I18nContextType = {
    locale,
    messages,
    setLocale,
    t,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Re-export for convenience
export { useI18n as useTranslations };
