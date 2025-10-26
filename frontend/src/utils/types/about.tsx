// types.tsx

export interface CTA {
  id: number;
  label: string;
  style?: string | null;
  isExternal?: boolean | null;
  href?: string | null;
}

export interface Card {
  id: number;
  subTitle: string;
  title: string;
  description: string;
  cta: CTA;
}

export interface SharedQuoteBlock {
  __component: "shared.quote";
  id: number;
  card: Card[];
}

export interface ImageData {
  id: number;
  documentId: string;
  alternativeText?: string | null;
  url: string;
}

export interface ImageWrapper {
  id: number;
  alt?: string | null;
  image: ImageData;
}

export interface AboutEmpowerBlock {
  __component: "about.empower";
  id: number;
  title: string;
  description: string;
  image: ImageWrapper;
}

export interface MissionVisionImage {
  id: number;
  alt?: string | null;
  image: ImageData;
}

export interface AboutMissionVisionBlock {
  __component: "about.mission-x-vision";
  id: number;
  title: string;
  description: string;
  images: MissionVisionImage[];
}

export interface CardWithIcon {
  id: number;
  title: string;
  description: string;
  icon: ImageWrapper;
}

export interface SharedCardsWithIconBlock {
  __component: "shared.cards-with-icon";
  id: number;
  title: string;
  cardWithIcon: CardWithIcon[];
}

export type Block =
  | SharedQuoteBlock
  | AboutEmpowerBlock
  | AboutMissionVisionBlock
  | SharedCardsWithIconBlock;

export interface AboutData {
  id: number;
  documentId: string;
  title: string;
  text1: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: Block[];
}

export interface AboutResponse {
  data: AboutData;
  meta: Record<string, unknown>;
}
