import { jwtDecode } from "jwt-decode";

export function verifyJwtExpired(token: string) {
  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  if(!decoded.exp) return;

  return decoded.exp < currentTime;
}