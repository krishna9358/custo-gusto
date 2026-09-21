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
  {
    name: 'Iron-on patches',
    hook: 'Built for a queue.',
    body: 'When there is a line out the door and every single person still walks away with their own. The fast one, for the days when speed is the whole point.',
    chips: ['Jackets', 'Bags', 'Caps', 'Uniforms'],
    time: '1 minute',
    isLive: false,
    technical:
      'Embroidered separately, then heat-set into place. The patch is cut for one person; only the pressing happens at the desk.',
    isHero: false,
    image: '/img/04-orange-character-model-portrait.jpg',
  },
];
