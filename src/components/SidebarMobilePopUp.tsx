import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SidebarBoardItem from "./SidebarBoardItem";
import ThemeToggle from "./ThemeToggle";
import ChevronDownIcon from "./icons/ChevronDownIcon";

export default function SidebarMobilePopUp() {
  return(
    <Dialog >
            <DialogTrigger className='text-lg font-bold flex gap-2 items-center dark:text-white sm:hidden'>
              Platform Launch
              <ChevronDownIcon />
            </DialogTrigger>
            <DialogContent className='w-[264px] rounded-lg p-0 border-none flex flex-col gap-0'>
              <div className='px-6 py-4 font-bold text-medium-gray text-[12px] tracking-[2.4px]'>ALL BOARDS (3)</div>
              <div>
                <SidebarBoardItem active />
                <SidebarBoardItem />
                <SidebarBoardItem />
              </div>
              <div className='p-4'>
                <ThemeToggle />
              </div>
            </DialogContent>
          </Dialog>
  );
}