import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import UserAvatar from "./user_avatar";
import { Settings2 } from "lucide-react";
import LogOutDropdownItem from "./log_out_dropdown_item";

export default function DropdownUserAvatar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer">
        <UserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuLabel>Conta</DropdownMenuLabel>
        <DropdownMenuItem className="font-medium text-[12px]">
          <Settings2 /> Configurar
        </DropdownMenuItem>
        <LogOutDropdownItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}