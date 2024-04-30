"use client";

import { useState } from 'react';

import { type Subtask } from "@/types/board";

import { addNewTask } from '@/actions/taskActions';

import { Button } from '@/components/ui/button';
import { CrossIcon } from '@/components/icons';
import { DialogClose } from "@/components/ui/dialog";
import { TextField } from "@/components/text-field";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useBoardStore } from '@/store/useBoardStore';
import { SelectWrapper } from '@/components/select-wrapper';


export function CreateNewTaskDialogContent() {
  const { selected, boards, setBoards } = useBoardStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState<Subtask[]>([{ title: "", isCompleted: false }]);
  const [status, setStatus] = useState(selected.columns[0].name);

  const isCreateButtonDisabled = !title || subtasks.some(subtask => !subtask.title);
  const statusOptions = selected.columns.map(column => column.name) || [];

  function addNewSubtask() {
    setSubtasks([...subtasks, { title: "", isCompleted: false }]);
  }

  function editSubtask(index: number, title: string) {
    const updatedSubtasks = subtasks.map((subtask, i) => { return i === index ? { ...subtask, title } : subtask; });
    setSubtasks(updatedSubtasks);
  }

  function removeSubtask(index: number) {
    if (subtasks.length === 1) return setSubtasks([{ title: "", isCompleted: false }]);
    setSubtasks(subtasks.filter((_, i) => i !== index));
  }

  const createTask = () => addNewTask({
    title,
    description,
    subtasks,
    status,
  }, selected, boards, setBoards);

  return (
    <div className="flex flex-col gap-4 mb-2 mt-6">
      <div className="flex flex-col gap-4">
        <Label className="text-xm font-bold">Title</Label>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Take coffee break"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-xm font-bold">Description</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g. It&apos;s always good to take a break. This 15 minute break will recharge the batteries a little."
        />
      </div>
      <div className="flex flex-col gap-4">
        <Label className="text-xm font-bold">Subtasks</Label>
        <div className="flex flex-col gap-2">
          {subtasks.map((subtask, index) => (
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
        <SelectWrapper value={status} options={statusOptions} onChange={setStatus} />
      </div>
      <DialogClose asChild>
        <Button
          onClick={createTask}
          disabled={isCreateButtonDisabled}
        >
          Create Task
        </Button>
      </DialogClose>
    </div>
  )
}