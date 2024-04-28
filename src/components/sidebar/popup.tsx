import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useBoards } from '@/hooks/useBoards';
import { useSelectedBoard } from '@/hooks/useSelectedBoard';
import { ChevronDownIcon } from "@/components/icons";
import { SidebarBoardItem } from '@/components/sidebar/sidebar-board-item';
import { ThemeToggle } from '@/components/theme-toogle';

export function SidebarPopup() {
  const { boards } = useBoards();
  const { selected } = useSelectedBoard();

  return (
    <Dialog >
      <DialogTrigger className='text-lg font-bold flex gap-2 items-center dark:text-white sm:hidden'>
        Platform Launch
        <ChevronDownIcon />
      </DialogTrigger>
      <DialogContent className='w-[264px] rounded-lg p-0 border-none flex flex-col gap-0'>
        <div className='px-6 py-4 font-bold text-medium-gray text-[12px] tracking-[2.4px]'>ALL BOARDS (3)</div>
        <div>
          {
            boards.boards.map((board, index) => (
              <SidebarBoardItem key={index} board={board} active={board.name === selected.name} />
            ))
          }
        </div>
        <div className='p-4'>
          <ThemeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
}
