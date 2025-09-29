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
      {/* Left Area */}
      <div className="border border-blue-600 flex flex-col items-center justify-center w-full xl:w-[35%] px-8">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right Area */}
      <div className="border border-red-600 hidden xl:flex xl:w-[65%] items-center justify-center">ImageArea</div>
    </div>
  );
}
