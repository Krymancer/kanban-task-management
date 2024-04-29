"use client";

import { cn } from "@/lib/utils";

import { BoardIcon, CrossIcon } from "@/components/icons";

import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { TextField } from "../text-field";
import { Label } from "../ui/label";
import { useState } from "react";
import { Button } from "../ui/button";

export function SidebarAddNewBoard() {
  const [columns, setColumns] = useState<string[]>(['']);

  const addColumn = () => {
    setColumns([...columns, '']);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className='w-full flex justify-start select-none cursor-pointer'>
          <div className={cn(
            'rounded-r-[100px] flex items-center gap-3 px-6 py-4 font-bold max-h-12 transition-all text-main-purple',
          )}
          >
            <BoardIcon />
            + Create New Board
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold text-start w-full flex justify-between">
            Add New Board
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label className="font-bold text-xs">Board Name</Label>
            <TextField placeholder="e.g. Web Design" value="" onChange={() => { }} />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-bold text-xs">Board Columns</Label>
            <div className="flex flex-col gap-3">
              {columns.map((column, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <TextField
                    key={index}
                    placeholder="e.g. Todo"
                    value={column}
                    onChange={(e) => {
                      const newColumns = [...columns];
                      newColumns[index] = e.target.value;
                      setColumns(newColumns);
                    }} />
                  <CrossIcon
                    className="cursor-pointer"
                    onClick={() => {
                      const newColumns = [...columns];
                      newColumns.splice(index, 1);
                      setColumns(newColumns);
                    }} />
                </div>
              ))}
              <Button variant="secondary" onClick={addColumn}>+ Add New Column</Button>
            </div>
          </div>
          <Button>Create New Board</Button>
        </div>
      </DialogContent>
    </Dialog >
  )
}
