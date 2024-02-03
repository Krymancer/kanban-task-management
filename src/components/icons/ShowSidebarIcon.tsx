import { ComponentProps } from "react"

export default function ShowSidebarIcon(props: ComponentProps<'svg'>) {
  return (
    <svg width={16} height={11} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.815 4.434A9.055 9.055 0 008 0 9.055 9.055 0 00.185 4.434a1.333 1.333 0 000 1.354A9.055 9.055 0 008 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 000-1.354zM8 8.89a3.776 3.776 0 01-3.778-3.78A3.776 3.776 0 018 1.333a3.776 3.776 0 013.778 3.778A3.776 3.776 0 018 8.89zm2.889-3.778a2.889 2.889 0 11-5.438-1.36 1.19 1.19 0 101.19-1.189H6.64a2.889 2.889 0 014.25 2.549z"
        fill="#FFF"
      />
    </svg>
  )
}
