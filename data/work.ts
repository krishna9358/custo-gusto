export interface WorkItem {
  id: string;
  alt: string;
  tech: string;
  prod: string;
  shape: string;
  title?: string;
}

export interface WorkCategory {
  id: string;
  slug: string;
  label: string;
  description: string;
}

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    id: 'shoes',
    slug: 'shoes',
    label: 'Shoes & Footwear',
    description: 'Sneakers, canvas, leather shoes & slides embroidered live at retail desks.',
  },
  {
    id: 'caps',
    slug: 'caps',
    label: 'Caps & Headwear',
    description: 'Custom embroidered caps, beanies, and visors with thread edges and gold emblems.',
  },
  {
    id: 'apparel',
    slug: 'apparel',
    label: 'Tees, Denim & Jackets',
    description: 'DTF printed graphics, direct embroidery, and custom patches on apparel.',
  },
  {
    id: 'bags',
    slug: 'bags',
    label: 'Bags & Totes',
    description: 'Canvas totes, backpacks, and travel bags marked live in minutes.',
  },
  {
    id: 'leather',
    slug: 'leather',
    label: 'Leather & Foil',
    description: 'Laser engraved and hot foil stamped leather wallets, cardholders, and belts.',
  },
  {
    id: 'hard',
    slug: 'hard',
    label: 'Hard Goods & Steel',
    description: 'Laser-engraved steel bottles, UV sticker tumblers, and metal accessories.',
  },
];

export const WORK_ITEMS: WorkItem[] = [
  { id: 'w01', alt: 'Name embroidered on a sneaker', tech: 'emb', prod: 'shoes', shape: 'ph-sq', title: 'Live Embroidered Sneaker' },
  { id: 'w02', alt: 'Embroidered motif on a shirt', tech: 'emb', prod: 'apparel', shape: 'ph-23', title: 'Custom Shirt Embroidery' },
  { id: 'w03', alt: 'Engraved pen', tech: 'laser', prod: 'leather', shape: 'ph-16', title: 'Precision Laser Engraved Pen' },
  { id: 'w04', alt: 'Embroidered cap, worn', tech: 'emb', prod: 'caps', shape: 'ph-23', title: 'Custom Cap Embroidery' },
  { id: 'w05', alt: 'Foiled pieces, together', tech: 'foil', prod: 'leather', shape: 'ph-16', title: 'Hot Foil Leather Stamping' },
  { id: 'w06', alt: 'Embroidery, close enough to count the threads', tech: 'emb', prod: 'apparel', shape: 'ph-sq', title: 'High-Density Thread Detail' },
  { id: 'w08', alt: 'UV sticker on a bottle', tech: 'uv', prod: 'hard', shape: 'ph-23', title: 'UV Transfer on Drinkware' },
  { id: 'w09', alt: 'Personalised patches', tech: 'patch', prod: 'apparel', shape: 'ph-16', title: 'Custom Embroidered Patches' },
  { id: 'w10', alt: 'Embroidered detail on denim', tech: 'emb', prod: 'apparel', shape: 'ph-23', title: 'Denim Jacket Embroidery' },
  { id: 'w11', alt: 'Bags, finished', tech: 'emb', prod: 'bags', shape: 'ph-16', title: 'Embroidered Travel Duffel' },
  { id: 'w12', alt: 'A name engraved into steel', tech: 'laser', prod: 'hard', shape: 'ph-sq', title: 'Steel Tumbler Engraving' },
  { id: 'w13', alt: 'Printed transfer on a tee', tech: 'dtf', prod: 'apparel', shape: 'ph-23', title: 'Live DTF Printed Graphic Tee' },
  { id: 'w14', alt: 'Caps, a set', tech: 'emb', prod: 'caps', shape: 'ph-16', title: 'Matching Custom Cap Series' },
  { id: 'w15', alt: 'UV on a curved surface', tech: 'uv', prod: 'hard', shape: 'ph-sq', title: 'Curved Surface UV Transfer' },
  { id: 'w16', alt: 'Printed tote', tech: 'dtf', prod: 'bags', shape: 'ph-23', title: 'Custom Canvas Tote' },
  { id: 'w17', alt: 'A pair, embroidered', tech: 'emb', prod: 'shoes', shape: 'ph-16', title: 'Matching Embroidered Pair' },
  { id: 'w18', alt: 'Gold emblem, thread edge', tech: 'patch', prod: 'apparel', shape: 'ph-sq', title: 'Gold Thread Crest Emblem' },
];

export const TECH_OPTIONS = [
  { value: 'all', label: 'All techniques' },
  { value: 'emb', label: 'Embroidery' },
  { value: 'dtf', label: 'DTF' },
  { value: 'foil', label: 'Hot foil' },
  { value: 'laser', label: 'Laser' },
  { value: 'uv', label: 'UV' },
  { value: 'patch', label: 'Patches' },
];

export const PROD_OPTIONS = [
  { value: 'all', label: 'All products' },
  { value: 'shoes', label: 'Shoes' },
  { value: 'caps', label: 'Caps' },
  { value: 'apparel', label: 'Apparel' },
  { value: 'bags', label: 'Bags' },
  { value: 'leather', label: 'Leather' },
  { value: 'hard', label: 'Hard goods' },
];
