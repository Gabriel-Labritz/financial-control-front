import Header from "@/_components/header";
import SidebarApp from "@/_components/sidebar_app";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "FinanCash | Dashboard",
};

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <SidebarApp />
      <main className="border border-amber-500 w-full">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
}
