export interface LinkProps {
    id: number;
    label: string;
    href: string;
    isExternal: boolean;
  }
  
export interface CTAProps {
  id: number;
  label: string;
  href: string;
  isExternal?: boolean;
  style?: "PRIMARY" | "SECONDARY" | string;
}

export interface MediaProps {
  id: number;
  alt?: string | null;
  url?: string;
  documentId?: string;
  alternativeText?: string | null;
  image?: {
    url: string;
  } | null;
}

export interface ImageWithAltProps {
  id: number;
  alt?: string | null;
  image?: MediaProps;
}

export interface DownloadLinkProps {
  id: number;
  alt?: string;
  isExternal?: boolean;
  href: string;
}

export interface AppImageProps {
  id: number;
  alt?: string | null;
  image?: MediaProps;
}

export interface AppProps {
  id: number;
  title: string;
  downloadLinks: DownloadLinkProps[];
  images: AppImageProps[];
}

export interface InfoProps {
  id: number;
  title: string;
  description: string;
  text1?: string;
  cta?: CTAProps
}

export interface RideAndEarnSubsectionProps {
  id: number;
  info: InfoProps[];
  image: MediaProps;
  cta: CTAProps;
}

export interface InfoPlusImageProps {
  id: number;
  text1: string;
  title: string;
  description: string;
  image: MediaProps;
  bgColor: string;
}

// =============== BLOCK COMPONENTS =================

export interface HeroBlock {
  __component: "homepage.hero";
  id: number;
  title: string;
  subTitle: string;
  description: string;
  cta: CTAProps;
  heroVideo: MediaProps | null;
}

export interface DoMoreActionProps {
  id: number;
  text: string;
  description: string;
  cta: CTAProps;
  backgroundImage: MediaProps;
}

export interface DoMoreBlock {
  __component: "homepage.do-more-section";
  id: number;
  text: string;
  description: string;
  actions: DoMoreActionProps[];
}

export interface AboutImageProps {
  id: number;
  alt: string | null;
  image: MediaProps;
}

export interface AboutBlock {
  __component: "homepage.about-section";
  id: number;
  text1: string;
  title: string;
  description: string;
  text2: string;
  cta: CTAProps[];
  images: AboutImageProps[];
}

export interface RideAndEarnBlock {
  __component: "homepage.ride-and-earn";
  id: number;
  title: string;
  description: string;
  rideAndEarnSubsection: RideAndEarnSubsectionProps[];
}

export interface ExtraSectionBlock {
  __component: "homepage.extra-section";
  id: number;
  infoPlusImage: InfoPlusImageProps[];
}

export interface DownloadSectionBlock {
  __component: "homepage.download-section";
  id: number;
  title: string;
  description: string;
  apps: AppProps[];
  backgroundImage: MediaProps | null;
}

export interface newsletterSubsection {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
}
export interface StartSubsection {
  id: number;
  getStarted: {
    id: number;
    text: string;
    description: string;
    cta: CTAProps;
    backgroundImage: MediaProps | null;
  };
}

export interface StartAndNewsletterBlock {
  __component: "homepage.start-and-newsletter";
  id: number;
  newsletterSubsection: newsletterSubsection;
  startSubsection: StartSubsection;
}

// Union of all block types
export type HomePageBlock =
  | HeroBlock
  | DoMoreBlock
  | AboutBlock
  | RideAndEarnBlock
  | ExtraSectionBlock
  | DownloadSectionBlock
  | StartAndNewsletterBlock;

// =============== MAIN PAGE STRUCTURE =================

export interface LandingPageData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: HomePageBlock[];
}

export interface LandingPageResponse {
  data: LandingPageData;
  meta: Record<string, any>;
}
