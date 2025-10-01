import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme_provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "FinanCash",
  description: "Gerencie suas finanças",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning  className={`${inter.variable} antialiased`}>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
