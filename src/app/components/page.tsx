"use client";

import { ThemeToggle } from "@/components/theme-toogle";

import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

import { TextField } from "@/components/text-field";

export default function ComponentsPage() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');

  const items = [
    { label: 'Todo', value: 'Todo' },
    { label: 'Doing', value: 'Doing' },
    { label: 'Done', value: 'Done' },
  ];


  return (
    <>
      <ThemeToggle />
      <div className="min-h-screen flex items-center justify-center gap-10 p-40">
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex gap-4 items-center bg-light-gray dark:bg-very-dark-gray h-10 p-3 rounded-md hover:bg-main-purple-hover/25 dark:hover:bg-main-purple-hover/25">
            <Checkbox id="checkbox" />
            <label htmlFor="checkbox" className="text-xs font-bold peer-data-[state=checked]:line-through">Checkbox</label>
          </div>
          <TextField value={value} onChange={(e) => setValue(e.target.value)} label="Fodase" placeholder="teste 123" />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="todo">Todo</SelectItem>
                <SelectItem value="doing">Doing</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}