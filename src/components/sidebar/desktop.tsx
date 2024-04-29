"use client";

import { useState } from "react";

import { SidebarBoardItem } from "@/components/sidebar/sidebar-board-item";
import { ThemeToggle } from "@/components/theme-toogle";

import { HideSidebarIcon, ShowSidebarIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { SidebarAddNewBoard } from "./sidebar-add-new-board";
import { useBoardStore } from "@/store/useBoardStore";

export function Sidebar() {
  const { boards, selected } = useBoardStore();

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  function toggleSidebar(flag: boolean) {
    setSidebarOpen(flag);
  }

  return (
    <>
      <div className={cn(
        "hidden items-end h-full bg-green-500/10",
        !isSidebarOpen && "flex"
      )}>
        <div className="absolute cursor-pointer flex-end bg-main-purple rounded-r-full h-14 w-12 flex items-center justify-center" onClick={() => toggleSidebar(true)}>
          <ShowSidebarIcon />
        </div>
      </div>
      <div className={cn(
        "transition-all hidden sm:flex flex-col justify-between border-t border-t-white border-r border-r-lines-light bg-white dark:bg-dark-gray dark:border-r-lines-dark dark:border-t-dark-gray min-w-[300px] w-[300px] h-full",
        !isSidebarOpen && "w-0 min-w-0 overflow-hidden"
      )}>
        <div>
          <div className='px-6 py-4 font-bold text-medium-gray text-[12px] tracking-[2.4px]'>ALL BOARDS ({boards.length})</div>
          <div>
            {
              boards.map((board, index) => (
                <SidebarBoardItem key={index} board={board} active={board.name === selected.name} />
              ))
            }
            <SidebarAddNewBoard />
          </div>
        </div>
        <div className="flex flex-col pb-6 px-6 gap-2">
          <ThemeToggle />
          <div className='flex gap-4 text-medium-gray items-center px-2 cursor-pointer' onClick={() => toggleSidebar(false)}>
            <HideSidebarIcon /> Hide Sidebar
          </div>
        </div>
      </div>
    </>
  );
}


