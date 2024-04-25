"use client";

import CheckboxOld from "@/components/Checkbox";
import Dropdown from "@/components/Dropdown";
import TextField from "@/components/TextField";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ComponentsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-10 p-40">
      <div className="flex flex-col space-y-4 w-full">
        <Dropdown onChange={() => { }} items={[{ label: 'Todo', value: 'Todo' }]} selected={{ label: 'Todo', value: 'Todo' }} />
        <CheckboxOld label="Checkbox" onChange={() => { }} />
        <TextField label="Text Field" value="123" onChange={() => { }} />
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <Checkbox>Teste</Checkbox>
        <Input />
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
  );
}