export interface ScaleCaseItem {
  id: string;
  title: string;
  highlight: string;
  description: string;
  techniques: string[];
  videoUrl: string;
  thumbnail?: string;
}

export const SCALE_CASES_DATA: ScaleCaseItem[] = [
  {
    id: 'one8-global-premiere',
    title: 'one8 × Custo Gusto — Global Premiere',
    highlight: '300+ custom shoes in 5 hours',
    description:
      'At the one8 Global Premiere with Virat Kohli (Yashobhoomi, with District by Zomato), we ran 4 machines and a live design desk. Guests picked their pair, designed it with us, and walked out wearing a one-of-one in minutes.',
    techniques: ['Live embroidery', 'Footwear', 'Brand launch'],
    videoUrl: 'https://youtu.be/9Z110fUe90Q',
  },
  {
    id: 'uniqlo-in-store',
    title: 'Uniqlo — In-store customization',
    highlight: '700+ one-of-one designs in 3 days',
    description:
      'We turned Uniqlo clothes and bags into personal pieces, live in the store. The store saw its own sales rise across the three days.',
    techniques: ['Apparel & bags', 'Retail activation'],
    videoUrl: 'https://youtu.be/9Z110fUe90Q',
  },
  {
    id: '52-degrees-comic-con',
    title: '52 Degrees — Comic Con, year after year',
    highlight: 'Custom caps, made on the spot, across multiple Comic Cons',
    description:
      'We partner with cap brand 52 Degrees at Comic Con editions every year. Fans design a cap around their fandom and get it made live at the booth — the crowd around the machine does the marketing.',
    techniques: ['Live embroidery', 'Caps', 'Fan events'],
    videoUrl: 'https://youtu.be/9Z110fUe90Q',
  },
  {
    id: 'mothercare-winter-wonderland',
    title: 'Mothercare — Winter Wonderland',
    highlight: 'Custom embroidery on childrenswear',
    description:
      'At Winter Wonderland, parents personalised Mothercare kidswear with custom embroidery, stitched live. A gift that becomes a keepsake.',
    techniques: ['Live embroidery', 'Kidswear', 'Festive event'],
    videoUrl: 'https://youtu.be/9Z110fUe90Q',
  },
  {
    id: 'edamame-winter-wonderland',
    title: 'Edamame — Winter Wonderland',
    highlight: 'Print customization on children’s clothing',
    description:
      'Alongside Mothercare, we ran live print customization for Edamame’s kids’ range — full-colour designs, applied on the spot, for families moving through the event.',
    techniques: ['Print customization', 'Kidswear', 'Festive event'],
    videoUrl: 'https://youtu.be/9Z110fUe90Q',
  },
  {
    id: 'rcb-fan-jerseys',
    title: 'RCB — Five seasons of fan jerseys',
    highlight: '1,00,000+ jerseys personalised',
    description:
      'For five years we’ve put fans’ names on the back of their RCB jerseys. More than a lakh fans now wear a jersey that’s theirs alone.',
    techniques: ['Print customization', 'Sports fandom', 'Long-running partnership'],
    videoUrl: 'https://youtu.be/9Z110fUe90Q',
  },
];
