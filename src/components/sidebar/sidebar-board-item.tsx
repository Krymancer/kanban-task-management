import { useSelectedBoard } from "@/hooks/useSelectedBoard";

import { cn } from "@/lib/utils";

import { BoardIcon } from "@/components/icons";

type SidebarBoardItemProps = {
  name: string;
  active?: boolean;
};

export function SidebarBoardItem({ name, active }: SidebarBoardItemProps) {
  const { setSelected } = useSelectedBoard();

  return (
    <div className='w-full flex justify-start select-none cursor-pointer' onClick={() => setSelected(name)}>
      <div className={cn(
        'rounded-r-[100px] flex items-center gap-3 px-6 py-4 font-bold max-h-12 transition-all',
        {
          ['bg-main-purple text-white']: active,
          ['text-medium-gray']: !active
        }
      )}
      >
        <BoardIcon />
        {name}
      </div>
    </div>
  )
}
