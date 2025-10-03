import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { formatCurrency } from "@/utils/format_currency";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LastTransactionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="flex items-center text-sm font-medium select-none">
          Últimas transações
          <Link href={"#"} className="ml-auto">
            <Button type="button" variant="link">
              Visualizar todas
              <ArrowRight />
            </Button>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex justify-between items-center border-b p-2">
          <p className="font-semibold text-sm">
            Venda De Camisa
          </p>
          <div>
            <p className="font-semibold text-sm text-chart-2">
              {formatCurrency(48.92)}
            </p>
          </div>
        </article>
        <article className="flex justify-between items-center border-b p-2">
          <p className="font-semibold text-sm">
            Uber Black
          </p>
          <div>
            <p className="font-semibold text-sm text-chart-1">
              {formatCurrency(29.98)}
            </p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}