import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinanCash | Autenticar",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border border-amber-500 flex min-h-screen p-2">
      <div className="border border-blue-600 flex flex-col items-center justify-center w-full xl:w-1/3">{children}</div>
      <div className="border border-red-600 hidden xl:flex flex-1 w-2/3 items-center justify-center">ImageArea</div>
    </div>
  );
}
