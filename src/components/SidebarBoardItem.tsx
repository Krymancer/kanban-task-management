import BoardIcon from "./icons/BoardIcon";

type SidebarBoardItemProps = {
  name: string;
  active?: boolean;
};

export default function SidebarBoardItem({ name, active }: SidebarBoardItemProps) {
  return (
    <div className='w-full flex justify-start'>
      <div className={`${active ? 'bg-main-purple text-white' : 'text-medium-gray'} rounded-r-[100px] flex items-center gap-3 px-6 py-4 font-bold max-h-12`} >
        <BoardIcon />
        {name}
      </div>
    </div>
  )
}