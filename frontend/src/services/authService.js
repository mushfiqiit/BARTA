import jwtDecode from "jwt-decode";
import axios from "axios";
const apiEndpoint = "http://127.0.0.1:8000/login/jwt/create";
const tokenKey = "token";

axios.defaults.headers.common["x-auth-token"] = getJwt();

export async function login(data) {
  const { data: jwt } = await axios.post(apiEndpoint, data);
  console.log(jwt.access);
  localStorage.setItem(tokenKey, jwt.access);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};