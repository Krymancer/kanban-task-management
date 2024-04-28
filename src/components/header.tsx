"use client";

import { useEffect, useState } from "react";

import { LogoLight, LogoDark, LogoMobile } from "@/components/logos";
import { SidebarPopup } from '@/components/sidebar/popup';
import { useSelectedBoard } from '@/hooks/useSelectedBoard';
import { Button } from '@/components/ui/button';
import { CrossIcon, VerticalEllipses } from '@/components/icons';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TextField } from "@/components/text-field";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Logo() {
  return (
    <div className='h-full'>
      <LogoLight className='hidden dark:sm:block' />
      <LogoDark className='hidden sm:block dark:hidden' />
      <LogoMobile className='block sm:hidden' />
    </div>
  )
}

export function Header() {
  const { selected } = useSelectedBoard();

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null;

  return (
    <header className='flex items-center dark:bg-dark-gray border-b border-b-lines-light dark:border-b-lines-dark'>
      <div className='flex flex-col gap-4 px-4 py-5 sm:px-9 sm:py-8 sm:border-r border-r-lines-light dark:border-r-lines-dark'>
        <Logo />
      </div>

      <div className='flex justify-between w-full pr-4'>
        <div className='flex items-center'>
          <div className='hidden sm:block text-2xl font-bold sm:pl-6 dark:text-white'>{selected}</div>
          <SidebarPopup />
        </div>

        <div className='flex gap-4 items-center'>
          <Dialog>
            <DialogTrigger asChild>
              <Button className='' size="lg" onClick={() => { }}>
                + <span className="hidden sm:block">Add New Task</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-bold text-start w-full flex justify-between">
                  Add New Task
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <div>
                  <Label>Title</Label>
                  <TextField value="" onChange={() => { }} />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea />
                </div>
                <div className="flex flex-col gap-4">
                  <Label>Subtasks</Label>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4 items-center">
                      <TextField value="" placeholder="e.g. Make Coffee" onChange={() => { }} />
                      <CrossIcon />
                    </div>
                    <div className="flex gap-4 items-center">
                      <TextField value="" placeholder="e.g. Make Coffee" onChange={() => { }} />
                      <CrossIcon />
                    </div>
                    <Button variant="secondary" className="w-full mt-2">+ Add New Subtask</Button>
                  </div>
                </div>
                <div>
                  <Label>Status</Label>
                  <Select defaultValue={"Todo"} value={"Todo"}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select..." defaultValue={"Todo"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Todo">Todo</SelectItem>
                        <SelectItem value="Doing">Doing</SelectItem>
                        <SelectItem value="Done">Done</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <VerticalEllipses />
        </div>
      </div>
    </header>
  )
}
