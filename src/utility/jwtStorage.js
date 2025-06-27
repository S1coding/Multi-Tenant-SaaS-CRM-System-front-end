// const COOKIE_CONFIG = {
//     NAME: 'userToken',       // Cookie name
//     PATH: '/',               // Accessible across entire site
//     MAX_AGE: 7 * 24 * 60 * 60, // 7 days in seconds
//     SECURE: process.env.NODE_ENV === 'production' // HTTPS-only in production
//   };
  
//   if (!process.env.REACT_APP_SERVER_URL) {
//     console.warn('Running in development mode - cookies will use HTTP');
//   }
  
//   // Helper to build cookie string
//   function buildCookieString(value, customConfig = {}) {
//     const config = { ...COOKIE_CONFIG, ...customConfig };
//     return [
//       `${config.NAME}=${encodeURIComponent(value)}`,
//       `path=${config.PATH}`,
//       `max-age=${config.MAX_AGE}`,
//       config.SECURE ? 'secure' : ''
//     ].filter(Boolean).join('; ');
//   }
  
//   /**
//    * Saves JWT token to cookies
//    * @param {string} token - JWT token to store
//    */
//   export function saveToken(token) {
//     if (!token) throw new Error('No token provided');
//     document.cookie = buildCookieString(token);
//   }
  
//   /**
//    * Retrieves JWT token from cookies
//    * @returns {string|null} Token if found, null otherwise
//    */
//   export function getToken() {
//     const cookie = document.cookie
//       .split('; ')
//       .find(row => row.startsWith(`${COOKIE_CONFIG.NAME}=`));
//     return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
//   }
  
//   /**
//    * Removes JWT token cookie
//    */
//   export function removeToken() {
//     document.cookie = `${COOKIE_CONFIG.NAME}=; path=${COOKIE_CONFIG.PATH}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
//   }
  
//   export const authConfig = COOKIE_CONFIG; // Optional export for debugging