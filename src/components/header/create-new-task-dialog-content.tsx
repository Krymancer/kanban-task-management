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
  const [subtasks, setSubtasks] = useState<Subtask[]>([{ id: crypto.randomUUID(), title: "", isCompleted: false }]);
  const [status, setStatus] = useState(selected.columns[0].name);

  const isCreateButtonDisabled = !title || subtasks.some(subtask => !subtask.title);
  const statusOptions = selected.columns.map(column => column.name) || [];

  function addNewSubtask() {
    setSubtasks([...subtasks, { id: crypto.randomUUID(), title: "", isCompleted: false }]);
  }

  function editSubtask(id: string, title: string) {
    setSubtasks(subtasks.map(subtask => {
      return id === subtask.id ? { ...subtask, title } : subtask;
    }));
  }

  function removeSubtask(id: string) {
    if (subtasks.length === 1) return setSubtasks([{ id: crypto.randomUUID(), title: "", isCompleted: false }]);
    setSubtasks(subtasks.filter(subtask => subtask.id !== id));
  }

  const createTask = () => addNewTask({
    id: crypto.randomUUID(),
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
          {subtasks.map(subtask => (
            <div className="flex gap-4 items-center" key={subtask.id}>
              <TextField value={subtask.title} placeholder="e.g. Make Coffee" onChange={(e) => editSubtask(subtask.id, e.target.value)} />
              <CrossIcon className="cursor-pointer" onClick={() => removeSubtask(subtask.id)} />
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