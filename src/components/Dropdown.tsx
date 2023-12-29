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
      <div>
        <button onClick={() => setIsOpened(!isOpened)}>{props.selected?.label}</button>
      </div>
      {isOpened && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-full">
          {props.items.map((item) => (
            <div key={item.value}>
              <button onClick={() => {props.onChange(item); setIsOpened(false)}}>{item.label}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}