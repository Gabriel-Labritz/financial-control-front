import { BanknoteArrowDown, BanknoteArrowUp, Wallet } from "lucide-react";
import { getFinancialSummary, getTransactionCount } from "@/actions/financial";
import AnalyticsCardItem from "./analytics_card_item";
import CardError from "./card_error";

export default async function AnalyticsCards() {
  const [summaryResponse, countResponse] = await Promise.all(
    [
      getFinancialSummary(), 
      getTransactionCount()
    ]
  );

  if(!summaryResponse.success && summaryResponse.error) {
    return <CardError error={summaryResponse.error}/>
  }

  if(!countResponse.success && countResponse.error) {
    return <CardError error={countResponse.error}/>
  }

  if (!summaryResponse.summaryData || !countResponse.count) return;

  const { totalExpenses, totalIncomes} = summaryResponse.summaryData;
  const { count: totalTransactions } = countResponse;

  return (
    <>
      <AnalyticsCardItem 
        cardDescription="Total de entradas"
        Icon={BanknoteArrowUp}
        amount={totalIncomes}
        colorIcon="var(--color-primary)"
      />
      <AnalyticsCardItem 
        cardDescription="Total de saídas"
        Icon={BanknoteArrowDown}
        amount={totalExpenses}
        colorIcon="var(--color-chart-1)"
      />
      <AnalyticsCardItem 
        cardDescription="Transações"
        Icon={Wallet}
        amount={totalTransactions}
        isTransactionCount
      />
    </>
  );
}