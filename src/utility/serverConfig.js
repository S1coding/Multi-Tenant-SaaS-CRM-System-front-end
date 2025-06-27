const COOKIE_CONFIG = {
  PATH: {
    ROOT: '/',
  },
  MAX_AGE:{
    WEEK:  7 * 24 * 60 * 60,
    DAY:  24 * 60 * 60,
    HOUR: 60 * 60
  },
  SECURE: false, // Set to true in production for HTTPS
  NAME: {
    JWT: 'JWT',
    COMPANY: 'COMPANY',
  }
};

const SERVER_LINK = {
  // Base URL for all API endpoints, fallback to localhost if not specified
  BASE_URL: process.env.REACT_APP_SERVER_URL || 'http://localhost:8080',
  
  ENDPOINTS: {
    // Admin Authentication endpoints
    ADMIN_REGISTER: '/admin/register',

    // Tenant Authentication endpoints
    TENANT_REGISTER: '/tenant/register',
    TENANT_JWT: '/tenant/generateJwtToken',
    TENANT_UPDATE: '/tenant/updateTenantDetails',
    
    // Contact Management endpoints
    CONTACTS_TENANT: '/contact/getContactsForTenant',
    CONTACT_UPDATE: '/contact/updateContactForTenant',
    CONTACT_ADD: '/contact/addContactForTenant',
    CONTACT_DELETE: '/contact/deleteContactForTenant',

    // Report Management endpoints
    REPORTS_TENANT: "/report/getMyReports",
    REPORT_ADD: '/report/makeReport',
    REPORT_PDF: '/report/getReportPdf',
    REPORT_ROW: '/report/getReportByProjectName',

    // Deal Management endpoints
    DEALS_TENANT: '/deal/getMyDeals',
    DEAL_ADD: '/deal/createDeal',
    DEAL_UPDATE: '/deal/updateDeal',

    // Task Management endpoints
    TASKS_TENANT: '/task/getPendingTasksByDueDate',
    TASK_ADD: '/task/createNewTask',
    TASK_UPDATE: '/task/editTask'
  }
};

// Warn if server URL is not configured
if (!process.env.SERVER_URL) {
  console.warn('SERVER_URL not found in .env - falling back to localhost');
}

// Generates full URL for given endpoint key
export function serverLink(endpointKey) {
  if (!SERVER_LINK.ENDPOINTS[endpointKey]) {
    throw new Error(`Invalid endpoint key: ${endpointKey}`);
  }
  return `${SERVER_LINK.BASE_URL}${SERVER_LINK.ENDPOINTS[endpointKey]}`;
}

export function buildCookieString(type, value, age, path) {
  if(!COOKIE_CONFIG.NAME[type]) {
    throw new Error(`Invalid cookie type: ${type}`);
  }
  if (!COOKIE_CONFIG.PATH[path]) {
    throw new Error(`Invalid cookie path: ${path}`);   
  }    
  if (!COOKIE_CONFIG.MAX_AGE[age]) {
    throw new Error(`Invalid cookie age: ${age}`);  
  }
  return [
      `${COOKIE_CONFIG.NAME[type]}=${encodeURIComponent(value)}`,
      `path=${COOKIE_CONFIG.PATH[path]}`,
      `max-age=${COOKIE_CONFIG.MAX_AGE[age]}`,
      COOKIE_CONFIG.SECURE ? 'secure' : ''
    ].filter(Boolean).join('; ');
  }

export function clearCookie(type) {
  if(!COOKIE_CONFIG.NAME[type]) {
    throw new Error(`Invalid cookie type: ${type}`);
  }
  document.cookie = `${COOKIE_CONFIG.NAME[type]}=; path=${COOKIE_CONFIG.PATH.ROOT}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export const apiConfig = SERVER_LINK;