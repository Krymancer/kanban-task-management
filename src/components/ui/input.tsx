import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 outline-none w-full rounded-md bg-white px-3 py-2 text-sm placeholder:text-black/25 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-very-dark-gray dark:placeholder:text-white/25",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
