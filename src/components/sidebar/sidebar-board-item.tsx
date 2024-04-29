import { cn } from "@/lib/utils";

import { BoardIcon } from "@/components/icons";
import { Board } from "@/types/board";
import { useBoardStore } from "@/store/useBoardStore";

type SidebarBoardItemProps = {
  board: Board;
  active?: boolean;
};

export function SidebarBoardItem({ board, active }: SidebarBoardItemProps) {
  const { setSelected } = useBoardStore();

  return (
    <div className='w-full flex justify-start select-none cursor-pointer' onClick={() => setSelected(board)}>
      <div className={cn(
        'rounded-r-[100px] flex items-center gap-3 px-6 py-4 font-bold max-h-12 transition-all',
        {
          ['bg-main-purple text-white']: active,
          ['text-medium-gray']: !active
        }
      )}
      >
        <BoardIcon />
        {board.name}
      </div>
    </div>
  )
}
