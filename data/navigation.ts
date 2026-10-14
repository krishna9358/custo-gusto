export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/work', label: 'The Work' },
  { href: '/services', label: 'What We Do' },
  { href: '/clients', label: 'Clients' },
  { href: '/story', label: 'Story' },
  { href: '/commercials', label: 'Commercials' },
];

export const FOOTER_PAGES: NavItem[] = [
  { href: '/work', label: 'The Work' },
  { href: '/services', label: 'What We Do' },
  { href: '/clients', label: 'Clients' },
  { href: '/story', label: 'Our Story' },
  { href: '/commercials', label: 'Commercials' },
  { href: '/faq', label: 'FAQ' },
];
