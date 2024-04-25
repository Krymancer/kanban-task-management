import { ComponentProps } from "react";

export function ChevronDownIcon(props: ComponentProps<'svg'>) {
  return (
    <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path stroke="#635FC7" strokeWidth={2} fill="none" d="M1 1l4 4 4-4" />
    </svg>
  )
}