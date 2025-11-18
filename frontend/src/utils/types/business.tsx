// ================= SHARED TYPES ==================

export interface MediaProps {
  id: number;
  alt?: string | null;
  image?: {
    id: number;
    documentId: string;
    alternativeText?: string | null;
    url: string;
  } | null;
}

export interface OptionProps {
  id: number;
  label: string;
  style?: "PRIMARY" | "SECONDARY" | string;
  isExternal?: boolean | null;
  href?: string | null;
}

export interface CTAProps {
  id: number;
  label: string;
  style?: "PRIMARY" | "SECONDARY" | string;
  isExternal?: boolean | null;
  href?: string | null;
}

export interface FormProps {
  id: number;
  heading: string;
  description: string;
  options: OptionProps[];
  cta: CTAProps;
}

// ================= HERO BLOCK ==================

export interface BusinessHeroBlock {
  __component: "business.hero";
  id: number;
  heading: string;
  description: string;
  cta: CTAProps;
  form: FormProps;
}

// ================= BENEFIT BLOCK ==================

export interface ImageTitleDesc {
  id: number;
  title: string;
  description: string;
  image: MediaProps;
  cta?: CTAProps | null;
}

export interface OptionPlusImage {
  id: number;
  label: string;
  style?: "PRIMARY" | "SECONDARY" | string;
  image: MediaProps;
  imageTitleDesc: ImageTitleDesc[]
}


export interface BusinessBenefitBlock {
  __component: "business.benefit";
  id: number;
  title: string;
  description: string;
  title2: string;
  description2: string;
  optionPlusImage: OptionPlusImage[];
  // imageTitleDesc: ImageTitleDesc[];
}

// ================= HOW YEEDHA WORKS ==================

export interface TitleDescProps {
  id: number;
  title: string;
  description: string;
}

export interface BusinessHowYeedhaWorksBlock {
  __component: "business.how-yeedha-works";
  id: number;
  title: string;
  description: string;
  image: MediaProps[];
  cta: CTAProps;
  titleDesc: TitleDescProps[];
}

// ================= YEEDHA ADVANTAGE ==================

export interface BusinessYeedhaAdvantageBlock {
  __component: "business.yeedha-advantage";
  id: number;
  title: string;
  image: MediaProps[];
}

// ================= FAQ BLOCK (SHARED) ==================

export interface QuestionProps {
  id: number;
  title: string;
  description: string;
}

export interface CallToActionProps {
  id: number;
  title: string;
  description: string;
  image: MediaProps;
  cta: CTAProps;
}

export interface SharedFAQBlock {
  __component: "shared.faq";
  id: number;
  title: string;
  description: string;
  questions: QuestionProps[];
  CallToAction: CallToActionProps;
}

// ================== UNION OF ALL BLOCKS ==================

export type BusinessPageBlock =
  | BusinessHeroBlock
  | BusinessBenefitBlock
  | BusinessHowYeedhaWorksBlock
  | BusinessYeedhaAdvantageBlock
  | SharedFAQBlock;

// ================== MAIN BUSINESS PAGE STRUCTURE ==================

export interface BusinessPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: BusinessPageBlock[];
}

export interface BusinessPageResponse {
  data: BusinessPageData;
  meta: Record<string, any>;
}
