import { graph, abs, SITE_URL, ORG_ID, WEBSITE_ID, PHONE_SCHEMA, EMAIL } from '@/lib/seo';
import { SERVICE_PAGES } from '@/data/seoPages';

/* Homepage title and description. app/page.tsx uses these for its metadata,
   so the WebPage / Organization nodes below can never drift from the <head>. */
export const HOME_TITLE = 'Custo Gusto — Made in front of you. Never repeated.';
export const HOME_DESCRIPTION =
  'India’s live customisation brand. One-of-one shoes, apparel, and accessories embroidered, printed, or laser engraved live in minutes at retail desks across India.';

const HOME_URL = `${SITE_URL}/`;
const HERO_IMAGE = abs('/img/hero-live.jpg');

/* The site-wide entity graph, rendered on "/" only.
   schema_homepage.html at the repo root is generated from this object;
   edit here and regenerate that file. No aggregateRating / reviews on purpose:
   self-served ratings are ineligible for rich results. */
export const HOME_SCHEMA = graph(
  {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Custo Gusto',
    alternateName: 'CustoGusto',
    url: HOME_URL,
    logo: { '@type': 'ImageObject', url: abs('/img/lemon-logo.png') },
    image: HERO_IMAGE,
    description: HOME_DESCRIPTION,
    slogan: 'Made in front of you. Never repeated.',
    email: EMAIL,
    telephone: PHONE_SCHEMA,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'E-107, Sector 6',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201301',
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'Country', name: 'India' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE_SCHEMA,
      email: EMAIL,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    sameAs: [
      'https://www.youtube.com/@CustoGusto-desk',
      'https://www.instagram.com/custogusto.embroidery',
    ],
    knowsAbout: [
      'Live embroidery',
      'DTF printing',
      'Digital hot foil',
      'Laser engraving',
      'UV printing',
      'Custom patches',
      'Brand activation',
      'Retail activation',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Live customisation services',
      /* the @ids match serviceNode() on each service page */
      itemListElement: SERVICE_PAGES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@id': `${abs(s.href)}#service` },
      })),
    },
  },
  {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: HOME_URL,
    name: 'Custo Gusto',
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  },
  {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: HOME_URL,
    name: HOME_TITLE,
    description: HOME_DESCRIPTION,
    inLanguage: 'en-IN',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: HERO_IMAGE,
  },
);
