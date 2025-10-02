"use server";
import { cookies } from "next/headers";

const API_BASE_URL = process.env.API_URL;

type APIResponseError = {
  message: string,
  error: string,
  statusCode: number
}

type FinancialSummary = { 
  totalIncomes: number, 
  totalExpenses: number, 
  totalBalance: number 
}

export async function getFinancialSummary() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('jwt')?.value;

    const res = await fetch(`${API_BASE_URL}/dashboard/summary`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': `jwt=${token}`
      },
      credentials: 'include',
      cache: 'no-store'
    });

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();
      
      return {
        success: false,
        error: errorData?.message || "Ocorreu um erro ao carregar o balanço financeiro",
      }
    }

    const summaryData: FinancialSummary = await res.json();

    return {
      success: true,
      summaryData
    }
  } catch (error) {
    console.error('Ocorreu um erro ao carregar o balanço financeiro:', error);

    return {
      success: false,
      error: 'Ocorreu um erro ao carregar o balanço financeiro'
    };
  }
}