export const publicConfig = {
  siteTitle: import.meta.env.VITE_SITE_TITLE || 'Project Landing Page',
  companyName: import.meta.env.VITE_COMPANY_NAME || '<COMPANY_NAME>',
  companyTagline: import.meta.env.VITE_COMPANY_TAGLINE || 'Modern services for modern teams.',
  companyDescription:
    import.meta.env.VITE_COMPANY_DESCRIPTION ||
    'A reusable landing page template showcasing services, features, and a contact form.',

  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'example@email.com',
  contactPhonePrimary: import.meta.env.VITE_CONTACT_PHONE_PRIMARY || '<PHONE_NUMBER_1>',
  contactPhoneSecondary: import.meta.env.VITE_CONTACT_PHONE_SECONDARY || '<PHONE_NUMBER_2>',

  contactTelHref: import.meta.env.VITE_CONTACT_TEL_HREF || 'tel:+10000000000',
  contactAddressLabel: import.meta.env.VITE_CONTACT_ADDRESS_LABEL || '<CITY>, <COUNTRY>',
  mapEmbedSrc: import.meta.env.VITE_MAP_EMBED_SRC || 'https://example.com',

  web3FormsEndpoint:
    import.meta.env.VITE_WEB3FORMS_ENDPOINT || 'https://api.web3forms.com/submit',
  web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '<YOUR_WEB3FORMS_ACCESS_KEY>',

  socialLinks: {
    galleryPrimary: import.meta.env.VITE_GALLERY_PRIMARY_URL || 'https://example.com',
    gallerySecondary: import.meta.env.VITE_GALLERY_SECONDARY_URL || 'https://example.com',
    telegram: import.meta.env.VITE_TELEGRAM_URL || 'https://example.com',
    facebook: import.meta.env.VITE_FACEBOOK_URL || 'https://example.com',
    linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://example.com',
    tiktok: import.meta.env.VITE_TIKTOK_URL || 'https://example.com',
  },

  attribution: {
    label: import.meta.env.VITE_ATTRIBUTION_LABEL || 'Open-source contributor',
    url: import.meta.env.VITE_ATTRIBUTION_URL || 'https://example.com',
  },
}
