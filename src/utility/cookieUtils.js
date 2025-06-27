import { buildCookieString, clearCookie } from "./serverConfig";

export function saveCompanyCookie(company) {
  //default is 1 hour
  document.cookie = buildCookieString("COMPANY", company, "HOUR", "ROOT");
}

export function saveJwtTokenCookie(token) {
  //default is 1 hour
  document.cookie = buildCookieString("JWT", token, "HOUR", "ROOT");
}

export function getCompanyCookie() {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("COMPANY="));
  return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
}

export function getJwtTokenCookie() {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("JWT="));
  return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
}

export function clearJwtCookie() {
  clearCookie("JWT");
}

export function clearCompanyCookie() {
  clearCookie("COMPANY");
}
