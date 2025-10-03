import { cookies } from "next/headers";

const API_BASE_URL = process.env.API_URL;

interface FetchOptions extends RequestInit {
  route: string;
}

export async function fetchSecure({ route, ...options }: FetchOptions) {
  const cookieStore = await cookies();
  const token = cookieStore.get('jwt')?.value;

  const url = `${API_BASE_URL}${route}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Cookie': `jwt=${token}`
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      ...options.headers
    },
    ...options,
    credentials: 'include',
    cache: 'no-store'
  })
  
};