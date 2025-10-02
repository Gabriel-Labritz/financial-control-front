import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ToogleThemeBtn from '@/_components/toggle_theme_btn';
import { Github } from "lucide-react";
import Link from "next/link";
import DropdownUserAvatar from "./dropdown_user_avatar";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full p-4">
      {/* LEFT */}
      <SidebarTrigger />

      {/* RIGHT */}
      <nav className="flex items-center gap-2">
         <Button variant="ghost" size="icon" className="rounded-full">
          <Link href="https://github.com/Gabriel-Labritz/financial-control-front">
            <Github />
            <span className="sr-only">accesse o projeto no github</span>
          </Link>
        </Button>
        <ToogleThemeBtn />
        <DropdownUserAvatar />
      </nav>
    </header>
  );
}