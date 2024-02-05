'use client';

import Button from '@/components/Button';
import ThemeToggle from '@/components/ThemeToggle';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import LogoLight from '@/components/logos/LogoLight';
import LogoMobile from '@/components/logos/LogoMobile';
import LogoDark from '@/components/logos/LogoDark';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import BoardIcon from '@/components/icons/BoardIcon';
import VerticalEllipsisIcon from '@/components/icons/VerticalEllipsisIcon';

function SidebarBoardItem({ active }: { active?: boolean }) {
  return (
    <div className='w-full flex justify-start'>
      <div className={`${active ? 'bg-main-purple text-white' : 'text-medium-gray'} rounded-r-[100px] flex items-center gap-3 px-6 py-4 font-bold`} >
        <BoardIcon />
        Platform Launch
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className='flex items-center dark:bg-dark-gray border-b border-b-lines-light dark:border-b-lines-dark relative'>
      <div className='flex flex-col gap-4 px-4 py-5 sm:px-9 sm:py-8 border-r border-r-lines-light dark:border-r-lines-dark'>
        <div className='h-full'>
          <LogoLight className='hidden dark:sm:block' />
          <LogoDark className='hidden sm:block dark:hidden' />
          <LogoMobile className='block sm:hidden' />
        </div>

        <div className='absolute left-0 top-full border-t border-t-white border-r border-r-lines-light bg-white w-[226px]'>
          sidebar
        </div>
      </div>

      <div className='flex justify-between w-full pr-4'>
        <div className=''>
          <div className='hidden sm:block text-2xl font-bold'>Platform Launch</div>

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
        </div>

        <div className='flex gap-4 items-center border border-green-300'>
          <Button className='min-w-12 w-12' onClick={() => { }}>
            +
          </Button>
          <VerticalEllipsisIcon />
        </div>
      </div>
    </header>
  )
}

function Columns() {
  return (
    <section className='flex flex-col items-center justify-center gap-6 px-4'>
      <p className='text-center text-medium-gray font-bold text-lg'>This board is empty. Create a new column to get started.</p>
      <Button className='w-[174px]' onClick={() => { }}>+ Add New Column</Button>
    </section>
  )
}

export default function Home() {

  return (
    <main className='h-full min-h-screen flex flex-col'>
      <Header />
      <div className='bg-light-gray flex flex-col flex-auto items-center justify-center dark:bg-very-dark-gray'>
        <Columns />
      </div>
    </main>
  )
}
