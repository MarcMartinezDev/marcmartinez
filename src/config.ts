export const SITE_URL =
  import.meta.env.PUBLIC_SITE_URL || "http://localhost:3000";
export const DEFAULT_LOCALE =
  import.meta.env.PUBLIC_I18N_DEFAULT_LOCALE || "es";
export const SUPPORTED_LOCALES = import.meta.env
  .PUBLIC_I18N_SUPPORTED_LOCALES || ["en", "es"];
export const STRAPI_API_URL = import.meta.env.STRAPI_API_URL;
export const STRAPI_API_TOKEN = import.meta.env.STRAPI_API_TOKEN;
