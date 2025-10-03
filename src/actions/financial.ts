"use server";
import { fetchSecure } from "@/utils/fetch_secure";
import { APIResponseError, ApiResponseTransactions, FinancialSummary } from "./types/types";

export async function getFinancialSummary() {
  try {
    const res = await fetchSecure({ route: '/dashboard/summary'});

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



export async function getTransactionCount() {
  try {
    const res = await fetchSecure({ route: '/transaction/all'});

    if (!res.ok) {
      const errorData: APIResponseError = await res.json();
      
      return {
        success: false,
        error: errorData?.message || "Ocorreu um erro ao carregar as transações feitas",
      }
    }

    const transactionCount: ApiResponseTransactions = await res.json();

    return {
      success: true,
      count: transactionCount.userTransactions.length
    }
  } catch (error) {
    console.error('Ocorreu um erro ao carregar as transações feitas:', error);

    return {
      success: false,
      error: 'Ocorreu um erro ao carregar as transações feitas'
    };
  }
}