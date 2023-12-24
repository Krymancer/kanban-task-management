interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  varian: 'primary' | 'secondary' | 'danger';
  children: string;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const baseClass = 'flex items-center justify-center rounded-[24px] transition-all';
  const primaryClass = 'text-white bg-main-purple hover:bg-main-purple-hover';
  const secondaryClass = 'text-main-purple';
  const dangerClass = 'text-white bg-red hover:bg-red-hover';
  return(
    <button className="rounded-lg text-main-purple"></button>
  )
}