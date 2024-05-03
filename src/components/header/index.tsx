"use client";

import { useEffect, useState } from "react";
import { SidebarPopup } from '@/components/sidebar/popup';
import { useBoardStore } from "@/store/useBoardStore";
import { Logo } from "./logo";
import { CreateNewTaskDialogTrigger } from "./create-new-task-dialog-trigger";
import { VerticalEllipses } from "../icons";
import { EllipsesDropdownMenu } from "./ellipses-dropdown-menu";

export function Header() {
  const { selected } = useBoardStore();

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null;

  return (
    <header className='flex items-center dark:bg-dark-gray border-b border-b-lines-light dark:border-b-lines-dark'>
      <Logo />

      <div className='flex justify-between w-full pr-4'>
        <div className='flex items-center'>
          <div className='hidden sm:block text-2xl font-bold sm:pl-6 dark:text-white'>{selected.name}</div>
          <SidebarPopup />
        </div>

        <div className="flex gap-4 items-center">
          <CreateNewTaskDialogTrigger />
          <EllipsesDropdownMenu />
        </div>
      </div>
    </header >
  )
}




