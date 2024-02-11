import { useData } from '@/hooks/useData';
import SidebarBoardItem from "./SidebarBoardItem";
import ThemeToggle from "./ThemeToggle";
import HideSidebarIcon from "./icons/HideSidebarIcon";

export default function Sidebar() {
  const {data, setData} = useData();

  return (
    <div className='hidden absolute inset-0 top-20 sm:flex flex-col justify-between  border-t border-t-white border-r border-r-lines-light bg-white dark:bg-dark-gray dark:border-r-lines-dark dark:border-t-dark-gray w-[226px]'>
      <div>
        <div className='px-6 py-4 font-bold text-medium-gray text-[12px] tracking-[2.4px]'>ALL BOARDS ({data.boards.length})</div>
        <div>
          {
            data.boards.map((board, index) => (
              <SidebarBoardItem key={index} name={board.name} active={index===0} />
            ))
          }
        </div>
      </div>
      <div>
        <ThemeToggle />
        <div className='flex gap-4 text-medium-gray items-center px-8 cursor-pointer'><HideSidebarIcon /> Hide SidebarT</div>
      </div>
    </div>
  );
}