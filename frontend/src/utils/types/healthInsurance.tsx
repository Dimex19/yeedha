// src/types/healthInsurancePage.types.tsx

export interface StrapiImage {
  id: number;
  documentId: string;
  alternativeText?: string | null;
  url: string;
}

export interface ImageWrapper {
  id: number;
  alt?: string | null;
  image: StrapiImage | null;
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
  partners: ImageWrapper[];
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

export interface EligibilityBlock {
  __component: "health-insurance.eligibility";
  id: number;
  title: string;
  description: string;
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

export type HealthInsuranceBlock =
  | HeroBlock
  | YeedhaHealthCoverageBlock
  | HowItWorksBlock
  | EligibilityBlock
  | FAQBlock;

export interface HealthInsurancePage {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: HealthInsuranceBlock[];
}

export interface HealthInsuranceResponse {
  data: HealthInsurancePage;
  meta: Record<string, unknown>;
}
