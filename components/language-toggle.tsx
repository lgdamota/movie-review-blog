"use client";

import { useI18n, locales } from './i18n-provider';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();

  const handleLanguageChange = (newLocale: typeof locales[number]) => {
    setLocale(newLocale);
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((lang) => (
        <Button
          key={lang}
          variant={locale === lang ? "default" : "ghost"}
          size="sm"
          onClick={() => handleLanguageChange(lang)}
          className={`px-2 py-1 text-xs font-medium transition-colors ${
            locale === lang
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "text-muted-foreground hover:text-foreground hover:bg-accent"
          }`}
        >
          {t(`language.${lang}`)}
        </Button>
      ))}
    </div>
  );
}
