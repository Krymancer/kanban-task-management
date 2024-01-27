import { HTMLAttributes, useState } from "react";

interface DropDownItem {
  value: string;
  label: string;
}

interface DropdownProps extends Omit<HTMLAttributes<HTMLSelectElement>, 'onChange'> {
  items: DropDownItem[];
  selected: DropDownItem;
  onChange: (item: DropDownItem) => void;
}

export default function Dropdown(props: DropdownProps) {
  const [isOpened, setIsOpened] = useState(false);
  
  return (
    <div className="bg-white dark:bg-very-dark-gray relative">
      <button className="border border-lines-light w-full py-2 flex items-start px-2 dark:border-lines-dark rounded-sm dark:text-white" onClick={() => setIsOpened(!isOpened)}>
        <div>{props.selected?.label}</div>
      </button>
      {isOpened && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-full dark:bg-very-dark-gray dark:text-medium-gray">
          {props.items.map((item) => (
            <div key={item.value} className="px-2 py-2">
              <button onClick={() => {props.onChange(item); setIsOpened(false)}}>{item.label}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}