'use client';

import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type Props = { label: string; } & CheckboxProps

export function CheckboxContainer(props: Props) {
  return (
    <div className="flex gap-4 items-center bg-light-gray dark:bg-very-dark-gray h-10 p-3 rounded-md hover:bg-main-purple-hover/25 dark:hover:bg-main-purple-hover/25" onClick={() => props.onClick}>
      <Checkbox id={props.id} onCheckedChange={props.onCheckedChange} checked={props.checked} />
      <Label htmlFor={props.id} className="text-xs font-bold peer-data-[state=checked]:line-through" >{props.label}</Label>
    </div>
  );
}