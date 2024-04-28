'use client';

import { ChangeEvent, useRef, useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface TextFieldProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

export function TextField(props: TextFieldProps) {
  const [isFristEdit, setIsFirstEdit] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const isEmpty = props.value.length === 0;
  const error = isFristEdit ? false : isEmpty;

  return (
    <label className={cn(
      "rounded-[4px] bg-white dark:bg-very-dark-gray border w-full flex flex-row justify-between border-lines-light dark:border-lines-dark items-center",
      error && 'border-red dark:border-red pr-4'
    )}>
      <Input value={props.value} placeholder={props.placeholder} onChange={(e) => { props.onChange(e); setIsFirstEdit(false); }} />
      <span className={cn("text-[13px] whitespace-nowrap select-none text-red hidden",
        error && 'block'
      )} onClick={() => inputRef.current?.focus()}>Can&apos;t be empty</span>
    </label>
  );
}