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

export interface Option {
  id: number;
  label: string;
  style: string;
  isExternal?: boolean | null;
  href?: string | null;
}

/**
 * CONTACT FORM BLOCK
 */
export interface ContactFormBlock {
  __component: "contact.form";
  id: number;
  header: string;
  Fullname: string;
  phoneNumber: string;
  message: string;
  options: Option[];
  cta: CTA;
  image: ImageWrapper;
}

/**
 * TALK TO US BLOCK
 */
export interface TalkToUsBlock {
  __component: "contact.talk-to-us";
  id: number;
  subTitle: string;
  title: string;
  description: string;
  emailAddress1: string;
  emailAddress2: string;
  phoneNumber1: string;
  phoneNumber2: string;
  assistanceHours: string;
}

/**
 * NEWSLETTER + GET STARTED BLOCK
 */
export interface NewsletterSubsection {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
}

export interface GetStartedCTA {
  id: number;
  label: string;
  style: string;
  isExternal?: boolean | null;
  href?: string | null;
}

export interface GetStarted {
  id: number;
  text: string;
  description: string;
  cta: GetStartedCTA;
  backgroundImage?: ImageWrapper | null;
}

export interface StartSubsection {
  id: number;
  getStarted: GetStarted;
}

export interface StartAndNewsletterBlock {
  __component: "homepage.start-and-newsletter";
  id: number;
  newsletterSubsection: NewsletterSubsection;
  startSubsection: StartSubsection;
}

/**
 * PAGE STRUCTURE
 */
export type ContactPageBlock =
  | ContactFormBlock
  | TalkToUsBlock
  | StartAndNewsletterBlock;

export interface ContactPage {
  id: number;
  documentId: string;
  subTitle: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: ContactPageBlock[];
}

export interface ContactPageResponse {
  data: ContactPage;
  meta: Record<string, unknown>;
}
