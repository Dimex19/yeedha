export interface StrapiImage {
  id: number;
  alt: string | null;
  image?: {
    id: number;
    documentId: string;
    alternativeText: string | null;
    url: string;
  };
}

export interface CTA {
  id: number;
  label: string;
  style: string | null;
  isExternal: boolean | null;
  href: string | null;
}

export interface HealthInsuranceHeroBlock {
  __component: "health-insurance.hero";
  id: number;
  title: string;
  description: string;
  imageText: string;
  cta: CTA[];
  image: StrapiImage | null;
  partners: any[];
}

export interface CardWithIcon {
  id: number;
  title: string;
  description: string;
  icon: StrapiImage | null;
}

export interface YeedhaHealthCoverageBlock {
  __component: "health-insurance.yeedha-health-coverage";
  id: number;
  title: string;
  description: string;
  cardWithIcon: CardWithIcon[];
}

export interface TitleDesc {
  id: number;
  title: string | null;
  description: string | null;
}

export interface HowItWorksCard {
  id: number;
  title: string;
  icon: StrapiImage | null;
  titleDesc: TitleDesc[];
}

export interface HowItWorksBlock {
  __component: "auto-service.how-it-works";
  id: number;
  title: string;
  description: string;
  cards: HowItWorksCard[];
}

export interface AutoServicePage {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: (HealthInsuranceHeroBlock | YeedhaHealthCoverageBlock | HowItWorksBlock)[];
}
