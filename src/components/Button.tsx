import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<'button'> &{
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  children: string;
  large?: boolean;
};

export default function Button(props: ButtonProps) {
  return(
    <button className={cn(
      'flex items-center justify-center rounded-[24px] transition-all pt-2 pb-[9px] w-full font-bold', 
      {
        ['text-white bg-main-purple hover:bg-main-purple-hover']: props.primary || !props.secondary && !props.danger,
        ['text-main-purple bg-main-purple/10 hover:bg-main-purple/25 dark:bg-white dark:hover:bg-white/75']: props.secondary,
        ['text-white bg-red hover:bg-red-hover']: props.danger,
        'text-[15px]': props.large,
        'text-[13px]': !props.large,
      },
      props.className
    )} onClick={props.onClick}>
      {props.children}
    </button>
  )
}