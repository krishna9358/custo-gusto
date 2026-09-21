export interface TicketItem {
  title: string;
  desc: string;
  tag: string;
}

export interface DialItem {
  title: string;
  pct: number;
  min: string;
  mid?: string;
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
    pct: 100,
    min: '3 days',
    mid: '6 months',
    max: 'Years',
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
    pct: 100,
    min: 'Print',
    mid: 'Laser',
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

export interface CaseItem {
  title: string;
  meta: string;
  body: string;
  noteLabel?: string;
  noteText?: string;
}

export const CASES_DATA: CaseItem[] = [
  {
    title: 'one8 Global Premiere',
    meta: 'The biggest night we have had',
    body: 'Virat Kohli’s brand launch at Yashobhoomi, produced with District by Zomato. The product launch, at the highest level India runs one. Four machines, eight operators, three designers. 300+ one-of-one pieces in a single evening, roughly five hours. The queue never emptied — that was the point.',
  },
  {
    title: 'Decathlon',
    meta: 'Embedded desks · pan-India',
    body: 'The proof that a desk works on an ordinary floor, on an ordinary day. Live embroidery desks running inside stores across the country, with customers returning to customise again.',
    noteLabel: 'The behaviour that matters:',
    noteText: 'the average customer at our desks does not take home one piece. They take home three.',
  },
  {
    title: 'Mothercare',
    meta: 'Embedded desk · Bandra',
    body: 'Names on babywear, blankets and towels. The memory marker — a gift that gets kept rather than used, and the reason the desk earns its floor space in a category where nothing else is personal.',
  },
  {
    title: 'Puma',
    meta: 'Retail desks · five stores',
    body: 'One of the first floors that let this run at all. Five stores, real conditions, real customers. The model you are looking at today only exists because someone was willing to give it a floor to be tested on.',
  },
  {
    title: 'Sports Yard & Benetton',
    meta: 'Retail · ongoing',
    body: 'Live personalisation as a permanent part of the in-store experience — the layer an online store cannot ship, sitting on the floor where the decision is already being made.',
  },
];
