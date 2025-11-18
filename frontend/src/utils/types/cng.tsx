export interface StrapiImage {
  id: number;
  documentId: string;
  alternativeText?: string | null;
  url: string;
}

export interface ImageWrapper {
  id: number;
  alt?: string | null;
  image: StrapiImage;
}

export interface CTA {
  id: number;
  label: string;
  style: string;
  isExternal?: boolean | null;
  href?: string | null;
}

export interface HeroBlock {
  __component: "health-insurance.hero";
  id: number;
  title: string;
  description: string;
  imageText: string;
  cta: CTA[];
  image: ImageWrapper;
  partners: any[];
}

export interface CardWithIcon {
  id: number;
  title: string;
  description: string;
  icon: ImageWrapper;
}

export interface YeedhaHealthCoverageBlock {
  __component: "health-insurance.yeedha-health-coverage";
  id: number;
  title: string;
  description: string;
  cardWithIcon: CardWithIcon[];
}

export interface HowItWorksCard {
  id: number;
  title: string;
  description: string;
  icon: ImageWrapper;
}

export interface HowItWorksBlock {
  __component: "health-insurance.how-it-works";
  id: number;
  howItWorks: string;
  description: string;
  cardWithIcon: HowItWorksCard[];
}

export interface FAQQuestion {
  id: number;
  title?: string | null;
  description?: string | null;
}

export interface FAQCallToAction {
  id: number;
  title: string;
  description: string;
  image: ImageWrapper;
  cta: CTA;
}

export interface FAQBlock {
  __component: "shared.faq";
  id: number;
  title: string;
  description: string;
  questions: FAQQuestion[];
  CallToAction: FAQCallToAction;
}

export interface IconTitleListItem {
  id: number;
  item: string;
}

export interface IconTitleList {
  id: number;
  title: string;
  icon: ImageWrapper;
  itemsList: IconTitleListItem[];
}

export interface CarReadyBlock {
  __component: "health-insurance.car-ready";
  id: number;
  title: string;
  description: string;
  iconTitleList: IconTitleList[];
}

export type CNGConversionBlock =
  | HeroBlock
  | YeedhaHealthCoverageBlock
  | HowItWorksBlock
  | FAQBlock
  | CarReadyBlock;

export interface CNGConversionPage {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: CNGConversionBlock[];
}

export interface CNGConversionResponse {
  data: CNGConversionPage;
  meta: Record<string, unknown>;
}
