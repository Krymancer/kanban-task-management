"use client";

import { useEffect, useState } from "react";

import { LogoLight, LogoDark, LogoMobile } from "@/components/logos";
import { SidebarPopup } from '@/components/sidebar/popup';
import { Button } from '@/components/ui/button';
import { CrossIcon, VerticalEllipses } from '@/components/icons';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TextField } from "@/components/text-field";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Subtask, Task } from "@/types/board";
import { useBoardStore } from "@/store/useBoardStore";

function Logo() {
  return (
    <div className=' sm:w-[300px] sm:min-w-[300px] flex flex-col gap-4 px-4 py-5 sm:px-9 sm:py-8 sm:border-r border-r-lines-light dark:border-r-lines-dark'>
      <LogoLight className='hidden dark:sm:block' />
      <LogoDark className='hidden sm:block dark:hidden' />
      <LogoMobile className='block sm:hidden' />
    </div>
  )
}

export function Header() {
  const { selected } = useBoardStore();

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null;

  return (
    <header className='flex items-center dark:bg-dark-gray border-b border-b-lines-light dark:border-b-lines-dark'>
      <Logo />

      <div className='flex justify-between w-full pr-4'>
        <div className='flex items-center'>
          <div className='hidden sm:block text-2xl font-bold sm:pl-6 dark:text-white'>{selected.name}</div>
          <SidebarPopup />
        </div>

        <CreateNewTask />
      </div>
    </header >
  )
}

function CreateNewTask() {
  return (
    <div className='flex gap-4 items-center'>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='' size="lg" onClick={() => { }}>
            + <span className="hidden sm:block">Add New Task</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold text-start w-full flex justify-between">
              Add New Task
            </DialogTitle>
          </DialogHeader>
          <CreateTaskDialogContent />
        </DialogContent>
      </Dialog>
      <VerticalEllipses />
    </div>
  );
}

function CreateTaskDialogContent() {
  const { boards, selected, setBoards } = useBoardStore();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [currentSubtasks, setCurrentSubtasks] = useState<Subtask[]>([{ title: "", isCompleted: false }]);
  const [taskStatus, setTaskStatus] = useState(selected.columns ? selected.columns[0].name : "Todo");

  function addNewSubtask() {
    setCurrentSubtasks([...currentSubtasks, { title: "", isCompleted: false }]);
  }

  function editSubtask(index: number, title: string) {
    const updatedSubtasks = currentSubtasks.map((subtask, i) => {
      if (i === index) {
        return { ...subtask, title };
      }
      return subtask;
    });
    setCurrentSubtasks(updatedSubtasks);
  }

  function removeSubtask(index: number) {
    if (currentSubtasks.length === 1) return setCurrentSubtasks([{ title: "", isCompleted: false }]);
    setCurrentSubtasks(currentSubtasks.filter((_, i) => i !== index));
  }

  function createTask() {
    const newTask: Task = {
      title: taskTitle,
      description: taskDescription,
      subtasks: currentSubtasks,
      status: taskStatus,
    };

    const updatedColumn = selected.columns.find(column => column.name === taskStatus);

    if (!updatedColumn) return;

    updatedColumn.tasks.push(newTask);

    const updatedBoard = selected.columns.map(column => {
      if (column.name === taskStatus) {
        return updatedColumn;
      }
      return column;
    });

    const updatedBoards = boards.map(board => {
      if (board.name === selected.name) {
        return { ...board, columns: updatedBoard };
      }
      return board;
    });

    setBoards(updatedBoards);
  }

  return (
    <div className="flex flex-col gap-4 mb-2 mt-6">
      <div className="flex flex-col gap-4">
        <Label className="text-xm font-bold">Title</Label>
        <TextField
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="e.g. Take coffee break"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-xm font-bold">Description</Label>
        <Textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="e.g. It&apos;s always good to take a break. This 15 minute break will recharge the batteries a little."
        />
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-xm font-bold">Subtasks</Label>
        <div className="flex flex-col gap-2">
          {currentSubtasks.map((subtask, index) => (
            <div className="flex gap-4 items-center" key={index}>
              <TextField value={subtask.title} placeholder="e.g. Make Coffee" onChange={(e) => editSubtask(index, e.target.value)} />
              <CrossIcon className="cursor-pointer" onClick={() => removeSubtask(index)} />
            </div>
          ))}
          <Button onClick={addNewSubtask} variant="secondary" className="w-full mt-2">+ Add New Subtask</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-xm font-bold">Status</Label>
        <Select value={taskStatus} onValueChange={setTaskStatus}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {selected.columns?.map((column, index) => (
                <SelectItem key={index} value={column.name}>{column.name}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <DialogClose asChild>
        <Button
          onClick={createTask}
          disabled={!taskTitle || currentSubtasks.some(subtask => !subtask.title)}
        >
          Create Task
        </Button>
      </DialogClose>
    </div>
  )
}
