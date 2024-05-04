import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { VerticalEllipses } from "../icons";

import { useState } from "react";
import { DeleteBoardDialog } from "./delete-board-dialog";

export function EllipsesDropdownMenu() {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <DeleteBoardDialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen} />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer">
            <VerticalEllipses />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit board</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDeleteModalOpen(true)} className="text-red hover:text-red focus:text-red dark:text-red dark:hover:text-red dark:focus:text-red ">Delete board</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}