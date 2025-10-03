import { Card, CardContent } from "@/components/ui/card";
import { ChartPieData, ChartPieDonut } from "./pie_chart_donut";
import { getFinancialSummary } from "@/actions/financial";
import CardError from "./card_error";
import CounterAnimated from "./counter_animated";
import { Button } from "@/components/ui/button";

export default async function BalanceCard() {
  const summaryResponse = await getFinancialSummary();

  if (!summaryResponse.success && summaryResponse.error) {
      return (
      <CardError error={summaryResponse.error}/>
    );
  }

  if (!summaryResponse.summaryData) return;

  const chartData = [
    { type: "expense", amount: summaryResponse.summaryData.totalExpenses, fill: "var(--color-chart-1)" },
    { type: "income", amount: summaryResponse.summaryData.totalIncomes, fill: "var(--color-chart-2)" },
  ] as ChartPieData[];

  return (
    <Card className="border-none w-full max-w-[600px] relative">
      <CardContent className="flex items-center gap-4">
        <div className="w-32 h-32 flex-shrink-0">
          <ChartPieDonut data={chartData}/>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground select-none">Balanço Total</p>
            <p className="flex-1 text-3xl xl:text-4xl font-semibold text-foreground">
              <CounterAnimated amount={summaryResponse.summaryData.totalBalance}/>
            </p>
          </div>
        </div>
        <Button variant="link" className="absolute right-3 top-3 xl:right-6 xl:top-6">+ Transação</Button>
      </CardContent>
    </Card>
  );
}