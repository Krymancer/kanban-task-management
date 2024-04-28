"use client";

import { Task } from "@/types/board";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogHeader, DialogTrigger, Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { CheckboxContainer } from "@/components/checkbox-container";
import { VerticalEllipses } from "../icons";


type RowItemProps = Task;

export function RowItem({ title, description, status, subtasks }: RowItemProps) {

  const completedSubtasks = subtasks.filter(subtask => subtask.isCompleted).length;
  const totalSubtasks = subtasks.length;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="max-w-64">
          <CardHeader className="pb-2">
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardFooter className='text-medium-gray'>
            {`${completedSubtasks} of ${totalSubtasks} subtasks`}
          </CardFooter>
        </Card>
      </DialogTrigger>

      <DialogContent className="w-[300px] sm:w-[480px]">
        <DialogHeader>
          <DialogTitle className="font-bold text-start w-full flex justify-between">
            {title}
            <VerticalEllipses className="mr-4" />
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="w-full flex flex-col gap-4">
          {description}
        </DialogDescription>
        <div>
          <h3 className="text-black dark:text-white font-bold mb-4">Subtasks ({completedSubtasks} of {totalSubtasks})</h3>
          <div className="flex flex-col gap-2">
            {subtasks.map((subtask, index) => (<CheckboxContainer key={index} label={subtask.title} checked={subtask.isCompleted} />))}
          </div>
        </div>
        <div>
          <h3 className="text-black dark:text-white font-bold mb-4">Current status {status}</h3>
          <Select defaultValue={status} value={status}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select..." defaultValue={status} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Todo">Todo</SelectItem>
                <SelectItem value="Doing">Doing</SelectItem>
                <SelectItem value="Done">Done</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </DialogContent>
    </Dialog>
  )
}