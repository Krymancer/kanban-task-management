"use client";

import { CrossIcon } from "@/components/icons";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { TextField } from "../text-field";
import { Label } from "../ui/label";
import { useState } from "react";
import { Button } from "../ui/button";


export function AddNewColumn() {
  const [columns, setColumns] = useState<string[]>(['']);

  const addColumn = () => {
    setColumns([...columns, '']);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className='flex flex-1 h-full py-12 rounded-lg'>
          <div
            className='cursor-pointer rounded-lg w-64 bg-gradient-to-b from-[#E9EFFA] to-[#E9EFFA]/50 dark:from-dark-gray dark:to-dark-gray/50 dark:opacity-25 flex items-center justify-center'
          >
            <p className='text-medium-gray font-bold text-xl'>+ New Column</p>
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
  );
}