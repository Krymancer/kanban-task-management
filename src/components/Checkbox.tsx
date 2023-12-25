'use client';

import React, { ChangeEvent, useState } from "react";

interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <div className={`flex items-center justify-start gap-4 bg-light-gray hover:bg-main-purple/25 dark:bg-very-dark-gray p-3 rounded-[4px] w-full ${props.className}`}>
      <input type="checkbox" checked={props.checked} onChange={props.onChange} className="accent-main-purple" />
      <label className={`font-bold text-[12px] ${props.checked ? 'line-through text-black opacity-50 dark:text-white' : 'text-black dark:text-white'}`}>{props.label}</label>
    </div>
  );
}