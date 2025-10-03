export type APIResponseError = {
  message: string,
  error: string,
  statusCode: number
}

export type FinancialSummary = { 
  totalIncomes: number, 
  totalExpenses: number, 
  totalBalance: number 
}

export type Transactions = {
  id: string,
  title: string,
  amount: string,
  type: string,
  category: string,
  description: string,
  createdAt: string
}

export type Pagination = {
  current_page: number,
    items_per_page: number,
    totalItems: number,
    total_pages: number
}

export type ApiResponseTransactions = {
  message: string,
  userTransactions: Transactions[],
  pagination: Pagination,
}