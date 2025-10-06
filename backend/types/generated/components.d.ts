import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_about_sections';
  info: {
    displayName: 'aboutSection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Component<'shared.image', false>;
    cta: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.String;
    images: Schema.Attribute.Component<'shared.image', true>;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageApps extends Struct.ComponentSchema {
  collectionName: 'components_homepage_apps';
  info: {
    displayName: 'Apps';
  };
  attributes: {
    downloadLinks: Schema.Attribute.Component<'shared.logo-link', true>;
    images: Schema.Attribute.Component<'shared.image', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageDoMoreSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_do_more_sections';
  info: {
    displayName: 'doMoreSection';
  };
  attributes: {
    actions: Schema.Attribute.Component<'shared.actions', true>;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Component<'shared.image', true>;
    text: Schema.Attribute.String;
  };
}

export interface HomepageDownloadSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_download_sections';
  info: {
    displayName: 'downloadSection';
  };
  attributes: {
    apps: Schema.Attribute.Component<'homepage.apps', true>;
    backgroundImage: Schema.Attribute.Component<'shared.image', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageExtraSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_extra_sections';
  info: {
    displayName: 'extraSection';
  };
  attributes: {
    infoPlusImage: Schema.Attribute.Component<'shared.info-plus-image', true>;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    heroVideo: Schema.Attribute.Component<'shared.video', false>;
    text: Schema.Attribute.Text;
  };
}

export interface HomepageNewsletterSubsection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_newsletter_subsections';
  info: {
    displayName: 'newsletterSubsection';
  };
  attributes: {
    description: Schema.Attribute.String;
    shortDescription: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageRideAndEarn extends Struct.ComponentSchema {
  collectionName: 'components_homepage_ride_and_earns';
  info: {
    displayName: 'rideAndEarn';
  };
  attributes: {
    description: Schema.Attribute.String;
    rideAndEarnSubsection: Schema.Attribute.Component<
      'homepage.ride-and-earn-subsection',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomepageRideAndEarnSubsection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_ride_and_earn_subsections';
  info: {
    displayName: 'rideAndEarnSubsection';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    image: Schema.Attribute.Component<'shared.image', false>;
    info: Schema.Attribute.Component<'shared.info', true>;
  };
}

export interface HomepageStartAndNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_homepage_start_and_newsletters';
  info: {
    displayName: 'startAndNewsletter';
  };
  attributes: {
    startSubsection: Schema.Attribute.Component<
      'homepage.start-subsection',
      false
    >;
  };
}

export interface HomepageStartSubsection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_start_subsections';
  info: {
    displayName: 'startSubsection';
  };
  attributes: {
    getStarted: Schema.Attribute.Component<'shared.actions', false>;
    newsletterSubsection: Schema.Attribute.Component<
      'homepage.newsletter-subsection',
      false
    >;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contactEmail: Schema.Attribute.String;
    downloadStore: Schema.Attribute.Component<'shared.logo-link', true>;
    emergency: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    newsLinks: Schema.Attribute.Component<'shared.link', true>;
    productsLinks: Schema.Attribute.Component<'shared.link', true>;
    quickLinks: Schema.Attribute.Component<'shared.link', true>;
    socialIcons: Schema.Attribute.Component<'shared.logo-link', true>;
    yeedhaDescription: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    links: Schema.Attribute.Component<'shared.link', true>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
  };
}

export interface SharedActions extends Struct.ComponentSchema {
  collectionName: 'components_shared_actions';
  info: {
    displayName: 'Actions';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Component<'shared.image', false>;
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Component<'shared.image', true>;
    text: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_infos';
  info: {
    displayName: 'info';
  };
  attributes: {
    description: Schema.Attribute.Text;
    text1: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedInfoPlusImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_plus_images';
  info: {
    displayName: 'infoPlusImage';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    text1: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'file-video';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    alt: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.about-section': HomepageAboutSection;
      'homepage.apps': HomepageApps;
      'homepage.do-more-section': HomepageDoMoreSection;
      'homepage.download-section': HomepageDownloadSection;
      'homepage.extra-section': HomepageExtraSection;
      'homepage.hero': HomepageHero;
      'homepage.newsletter-subsection': HomepageNewsletterSubsection;
      'homepage.ride-and-earn': HomepageRideAndEarn;
      'homepage.ride-and-earn-subsection': HomepageRideAndEarnSubsection;
      'homepage.start-and-newsletter': HomepageStartAndNewsletter;
      'homepage.start-subsection': HomepageStartSubsection;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'shared.actions': SharedActions;
      'shared.image': SharedImage;
      'shared.info': SharedInfo;
      'shared.info-plus-image': SharedInfoPlusImage;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video': SharedVideo;
    }
  }
}
