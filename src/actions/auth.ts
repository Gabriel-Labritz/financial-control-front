"use server";
import { SignUpSchema } from "@/schemas/sign_up.schema";

const API_BASE_URL = process.env.API_URL;

type APIResponse = {
  message: string;
  error: string;
  statusCode: number;
}

export async function signUpUser(formData:SignUpSchema) { 
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