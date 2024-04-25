"use client";

import { useState } from "react";
import { useBoards } from "@/hooks/useBoards";
import { useSelectedBoard } from "@/hooks/useSelectedBoard";

import { SidebarBoardItem } from "@/components/sidebar/sidebar-board-item";
import { ThemeToggle } from "@/components/theme-toogle";

import { HideSidebarIcon, ShowSidebarIcon } from "@/components/icons";

export function Sidebar() {
  const { boards } = useBoards();
  const { selected } = useSelectedBoard();

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  function toggleSidebar(flag: boolean) {
    setSidebarOpen(flag);
  }

  if (!isSidebarOpen) {
    return (
      <div className="flex items-end h-full bg-green-500/10">
        <div className="absolute cursor-pointer flex-end bg-main-purple rounded-r-full h-14 w-12 flex items-center justify-center" onClick={() => toggleSidebar(true)}>
          <ShowSidebarIcon />
        </div>
      </div>
    );
  }

  return (
    <div className='hidden sm:flex flex-col justify-between border-t border-t-white border-r border-r-lines-light bg-white dark:bg-dark-gray dark:border-r-lines-dark dark:border-t-dark-gray w-[226px] h-full'>
      <div>
        <div className='px-6 py-4 font-bold text-medium-gray text-[12px] tracking-[2.4px]'>ALL BOARDS ({boards.boards.length})</div>
        <div>
          {
            boards.boards.map((board, index) => (
              <SidebarBoardItem key={index} name={board.name} active={board.name === selected} />
            ))
          }
        </div>
      </div>
      <div className="flex flex-col pb-6 gap-2">
        <ThemeToggle />
        <div className='flex gap-4 text-medium-gray items-center px-8 cursor-pointer' onClick={() => toggleSidebar(false)}>
          <HideSidebarIcon /> Hide Sidebar
        </div>
      </div>
    </div>
  );
}
