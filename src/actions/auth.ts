"use server";
import { SignInSchema } from "@/schemas/sign_in_schema";
import { SignUpSchema } from "@/schemas/sign_up.schema";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API_BASE_URL = process.env.API_URL;

type APIResponse = {
  message: string;
  error: string;
  statusCode: number;
}

export async function signUpUser(formData: SignUpSchema) { 
  try {
    const {confirmPassword, ...userData } = formData;
    
    const res = await fetch(`${API_BASE_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });

    const data: APIResponse = await res.json();

    if(!res.ok) {
      return {
        success: false,
        error: data?.message || "Ocorreu um erro ao tentar registrar usuário.",
      }
    }

    return {
      success: true,
      message: data.message,
    };
    
  } catch (error) {
    console.error('Ocorreu um erro ao registrar usuário: ', error);
    return { 
      success: false,
      error: "Ocorreu um erro. Tente novamente." 
    };
  }
}

export async function signInUser(formData: SignInSchema) {
  const cookieStore = await cookies();

  try {
    const res = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data: APIResponse = await res.json();
    const setCookieHeader = res.headers.get('Set-Cookie');

    if(!res.ok) {
      return {
        success: false,
        error: data?.message || "Ocorreu um erro ao entrar."
      };
    }

    if(setCookieHeader) {
      const accessToken = setCookieHeader.split(";")[0].split("=")[1];

      const cookieOptions = {
        name: 'jwt',
        value: accessToken,
        secure: true,
        httpOnly: true,
        expires: new Date(jwtDecode(accessToken).exp! * 1000),
        path: '/',
        sameSite: "lax" as const,
      };

      cookieStore.set(cookieOptions);
    }

    return {
      success: true,
      message: data?.message,
    };

  } catch (error) {
    console.error('Ocorreu um erro ao entrar com o usuário:', error);
    return {
      success: false,
      error: "Ocorreu um erro ao entrar, tente novamente",
    };
  }
}

export async function logOutUser() {
  const cookieStore = await cookies();
  cookieStore.delete('jwt');
  redirect('/signin');
}