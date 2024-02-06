import BoardIcon from "./icons/BoardIcon";

export default function SidebarBoardItem({ active }: { active?: boolean }) {
  return (
    <div className='w-full flex justify-start'>
      <div className={`${active ? 'bg-main-purple text-white' : 'text-medium-gray'} rounded-r-[100px] flex items-center gap-3 px-6 py-4 font-bold max-h-12`} >
        <BoardIcon />
        Platform Launch
      </div>
    </div>
  )
}