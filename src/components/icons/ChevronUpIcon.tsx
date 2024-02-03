import { ComponentProps } from "react";

export default function ChevronUpIcon(props: ComponentProps<'svg'>) {
  return (
    <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path stroke="#635FC7" strokeWidth={2} fill="none" d="M9 6L5 2 1 6" />
    </svg>
  )
}
