'use client';

import { ChangeEvent, useRef, useState } from "react";

interface TextFieldProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
}

export default function TextField(props: TextFieldProps) {
  const [isFristEdit, setIsFirstEdit] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const isEmpty = props.value.length === 0;
  const error = isFristEdit ? false : isEmpty;

  return(
    <label className={`rounded-[4px] bg-white dark:bg-very-dark-gray border p-3 w-full flex flex-row justify-between ${error ? 'border-red' : 'border-lines-light dark:border-lines-dark'}`}>
      <input ref={inputRef} type="text" value={props.value} onChange={(e) => {props.onChange(e); setIsFirstEdit(false)}} className={`text-[13px] w-full bg-transparent border-none dark:text-white outline-none ${props.className}`} />
      <span className={`text-[13px] whitespace-nowrap select-none text-red ${error ? 'block' : 'hidden'}`} onClick={() => inputRef.current?.focus()}>Can&apos;t be empty</span>
    </label>
  );
}