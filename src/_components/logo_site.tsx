import { ChartArea } from "lucide-react";

export default function LogoSite() {
  return (
    <div className="flex justify-center mb-6">
      <h1 className="flex gap-2 items-center text-2xl font-bold tracking-tighter">
        <ChartArea size={30} color="var(--color-primary)" />
        FinanCash
      </h1>
    </div>
  )
}