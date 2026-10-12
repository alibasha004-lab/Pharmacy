export type Language = 'en' | 'ar';

export interface TranslationContent {
  header: {
    brandName: string;
    brandTagline: string;
    navHome: string;
    navFeatures: string;
    navHowToOrder: string;
    navCategories: string;
    navLocation: string;
    navContact: string;
    langToggle: string;
    orderWhatsApp: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    orderCta: string;
    callCta: string;
    prescriptionHelp: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
    deliveryNotice: string;
  };
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    card1Title: string;
    card1Desc: string;
    card1Badge: string;
    card2Title: string;
    card2Desc: string;
    card2Badge: string;
    card3Title: string;
    card3Desc: string;
    card3Badge: string;
  };
  howToOrder: {
    sectionTitle: string;
    sectionSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    orderNowBtn: string;
    openHelperBtn: string;
    secureNotice: string;
  };
  categories: {
    sectionTitle: string;
    sectionSubtitle: string;
    inquireBtn: string;
    items: Array<{
      id: string;
      title: string;
      desc: string;
      tag: string;
      icon: string;
    }>;
  };
  locationHours: {
    sectionTitle: string;
    sectionSubtitle: string;
    addressHeading: string;
    addressText: string;
    addressSubtext: string;
    hoursHeading: string;
    hoursWeekday: string;
    hoursFriday: string;
    hoursWeekdayLabel: string;
    hoursFridayLabel: string;
    openNowBadge: string;
    closedBadge: string;
    getDirections: string;
    callPharmacy: string;
    phoneText: string;
    emergencyHeading: string;
    emergencyText: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    customerCare: string;
    hoursTitle: string;
    rights: string;
    privacy: string;
    terms: string;
    license: string;
  };
  orderModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    uploadLabel: string;
    uploadHint: string;
    sendBtn: string;
    cancelBtn: string;
  };
}
