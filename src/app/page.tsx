'use client';

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Dropdown from "@/components/Dropdown";
import TextField from "@/components/TextField";
import ThemeToggle from "@/components/ThemeToggle";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');
  const handleClick = () => {console.log('click')};
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {setChecked(event.target.checked)};
  const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>) => {setValue(event.target.value)};

  const [selected, setSelected] = useState({value: '1', label: '1'});

  const data = [
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2'
    },
    {
      value: '3',
      label: '3'
    }
  ];

  const handleItemChange = (item: {value: string, label: string}) => {
    setSelected(item);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center dark:bg-dark-gray bg-white gap-10">
      <div className="w-[400px] flex flex-col gap-6">
      <ThemeToggle />
      <Button onClick={handleClick}>Primary</Button>
      <Button secondary onClick={handleClick}>Secondary</Button>
      <Button danger onClick={handleClick}>Danger</Button>
      <Checkbox label="tst" onChange={(handleCheckboxChange)} checked={checked}/>
      <TextField label="tst" onChange={handleTextInputChange} value={value} placeholder="Write something..." />
      <Dropdown items={data} selected={selected} onChange={handleItemChange} />
      </div>
    </main>
  )
}
