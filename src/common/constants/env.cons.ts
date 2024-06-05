import {
  CONS_ENDPOINT_FETCH_USER,
  CONS_ENDPOINT_FETCH_RECENT_ENTRIES,
  CONS_ENDPOINT_FETCH_ENTRY_HISTORIES,
  CONS_ENDPOINT_FETCH_ENTRIES_BY_TEXT,
  CONS_ENDPOINT_FETCH_ALL_TAGS,
  CONS_ENDPOINT_FETCH_REFLECTIONS,
  CONS_ENDPOINT_FETCH_ENTRIES_CSV,
  CONS_ENDPOINT_FETCH_ALL_REPORTS,
  CONS_ENDPOINT_FETCH_REPORT_DATA,
  CONS_ENDPOINT_FETCH_PREMIUM_PLANS,
  CONS_ENDPOINT_FETCH_SETTING,
} from "./endpoint.cons";

export const CONS_GOOGLE_CLIENT_ID =
  "284988480923-789v0mrgtqveuhgcp1t2s4er2a79nq8u.apps.googleusercontent.com";
export const CONS_GOOGLE_TAG_MANAGER_ID = "G-L7CXXJRV7M";

/**
 * Company Info
 */

export const CONS_COMPANY_NAME = "Papery";
export const CONS_COMPANY_EMAIL = "papery.contact@gmail.com";
export const CONS_COMPANY_EMAIL_NOREPLY = "noreply@papery.me";

/**
 * For Demo
 */
export const CONS_QUERY_PARAM_DEMO = "demo";
export const CONS_HEADER_ITEM_DEMO_USER = "x-demo-user";
export const CONS_DEMO_USER_ID = "demo-user-id";

export const DEMO_ALLOWED_URLS = [
  CONS_ENDPOINT_FETCH_USER,
  CONS_ENDPOINT_FETCH_RECENT_ENTRIES,
  CONS_ENDPOINT_FETCH_ENTRY_HISTORIES,
  CONS_ENDPOINT_FETCH_ENTRIES_BY_TEXT,
  CONS_ENDPOINT_FETCH_ALL_TAGS,
  CONS_ENDPOINT_FETCH_REFLECTIONS,
  CONS_ENDPOINT_FETCH_ENTRIES_CSV,
  CONS_ENDPOINT_FETCH_ALL_REPORTS,
  CONS_ENDPOINT_FETCH_REPORT_DATA,
  CONS_ENDPOINT_FETCH_PREMIUM_PLANS,
  CONS_ENDPOINT_FETCH_SETTING,
];

/**
 * Payment
 */

export const CONS_URL_CUSTOMER_PORTAL =
  "https://billing.stripe.com/p/login/fZebLib7sf0H4py3cc";
