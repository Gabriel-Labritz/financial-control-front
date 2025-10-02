import { Card, CardContent } from "@/components/ui/card";

interface CardErrorProps {
  error: string,
}
export default function CardError({ error }: CardErrorProps) {
  return (
    <Card className="border-none w-full max-w-lg bg-destructive/10 text-destructive">
      <CardContent className="text-center p-4">
        <p>Ocorreu um erro ao carregar dados</p>
        <span>{error}</span>
      </CardContent>
    </Card>
  );
}