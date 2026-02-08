import type { Language } from '@content/content';

export function getLangFromPath(pathname: string): Language {
  if (pathname.startsWith('/de/') || pathname === '/de') return 'de';
  if (pathname.startsWith('/es/') || pathname === '/es') return 'es';
  return 'en';
}

export function getPathWithoutLang(pathname: string): string {
  if (pathname.startsWith('/de/')) return pathname.slice(3) || '/';
  if (pathname.startsWith('/es/')) return pathname.slice(3) || '/';
  if (pathname === '/de' || pathname === '/es') return '/';
  return pathname;
}

export function createLocalizedPath(path: string, lang: Language): string {
  if (lang === 'en') return path;
  return `/${lang}${path === '/' ? '' : path}`;
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
};

export const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  es: '🇪🇸',
};
