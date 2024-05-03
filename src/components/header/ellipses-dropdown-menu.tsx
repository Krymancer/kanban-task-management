import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { VerticalEllipses } from "../icons";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { useBoardStore } from "@/store/useBoardStore";
export function EllipsesDropdownMenu() {
  const { selected } = useBoardStore();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogTrigger asChild>

        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-red font-bold text-2xl">
            Delete this board?
          </DialogHeader>
          <DialogDescription>
            Are you sure you want to delete the '{selected.name}' board? This action will remove all columns and tasks and cannot be reversed.
          </DialogDescription>
          <DialogFooter className="w-full">
            <Button variant="destructive" className="w-full" >Delete</Button>
            <Button variant="secondary" className="w-full" onClick={() => setDeleteModalOpen(false)}>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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