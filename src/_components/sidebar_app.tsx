import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator
} from "@/components/ui/sidebar";
import { ChartArea, House, Landmark, Search } from "lucide-react";
import Link from "next/link";

export default function SidebarApp() {

  const menuItems = [
    {
      title: 'Inicío',
      url: '/',
      icon: House
    },
    {
      title: 'Transações',
      url: '#',
      icon: Landmark
    },
    {
      title: 'Buscar',
      url: '#',
      icon: Search
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center size-8 shrink-0 bg-primary rounded-lg">
            <ChartArea size={22} className="text-white" />
          </div>

          <div className="flex flex-col overflow-hidden whitespace-nowrap">
            <span className="font-semibold text-sm tracking-tight">
              FinanCash
            </span>
            <span className="text-xs tracking-tight text-muted-foreground transition-opacity duration-300 sidebar-collapsed:opacity-0">
              Gerencie suas finanças
            </span>
          </div>
        </div>
      </SidebarHeader>
      <div className="flex justify-center">
        <SidebarSeparator className="w-full"/>
      </div>
      <SidebarContent className="font-medium">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">
            Navegar
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="text-foreground">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}