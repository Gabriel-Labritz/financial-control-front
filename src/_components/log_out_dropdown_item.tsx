"use client";

import { logOutUser } from "@/actions/auth";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Loader2, LogOut } from "lucide-react";
import { useTransition } from "react";

export default function LogOutDropdownItem() {
  const [isPending, startTransaction] = useTransition();

  const handleLogOut = async () => {
    startTransaction(async () => {
      await logOutUser();
    })
  };

  return (
    <DropdownMenuItem
      onClick={handleLogOut}
      disabled={isPending}
      className="font-medium text-[12px]">
      {
        isPending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <LogOut />
        )
      }
      Sair
    </DropdownMenuItem>
  );
}