export interface SampleDeal {
  title: string;
  originalPrice: number;
  promoPrice: number;
  discount: number;
  store: string;
}

export interface WhatsAppGroup {
  id: string;
  name: string;
  slug: string;
  category: 'geral' | 'plantas' | 'celular' | 'casa' | 'fitness' | 'tenis' | 'perfume';
  categoryLabel: string;
  description: string;
  highlights: string[];
  membersCount: number;
  maxMembers: number;
  isPopular?: boolean;
  isNew?: boolean;
  accentColor: string;
  bgGradient: string;
  whatsappUrl: string;
  sampleDeals: SampleDeal[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  city: string;
  savedAmount: string;
  productBought: string;
  groupName: string;
  quote: string;
  rating: number;
  dateAgo: string;
}

export interface LiveDeal {
  id: string;
  title: string;
  category: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  store: string;
  timeAgo: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
