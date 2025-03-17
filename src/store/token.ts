import { tokenKey } from "../constants";

export function setToken(user: string) {
  localStorage.setItem(tokenKey, user);
}

export function getToken() {
  const token = localStorage.getItem(tokenKey);
  return token;
}

export function removeToken() {
  localStorage.removeItem(tokenKey);
}

export function headerToken() {}
