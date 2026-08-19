export interface EngineItem {
  swatch: string;
  kicker: string;
  name: string;
  problem: string;
  solution: string;
  proof: string;
  href: string;
}

export const ENGINES_DATA: EngineItem[] = [
  {
    swatch: 'e-ind',
    kicker: 'A desk that stays',
    name: 'On your floor',
    problem:
      'Your store is competing with a phone that has everything on it and never closes.',
    solution:
      'We put a desk on your floor with a machine, an operator and a designer on it, and we keep it running every day. It gives a person a reason to come in that nothing online can match.',
    proof: '13 desks running today',
    href: '/services',
  },
  {
    swatch: 'e-mar',
    kicker: 'A desk that travels',
    name: 'At your launch',
    problem:
      'Most launches get seen, photographed once, and forgotten by the following week.',
    solution:
      'We bring the whole desk to your event for a few days and make something for each guest while they watch. They leave holding it, and they film it themselves.',
    proof: '300+ made in one evening',
    href: '/services',
  },
  {
    swatch: 'e-bri',
    kicker: 'No desk at all',
    name: 'Send it to us',
    problem:
      'Sometimes you just need two hundred good things made properly, by a certain date.',
    solution:
      'Send us the product, or we will find it. Tell us what goes on it. We make it here and send it back finished.',
    proof: 'Six ways to mark a thing',
    href: '/services',
  },
];

export const COVERAGE_CHIPS: string[] = [
  'All types of shoes',
  'Caps',
  'Tees & denim',
  'Jackets',
  'Bags & totes',
  'Socks',
  'Towels',
  'Belts & straps',
  'Watch straps',
  'Leather goods',
  'Tags & packaging',
  'Stationery',
];
