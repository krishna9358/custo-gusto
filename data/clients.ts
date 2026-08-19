export interface TicketItem {
  title: string;
  desc: string;
  tag: string;
}

export interface DialItem {
  title: string;
  pct: number;
  min: string;
  max: string;
  desc: string;
}

export const TRUSTED_LOGOS: string[] = [
  'Decathlon',
  'Puma',
  'Sports Yard',
  'Benetton',
  'Mothercare',
  'one8',
  'Comic Con',
  'Winter Wonderland',
];

export const TICKETS_DATA: TicketItem[] = [
  {
    title: 'Comic Con',
    desc: 'Fan identity at festival scale. Demand outran capacity on both days.',
    tag: 'Festival',
  },
  {
    title: 'Winter Wonderland',
    desc: 'With Edamame and Mothercare. Family retail, holiday footfall.',
    tag: 'Seasonal retail',
  },
  {
    title: 'Weddings',
    desc: 'Keepsakes, napkins and apparel that guests actually keep.',
    tag: 'Private',
  },
  {
    title: 'Hotels & auto',
    desc: 'Robes and towels; personalised accessories at launches.',
    tag: 'Corporate',
  },
];

export const DIALS_DATA: DialItem[] = [
  {
    title: 'Days',
    pct: 82,
    min: '3 days',
    max: '6 months',
    desc: 'The biggest single factor, by a distance.',
  },
  {
    title: 'Machines',
    pct: 55,
    min: 'One',
    max: 'Four+',
    desc: 'About fifteen pieces an hour each. Your queue decides.',
  },
  {
    title: 'Techniques',
    pct: 40,
    min: 'Transfers',
    max: 'Embroidery',
    desc: 'Thread and foil take longer than pressing.',
  },
  {
    title: 'Cities',
    pct: 28,
    min: 'One',
    max: 'Nationwide',
    desc: 'Travel, stated plainly rather than buried.',
  },
];
