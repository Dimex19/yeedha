export interface FAQQuestion {
  id: number;
  title: string;
  description: string;
}

// Represents each option (like “All”, “About Yeedha”, “Rider App”, etc.)
export interface FAQOption {
  id: number;
  option: string;
  questions: FAQQuestion[];
}

// Represents the entire FAQ block
export interface FAQOptionsBlock {
  __component: "faq.options2";
  id: number;
  options: FAQOption[];
}

// Represents the CTA button or link
export interface CTA {
  id: number;
  label: string;
  style: string | null;
  isExternal: boolean | null;
  href: string | null;
}

// Represents the "Get Started" subsection in Start & Newsletter
export interface GetStarted {
  id: number;
  text: string;
  description: string;
  cta: CTA | null;
  backgroundImage: any | null;
}

// Represents the newsletter subsection
export interface NewsletterSubsection {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
}

// Represents the full Start & Newsletter block
export interface StartAndNewsletterBlock {
  __component: "homepage.start-and-newsletter";
  id: number;
  newsletterSubsection: NewsletterSubsection;
  startSubsection: {
    id: number;
    getStarted: GetStarted;
  };
}

// Represents the full FAQ Page structure
export interface FAQPage {
  id: number;
  documentId: string;
  subtitle: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: (FAQOptionsBlock | StartAndNewsletterBlock)[];
}
