import type { Schema, Struct } from '@strapi/strapi';

export interface AboutCard extends Struct.ComponentSchema {
  collectionName: 'components_about_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutCardWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_about_card_with_icons';
  info: {
    displayName: 'cardWithIcon';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface AboutDiscover extends Struct.ComponentSchema {
  collectionName: 'components_about_discovers';
  info: {
    displayName: 'discover';
  };
  attributes: {
    cardWithIcon: Schema.Attribute.Component<'about.card-with-icon', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutEmpower extends Struct.ComponentSchema {
  collectionName: 'components_about_empowers';
  info: {
    displayName: 'Empower';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface AboutMissionXVision extends Struct.ComponentSchema {
  collectionName: 'components_about_mission_x_visions';
  info: {
    displayName: 'missionXVision';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Component<'shared.image', true>;
    title: Schema.Attribute.String;
  };
}

export interface AutoServiceHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_auto_service_how_it_works';
  info: {
    displayName: 'howItWorks';
  };
  attributes: {
    cards: Schema.Attribute.Component<'auto-service.icon-title-sub-desc', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AutoServiceIconTitleSubDesc extends Struct.ComponentSchema {
  collectionName: 'components_auto_service_icon_title_sub_descs';
  info: {
    displayName: 'iconTitleSubDesc';
  };
  attributes: {
    icon: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
    titleDesc: Schema.Attribute.Component<'business.title-desc', true>;
  };
}

export interface BusinessBenefit extends Struct.ComponentSchema {
  collectionName: 'components_business_benefits';
  info: {
    displayName: 'benefit';
  };
  attributes: {
    description: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    optionPlusImage: Schema.Attribute.Component<
      'business.option-plus-image',
      true
    >;
    title: Schema.Attribute.Text;
    title2: Schema.Attribute.String;
  };
}

export interface BusinessForm extends Struct.ComponentSchema {
  collectionName: 'components_business_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    options: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface BusinessHero extends Struct.ComponentSchema {
  collectionName: 'components_business_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    form: Schema.Attribute.Component<'business.form', false>;
    heading: Schema.Attribute.Text;
  };
}

export interface BusinessHowYeedhaWorks extends Struct.ComponentSchema {
  collectionName: 'components_business_how_yeedha_works';
  info: {
    displayName: 'howYeedhaWorks';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', true>;
    optionData: Schema.Attribute.Component<'driver.option-data', true>;
    title: Schema.Attribute.String;
    titleDesc: Schema.Attribute.Component<'business.title-desc', true>;
  };
}

export interface BusinessImageTitleDesc extends Struct.ComponentSchema {
  collectionName: 'components_business_image_title_descs';
  info: {
    displayName: 'imageTitleDesc';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface BusinessOptionPlusImage extends Struct.ComponentSchema {
  collectionName: 'components_business_option_plus_images';
  info: {
    displayName: 'optionPlusImage';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.image', false>;
    imageTitleDesc: Schema.Attribute.Component<
      'business.image-title-desc',
      true
    >;
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface BusinessTitleDesc extends Struct.ComponentSchema {
  collectionName: 'components_business_title_descs';
  info: {
    displayName: 'titleDesc';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BusinessYeedhaAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_business_yeedha_advantages';
  info: {
    displayName: 'yeedhaAdvantage';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.image', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    Fullname: Schema.Attribute.String;
    header: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    message: Schema.Attribute.String;
    options: Schema.Attribute.Component<'shared.link', true>;
    phoneNumber: Schema.Attribute.String;
  };
}

export interface ContactTalkToUs extends Struct.ComponentSchema {
  collectionName: 'components_contact_talk_to_us';
  info: {
    displayName: 'talkToUs';
  };
  attributes: {
    assistanceHours: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    emailAddress1: Schema.Attribute.String;
    emailAddress2: Schema.Attribute.String;
    phoneNumber1: Schema.Attribute.String;
    phoneNumber2: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DriverFaqs extends Struct.ComponentSchema {
  collectionName: 'components_driver_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'driver.question-answer', true>;
  };
}

export interface DriverOptionData extends Struct.ComponentSchema {
  collectionName: 'components_driver_option_data';
  info: {
    displayName: 'optionData';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', false>;
    label: Schema.Attribute.String;
    overlayImage: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
    titleDesc: Schema.Attribute.Component<'business.title-desc', true>;
  };
}

export interface DriverQuestionAnswer extends Struct.ComponentSchema {
  collectionName: 'components_driver_question_answers';
  info: {
    displayName: 'questionAnswer';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface FaqFaqOptionData extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_option_data_s';
  info: {
    displayName: 'faqOptionData ';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'driver.question-answer', true>;
    label: Schema.Attribute.String;
  };
}

export interface FaqOptions extends Struct.ComponentSchema {
  collectionName: 'components_faq_options';
  info: {
    displayName: 'options';
  };
  attributes: {
    option: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'business.title-desc', true>;
  };
}

export interface FaqOptions2 extends Struct.ComponentSchema {
  collectionName: 'components_faq_options2s';
  info: {
    displayName: 'options2';
  };
  attributes: {
    options: Schema.Attribute.Component<'faq.options', true>;
  };
}

export interface HealthInsuranceCarReady extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_car_readies';
  info: {
    displayName: 'carReady';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconTitleList: Schema.Attribute.Component<
      'health-insurance.icon-title-list',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface HealthInsuranceEligibility extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_eligibilities';
  info: {
    displayName: 'eligibility';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HealthInsuranceHero extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.image', false>;
    imageText: Schema.Attribute.Text;
    partners: Schema.Attribute.Component<'shared.image', true>;
    title: Schema.Attribute.String;
  };
}

export interface HealthInsuranceHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_how_it_works';
  info: {
    displayName: 'howItWorks';
  };
  attributes: {
    cardWithIcon: Schema.Attribute.Component<'about.card-with-icon', true>;
    description: Schema.Attribute.String;
    howItWorks: Schema.Attribute.String;
  };
}

export interface HealthInsuranceIconTitleList extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_icon_title_lists';
  info: {
    displayName: 'iconTitleList';
  };
  attributes: {
    icon: Schema.Attribute.Component<'shared.image', false>;
    itemsList: Schema.Attribute.Component<'shared.list', true>;
    title: Schema.Attribute.String;
  };
}

export interface HealthInsuranceYeedhaHealthCoverage
  extends Struct.ComponentSchema {
  collectionName: 'components_health_insurance_yeedha_health_coverages';
  info: {
    displayName: 'yeedhaHealthCoverage';
  };
  attributes: {
    cardWithIcon: Schema.Attribute.Component<'about.card-with-icon', true>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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
    displayName: 'apps';
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
    displayName: 'hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    heroVideo: Schema.Attribute.Component<'shared.video', false>;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
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
    newsletterSubsection: Schema.Attribute.Component<
      'homepage.newsletter-subsection',
      false
    >;
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
    text: Schema.Attribute.String;
  };
}

export interface SharedCardsWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards_with_icons';
  info: {
    displayName: 'CardsWithIcon';
  };
  attributes: {
    cardWithIcon: Schema.Attribute.Component<'about.card-with-icon', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    CallToAction: Schema.Attribute.Component<
      'business.image-title-desc',
      false
    >;
    description: Schema.Attribute.Text;
    faqOptionData: Schema.Attribute.Component<'faq.faq-option-data', true>;
    questions: Schema.Attribute.Component<'business.title-desc', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    alt: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_infos';
  info: {
    displayName: 'info';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
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
    bgColor: Schema.Attribute.String;
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
    href: Schema.Attribute.Text;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    item: Schema.Attribute.String;
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
    displayName: 'Cards';
    icon: 'indent';
  };
  attributes: {
    card: Schema.Attribute.Component<'about.card', true>;
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
      'about.card': AboutCard;
      'about.card-with-icon': AboutCardWithIcon;
      'about.discover': AboutDiscover;
      'about.empower': AboutEmpower;
      'about.mission-x-vision': AboutMissionXVision;
      'auto-service.how-it-works': AutoServiceHowItWorks;
      'auto-service.icon-title-sub-desc': AutoServiceIconTitleSubDesc;
      'business.benefit': BusinessBenefit;
      'business.form': BusinessForm;
      'business.hero': BusinessHero;
      'business.how-yeedha-works': BusinessHowYeedhaWorks;
      'business.image-title-desc': BusinessImageTitleDesc;
      'business.option-plus-image': BusinessOptionPlusImage;
      'business.title-desc': BusinessTitleDesc;
      'business.yeedha-advantage': BusinessYeedhaAdvantage;
      'contact.form': ContactForm;
      'contact.talk-to-us': ContactTalkToUs;
      'driver.faqs': DriverFaqs;
      'driver.option-data': DriverOptionData;
      'driver.question-answer': DriverQuestionAnswer;
      'faq.faq-option-data': FaqFaqOptionData;
      'faq.options': FaqOptions;
      'faq.options2': FaqOptions2;
      'health-insurance.car-ready': HealthInsuranceCarReady;
      'health-insurance.eligibility': HealthInsuranceEligibility;
      'health-insurance.hero': HealthInsuranceHero;
      'health-insurance.how-it-works': HealthInsuranceHowItWorks;
      'health-insurance.icon-title-list': HealthInsuranceIconTitleList;
      'health-insurance.yeedha-health-coverage': HealthInsuranceYeedhaHealthCoverage;
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
      'shared.cards-with-icon': SharedCardsWithIcon;
      'shared.faq': SharedFaq;
      'shared.image': SharedImage;
      'shared.info': SharedInfo;
      'shared.info-plus-image': SharedInfoPlusImage;
      'shared.link': SharedLink;
      'shared.list': SharedList;
      'shared.logo-link': SharedLogoLink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video': SharedVideo;
    }
  }
}
