import type { Metadata } from 'next';

/* Canonical host. Every canonical, OG url and JSON-LD @id is built from this,
   so the www / non-www choice lives in exactly one place. */
export const SITE_URL = 'https://www.custogusto.in';
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const PHONE_DISPLAY = '+91 81308 68884';
export const PHONE_TEL = 'tel:+918130868884';
export const PHONE_SCHEMA = '+91-81308-68884';
export const EMAIL = 'laksh@custogusto.in';
export const DEFAULT_IMAGE = '/img/hero-live.jpg';

/* a compose window rather than mailto: — same reasoning as ContactForm */
export const gmailCompose = (subject?: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}${
    subject ? `&su=${encodeURIComponent(subject)}` : ''
  }`;

export const whatsApp = (text?: string) =>
  `https://wa.me/918130868884${text ? `?text=${encodeURIComponent(text)}` : ''}`;

/** Absolute URL for a root-relative path ('/' → 'https://www.custogusto.in/'). */
export const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

export function pageMetadata({
  path,
  title,
  description,
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords,
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url: path,
      siteName: 'Custo Gusto',
      locale: 'en_IN',
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

/* ---------- JSON-LD builders ----------
   Pages pass the same arrays to these and to the visible markup, so the
   FAQ schema can never drift from the FAQ on screen. */

export interface Crumb {
  name: string;
  path: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export function webPageNode({
  path,
  name,
  description,
  image = DEFAULT_IMAGE,
}: {
  path: string;
  name: string;
  description: string;
  image?: string;
}) {
  const url = abs(path);
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: abs(image),
    breadcrumb: { '@id': `${url}#breadcrumb` },
  };
}

export function breadcrumbNode(path: string, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(path)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function serviceNode({
  path,
  name,
  serviceType,
  description,
}: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
}) {
  const url = abs(path);
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    serviceType,
    description,
    provider: { '@id': ORG_ID },
    url,
    areaServed: { '@type': 'Country', name: 'India' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${url}#brief`,
      servicePhone: PHONE_SCHEMA,
    },
  };
}

export function faqNode(path: string, items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleNode({
  path,
  headline,
  description,
  image,
  about,
}: {
  path: string;
  headline: string;
  description: string;
  image: string;
  /** schema.org nodes the case is about, e.g. { '@type': 'Organization', name: 'Decathlon' } */
  about: Record<string, unknown>[];
}) {
  const url = abs(path);
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    image: abs(image),
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    about,
  };
}

export const graph = (...nodes: Record<string, unknown>[]) => ({
  '@context': 'https://schema.org',
  '@graph': nodes,
});
