'use client';

import LogoDark from '@/assets/logo-dark.svg';
import LogoLight from '@/assets/logo-light.svg';
import LogoMobile from '@/assets/logo-mobile.svg';
import ChevronDown from '@/assets/icon-chevron-down.svg'
import ChevronUp from '@/assets/icon-chevron-up.svg'
import VerticalEllipsis from '@/assets/icon-vertical-ellipsis.svg';
import HiideSidebarIcon from '@/assets/icon-hide-sidebar.svg';
import CrossIcon from '@/assets/icon-cross.svg';

import Button from '@/components/Button';
import ThemeToggle from '@/components/ThemeToggle';

import Image from 'next/image';

function Header() {
  return (
    <header className='flex justify-between px-4 py-5 items-center'>
      <div className='flex gap-4'>
        <div>
          <Image src={LogoLight} width={152.53} height={25.22} alt='' className='hidden dark:sm:block' />
          <Image src={LogoDark} width={152.53} height={25.22} alt='' className='hidden sm:block dark:hidden' />
          <Image src={LogoMobile} width={24} height={25} alt='' className='block sm:hidden' />
        </div>
        <div className='text-lg font-bold flex gap-2 items-center'>
          Platform Launch
          <Image src={ChevronDown}  width={8} height={4}  alt=''   />
        </div>
      </div>

      <div className='flex gap-4 items-center'>
        <Button className='min-w-12 w-12'   onClick={() => {}}>
          +
        </Button>
        <Image src={VerticalEllipsis} width={3.692} height={16} alt='' />
      </div>

      <div className='hidden'>
        
        <ThemeToggle />
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
      <div className='bg-light-gray flex flex-col flex-auto items-center justify-center'>
        <Columns />
      </div>
    </main>
  )
}
