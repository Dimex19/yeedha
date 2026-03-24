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
export async function getAutoServicePageSettings() {
  const path = "/api/auto-service";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
export async function getCNGPageSettings() {
  const path = "/api/cng-conversion";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
export async function getHealthInsurancePageSettings() {
  const path = "/api/health-insurance";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
export async function getContactPageSettings() {
  const path = "/api/contact";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
export async function getMechanicDataSettings() {
  const path = "/api/mechanics?populate=*";
  const url = new URL(path, BASE_URL);
//   url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
export async function getPrivacyPolicy() {
  const url = new URL("/api/privacy-policy", BASE_URL);
  return fetchAPI(url.href, { method: "GET" });
}
export async function getTermsAndCondition() {
  const url = new URL("/api/terms-and-condition", BASE_URL);
  return fetchAPI(url.href, { method: "GET" });
}
export async function createNewsletterSubscriber({ email }: { email: string }) {
  const url = new URL("/api/subscribers", BASE_URL)
  return fetchAPI(url.href, { method: "POST", body: { email } });
}
export async function contactUS(
  userType: string,
  fullName: string,
  phoneNumber: string,
  message: string
) {
  const url = new URL("/api/contact-us-forms", BASE_URL);

  return fetchAPI(url.href, {
    method: "POST",
    body: {
      data: {
        userType,
        fullName,
        phoneNumber,
        message,
      },
    },
  });
}
export async function submitCNGConversionForm(
  fullName: string,
  phoneNumber: string,
  driverID: string,
  email: string,
  vehicleMake: string,
  location: string,
  model: string,
  modelYear: string,
  fuelType: string,
  yearsOfDriving: string,
  acceptedTerms: boolean
) {
  const url = new URL("/api/cng-conversion-forms", BASE_URL);

  return fetchAPI(url.href, {
    method: "POST",
    body: {
      data: {
        fullName,
        phoneNumber,
        driverID,
        email,
        vehicleMake,
        location,
        model,
        modelYear,
        fuelType,
        yearsOfDriving,
        acceptedTerms
      }
    }
  });
}
export async function submitHealthInsuranceForm(
  fullName: string,
  phoneNumber: string,
  driverId: string,
  email: string,
  driving2Months: string,
  registeredAssociation: string,
  healthInsurance: string,
  medicalConditions: string,
  acceptedTerms: boolean
) {
  const url = new URL("/api/health-insurance-forms", BASE_URL);
  return fetchAPI(url.href, {
    method: "POST",
    body: {
      data: {
        fullName,
        phoneNumber,
        driverId,
        email,
        driving2Months,
        registeredAssociation,
        healthInsurance,
        medicalConditions,
        acceptedTerms
      }
    }
  });
}
export async function joinDriverCommunity(driverType: string, phoneNumber: string) {
  const url = new URL("/api/driver-community", BASE_URL)
  return fetchAPI(url.href, { method: "POST", body: { driverType, phoneNumber } });
}
export async function joinBusinessCommunity(businessType: string, phoneNumber: string) {
  const url = new URL("/api/business-community", BASE_URL)
  return fetchAPI(url.href, { method: "POST", body: { businessType, phoneNumber } });
}
