interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  children: string;
  large?: boolean;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const baseClass = 'flex items-center justify-center rounded-[24px] transition-all pt-2 pb-[9px] min-w-[300px] font-bold';
  const primaryClass = 'text-white bg-main-purple hover:bg-main-purple-hover';
  const secondaryClass = 'text-main-purple bg-main-purple/10 hover:bg-main-purple/25 dark:bg-white dark:hover:bg-white/75';
  const dangerClass = 'text-white bg-red hover:bg-red-hover';

  function getVariant() {
    const { variant, primary, secondary, danger } = props;
    if(variant) return variant;
    if(primary) return 'primary';
    if(secondary) return 'secondary';
    if(danger) return 'danger';
    return 'primary';
  }

  const variant = getVariant();
  const buttonClass = `${baseClass} ${variant === 'primary' ? primaryClass : variant === 'secondary' ? secondaryClass : dangerClass} ${props.large ? 'text-[15px]' : 'text-[13px]'}`;

  return(
    <button className={buttonClass}>
      {props.children}
    </button>
  )
}