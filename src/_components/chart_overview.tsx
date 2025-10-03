"use client";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function ChartOverview() {

  const chartData = [
    { month: "January", income: 186, expense: 80 },
    { month: "February", income: 305, expense: 200 },
    { month: "March", income: 237, expense: 120 },
    { month: "April", income: 73, expense: 190 },
    { month: "May", income: 209, expense: 130 },
    { month: "June", income: 214, expense: 140 },
  ];

  const chartConfig = {
    income: {
      label: "Entradas",
      color: "#2563eb",
    },
    expense: {
      label: "Saídas",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardDescription className="flex items-center text-sm font-medium">
          Overview Mensal
            <ChartNoAxesColumnIncreasing
            className="ml-auto size-5 sm:size-6"
            color="var(--color-foreground)"
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="income" fill="var(--color-chart-2)" radius={4} />
            <Bar dataKey="expense" fill="var(--color-chart-1)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}