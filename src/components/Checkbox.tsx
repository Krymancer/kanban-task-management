'use client';

import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Checkbox } from "./ui/checkbox";

type Props = { label: string; } & CheckboxProps

export function CheckboxContainer(props: Props) {
  return (
    <div className="flex gap-4 items-center bg-light-gray dark:bg-very-dark-gray h-10 p-3 rounded-md hover:bg-main-purple-hover/25 dark:hover:bg-main-purple-hover/25">
      <Checkbox id={props.id} onCheckedChange={props.onCheckedChange} value={props.value} />
      <label htmlFor={props.id} className="text-xs font-bold peer-data-[state=checked]:line-through">{props.label}</label>
    </div>
  );
}