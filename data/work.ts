export interface WorkItem {
  id: string;
  alt: string;
  tech: string;
  prod: string;
  shape: string;
}

export const WORK_ITEMS: WorkItem[] = [
  { id: 'w01', alt: 'Name embroidered on a sneaker', tech: 'emb', prod: 'shoes', shape: 'ph-sq' },
  { id: 'w02', alt: 'Embroidered motif on a shirt', tech: 'emb', prod: 'apparel', shape: 'ph-23' },
  { id: 'w03', alt: 'Engraved pen', tech: 'laser', prod: 'leather', shape: 'ph-16' },
  { id: 'w04', alt: 'Embroidered cap, worn', tech: 'emb', prod: 'caps', shape: 'ph-23' },
  { id: 'w05', alt: 'Foiled pieces, together', tech: 'foil', prod: 'leather', shape: 'ph-16' },
  { id: 'w06', alt: 'Embroidery, close enough to count the threads', tech: 'emb', prod: 'apparel', shape: 'ph-sq' },
  { id: 'w08', alt: 'UV sticker on a bottle', tech: 'uv', prod: 'hard', shape: 'ph-23' },
  { id: 'w09', alt: 'Personalised patches', tech: 'patch', prod: 'apparel', shape: 'ph-16' },
  { id: 'w10', alt: 'Embroidered detail on denim', tech: 'emb', prod: 'apparel', shape: 'ph-23' },
  { id: 'w11', alt: 'Bags, finished', tech: 'emb', prod: 'bags', shape: 'ph-16' },
  { id: 'w12', alt: 'A name engraved into steel', tech: 'laser', prod: 'hard', shape: 'ph-sq' },
  { id: 'w13', alt: 'Printed transfer on a tee', tech: 'dtf', prod: 'apparel', shape: 'ph-23' },
  { id: 'w14', alt: 'Caps, a set', tech: 'emb', prod: 'caps', shape: 'ph-16' },
  { id: 'w15', alt: 'UV on a curved surface', tech: 'uv', prod: 'hard', shape: 'ph-sq' },
  { id: 'w16', alt: 'Printed tote', tech: 'dtf', prod: 'bags', shape: 'ph-23' },
  { id: 'w17', alt: 'A pair, embroidered', tech: 'emb', prod: 'shoes', shape: 'ph-16' },
  { id: 'w18', alt: 'Gold emblem, thread edge', tech: 'patch', prod: 'apparel', shape: 'ph-sq' },
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
