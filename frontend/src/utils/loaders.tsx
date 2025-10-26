import { getStrapiURL } from "./get-strapi-url";
import { fetchAPI } from "./fetch-api";
// const BLOG_PAGE_SIZE = 3;
const BASE_URL = getStrapiURL();

export async function getGlobalSettings() {
  const path = "/api/global";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
export async function getLandingPageSettings() {
  const path = "/api/landing-page";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
export async function getDriversPageSettings() {
  const path = "/api/driver";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
export async function getBusinessPageSettings() {
  const path = "/api/business-page";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
export async function getAboutPageSettings() {
  const path = "/api/about";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
export async function getFaqPageSettings() {
  const path = "/api/faq";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}