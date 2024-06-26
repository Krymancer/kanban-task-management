import { ComponentProps } from "react"

export function CheckIcon(props: ComponentProps<'svg'>) {
  return (
    <svg width={10} height={8} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        stroke="#FFF"
        strokeWidth={2}
        fill="none"
        d="M1.276 3.066l2.756 2.756 5-5"
      />
    </svg>
  )
}