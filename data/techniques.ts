export interface TechItem {
  name: string;
  hook: string;
  body: string;
  chips: string[];
  time: string;
  isLive: boolean;
  technical: string;
  isHero: boolean;
  image: string;
}

export const TECHS_DATA: TechItem[] = [
  {
    name: 'Embroidery',
    hook: 'The one that feels expensive.',
    body: 'Thread raised off the surface, so your fingers find it before your eyes do. This is the jacket somebody still owns in twenty years, and still tells the story about.',
    chips: ['Shoes', 'Caps', 'Jackets', 'Bags'],
    time: '5 minutes',
    isLive: true,
    technical:
      'A needle and thread worked into the material itself by machine. Nothing is printed and nothing sits on top — the design is built out of the fabric.',
    isHero: true,
    image: '/img/01-shoe-cursive-10-embroidered.jpg',
  },
  {
    name: 'DTF print',
    hook: 'For designs too wild for thread.',
    body: 'Photographs, gradients, six colours crashing into each other. Anything you can put on a screen goes onto the shirt. This is the one the whole crowd ends up wearing.',
    chips: ['T-shirts', 'Jerseys', 'Hoodies', 'Event tees'],
    time: '3 minutes',
    isLive: false,
    technical:
      'Direct-to-film. Artwork prints onto a carrier film, adhesive is cured onto the wet ink, then the whole thing is fused into the fabric under heat. The printing happens beforehand; the pressing happens in front of you.',
    isHero: false,
    image: '/img/05-dtf-heat-press-process.jpg',
  },
  {
    name: 'Digital hot foil',
    hook: 'Gold you can see across a room.',
    body: 'The finish that makes a plain box look like it came from somewhere far more expensive. Put it on the invitation, the luggage tag, the inside of a wallet nobody else will open.',
    chips: ['Leather', 'Luggage tags', 'Notebooks', 'Gift boxes'],
    time: '2 minutes',
    isLive: true,
    technical:
      'Metallic foil bonded to the surface with heat. Because no metal plate has to be cut first, even hairline detail comes out clean.',
    isHero: false,
    image: '/img/dhf-09-hands-loading-machine.jpg',
  },
  {
    name: 'Laser engraving',
    hook: 'The showpiece.',
    body: 'A perfume bottle with her name down the side. A pen. A whisky glass. Nobody expects these things to be personal, which is exactly why they stop the room. It cannot peel or fade — the mark is the object.',
    chips: ['Perfume bottles', 'Pens', 'Glassware', 'Leather'],
    time: '5 minutes',
    isLive: true,
    technical:
      'A laser burns the design into the surface. Nothing is added and nothing sits on top, so there is no layer that can lift, wash off or wear away.',
    isHero: false,
    image: '/img/04-machine-rotary-tumbler.jpg',
  },
  {
    name: 'UV stickers',
    hook: 'Colour on the hard stuff.',
    body: 'The water bottle at the gym. The helmet. The phone case face-up on the table all through the meeting. Glass, metal, curved, painted — things nothing else will stick to properly.',
    chips: ['Bottles', 'Phone cases', 'Helmets', 'Flasks'],
    time: '1 minute',
    isLive: false,
    technical:
      'The same idea as DTF, built for hard surfaces. The design is UV-printed onto a film and cured on the spot, a second film is laminated over it, then it is pressed onto the object and the film peeled away. <strong>No heat at all</strong> — which is why it will sit on glass, metal and curves a press could never reach.',
    isHero: false,
    image: '/img/02-uv-phone-case-wide.jpg',
  },
];

/** The six techniques every service page shows, in the brief's order (22 Oct 2026).
    `live: false` means the piece is prepared ahead and applied in front of the guest. */
export interface SixWayItem {
  name: string;
  live: boolean;
  hook: string;
  desc: string;
  /** omitted where no per-piece time has been confirmed */
  time?: string;
  img: string;
  alt: string;
}

export const SIX_WAYS: SixWayItem[] = [
  {
    name: 'Embroidery',
    live: true,
    hook: 'The hero. The one they film.',
    desc: 'Names, dates and artwork stitched into shoes, caps, jackets and bags on German ZSK machines.',
    time: 'About 5 min',
    img: '/img/01-shoe-cursive-10-embroidered.jpg',
    alt: 'A name embroidered in cursive onto a sneaker at a Custo Gusto desk',
  },
  {
    name: 'Iron-on patches',
    live: false,
    hook: 'Embroidery, pressed on.',
    desc: 'Embroidered patches carrying a name, number or mark, ironed onto jackets, caps, bags and denim.',
    img: '/img/story_e5.jpg',
    alt: 'An embroidered one8 patch being ironed onto a jacket',
  },
  {
    name: 'DTF print',
    live: false,
    hook: 'Full colour, for the busy hour.',
    desc: 'Full-colour artwork on tees, jerseys, hoodies and event tees. Transfers are printed ahead; the guest watches it pressed on.',
    time: 'About 3 min',
    img: '/img/05-dtf-heat-press-process.jpg',
    alt: 'A DTF transfer being pressed onto a tee with a heat press',
  },
  {
    name: 'UV stickers',
    live: false,
    hook: 'For what cannot be stitched.',
    desc: 'Bottles, phone cases, helmets and flasks. Cured on the spot and pressed on with no heat.',
    time: 'About 1 min',
    img: '/img/02-uv-phone-case-wide.jpg',
    alt: 'A UV sticker applied to a phone case',
  },
  {
    name: 'Digital hot foil',
    live: true,
    hook: 'The premium finish.',
    desc: 'Metallic foil bonded with heat onto leather, luggage tags, notebooks and gift boxes, with no metal plate needed.',
    time: 'About 2 min',
    img: '/img/dhf-09-hands-loading-machine.jpg',
    alt: 'Hands loading a piece into the digital hot foil machine',
  },
  {
    name: 'Laser engraving',
    live: true,
    hook: 'Permanent, with nothing added.',
    desc: 'Perfume bottles, pens, glassware and leather, marked by laser. Nothing sits on top, so nothing wears off.',
    time: 'About 5 min',
    img: '/img/w12.jpg',
    alt: 'A name engraved into steel',
  },
];
