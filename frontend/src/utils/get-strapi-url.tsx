export function getStrapiURL() {
    return import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337';
  }