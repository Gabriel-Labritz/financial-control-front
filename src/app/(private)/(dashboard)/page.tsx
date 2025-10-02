import BalanceCard from "@/_components/balance_card";
import HeaderBox from "@/_components/header_box";

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
      <section className="mt-6">
        <BalanceCard />
      </section>
    </div>
  );
}
