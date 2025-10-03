import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CounterAnimated from "./counter_animated";

interface AnalyticsCardItemProps {
  cardDescription: string;
  Icon: React.ElementType;
  amount: number;
  colorIcon?: string;
  isTransactionCount?: boolean
}

export default function AnalyticsCardItem({ 
  cardDescription, 
  Icon, 
  amount, 
  colorIcon, 
  isTransactionCount }:
   AnalyticsCardItemProps) {

  return (
    <Card className="border-none">
      <CardHeader>
        <CardDescription className="flex items-center text-sm font-medium">
          {cardDescription}
          <Icon
            className="ml-auto size-5"
            color={colorIcon || 'var(--color-muted-foreground)'}
          />
        </CardDescription>
        <CardTitle className="flex-1 text-2xl lg:text-3xl text-foreground font-semibold overflow-hidden text-ellipsis whitespace-nowra">
          {isTransactionCount ? 
            ( amount ) : 
            (<CounterAnimated amount={amount} />)
          }
        </CardTitle>
      </CardHeader>
    </Card>
  );
}