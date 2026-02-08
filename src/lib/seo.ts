import type { Language } from '@content/content';

export interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  lang: Language;
  path: string;
  ogImage?: string;
}

export function generateHreflang(path: string): { lang: Language; url: string }[] {
  const cleanPath = path.replace(/^\/(de|es)/, '') || '/';
  
  return [
    { lang: 'en', url: `https://awanar-expeditions.com${cleanPath}` },
    { lang: 'de', url: `https://awanar-expeditions.com/de${cleanPath === '/' ? '' : cleanPath}` },
    { lang: 'es', url: `https://awanar-expeditions.com/es${cleanPath === '/' ? '' : cleanPath}` },
  ];
}

export function generateSchemaOrg(props: { 
  title: string; 
  description: string; 
  url: string;
  type?: 'WebPage' | 'Organization';
}) {
  const { title, description, url, type = 'WebPage' } = props;
  
  if (type === 'Organization') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AWANAR EXPEDITIONS',
      url: 'https://awanar-expeditions.com',
      description,
      sameAs: [
        'https://instagram.com/awanar.expeditions',
      ],
    };
  }
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'Organization',
      name: 'AWANAR EXPEDITIONS',
      url: 'https://awanar-expeditions.com',
    },
  };
}
