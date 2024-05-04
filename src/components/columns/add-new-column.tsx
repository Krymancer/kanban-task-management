"use client";

import { CrossIcon } from "@/components/icons";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogHeader, DialogClose } from "@/components/ui/dialog";
import { TextField } from "../text-field";
import { Label } from "../ui/label";
import { useState } from "react";
import { Button } from "../ui/button";
import { Column } from "@/types/board";
import { useBoardStore } from "@/store/useBoardStore";


export function AddNewColumn() {
  const { boards, selected, setBoards } = useBoardStore();
  const [columnName, setColumnName] = useState<string>('');

  function handleCreateColumn() {
    const newColumn: Column = {
      id: crypto.randomUUID(),
      name: columnName,
      tasks: []
    }

    const newBoards = boards.map(board => {
      if (board.id === selected.id) {
        board.columns.push(newColumn);
      }
      return board;
    });

    setBoards(newBoards);

  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className='flex flex-1 h-full py-12 rounded-lg text-medium-gray group hover:text-main-purple-hover relative'>
          <div className="w-64 cursor-pointer rounded-lg flex items-center justify-center">
            <p className='font-bold text-xl z-10'>+ New Column</p>
          </div>
          <div className='z-0 absolute inset-0 top-12 cursor-pointer rounded-lg bg-gradient-to-b from-[#E9EFFA] to-[#E9EFFA]/50 dark:from-dark-gray dark:to-dark-gray/50 dark:opacity-25 flex items-center justify-center' />
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
            <Label className="font-bold text-xs">Column Name</Label>
            <TextField placeholder="e.g. Later" value={columnName} onChange={(e) => setColumnName(e.target.value)} />
          </div>
          <DialogClose>
            <Button disabled={columnName?.length === 0} onClick={handleCreateColumn} >Create New Column</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog >
  );
}