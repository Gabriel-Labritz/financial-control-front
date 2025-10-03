import AnalyticsCards from "@/_components/analytics_cards";
import BalanceCard from "@/_components/balance_card";
import ChartOverview from "@/_components/chart_overview";
import { ExpensesByCategoriesGraph } from "@/_components/expenses_by_categories_graph";
import HeaderBox from "@/_components/header_box";
import LastTransactionsCard from "@/_components/last_transactions_card";

export default function Dashboard() {
  return (
    <div className="w-full min-w-full p-4">
      <HeaderBox
        type="greeting"
        title="Bem vindo"
        user="Gabriel"
        subtext="Acesse e gerencie suas finanças com mais efeciência."
      />

      {/* CARDS AREA */}
      <section className="grid gap-4 mt-10">
        <BalanceCard />
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-10">
          <AnalyticsCards />
        </section>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        <ChartOverview />
        <LastTransactionsCard />
        <ExpensesByCategoriesGraph />
      </section>
    </div>
  );
}
