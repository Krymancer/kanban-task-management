import LogoLight from '@/components/logos/LogoLight';
import LogoMobile from '@/components/logos/LogoMobile';
import LogoDark from '@/components/logos/LogoDark';
import VerticalEllipsisIcon from '@/components/icons/VerticalEllipsisIcon';
import Sidebar from '@/components/Sidebar';
import SidebarMobilePopUp from '@/components/SidebarMobilePopUp';
import Button from './Button';
import { useData } from '@/hooks/useData';

function Logo() {
  return(
    <div className='h-full'>
    <LogoLight className='hidden dark:sm:block' />
    <LogoDark className='hidden sm:block dark:hidden' />
    <LogoMobile className='block sm:hidden' />
  </div>
  )
}

export default function Header() {
  const {data, setData} = useData();

  return (
    <header className='flex items-center dark:bg-dark-gray border-b border-b-lines-light dark:border-b-lines-dark'>
      <div className='flex flex-col gap-4 px-4 py-5 sm:px-9 sm:py-8 sm:border-r border-r-lines-light dark:border-r-lines-dark'>
        <Logo />
        <Sidebar />
      </div>

      <div className='flex justify-between w-full pr-4'>
        <div className='flex items-center'>
          <div className='hidden sm:block text-2xl font-bold sm:pl-6 dark:text-white'>{data.boards[0].name}</div>
          <SidebarMobilePopUp />
        </div>

        <div className='flex gap-4 items-center'>
          <Button className='min-w-12 w-12 sm:hidden' onClick={() => { }}>
            +
          </Button>
          <Button className='hidden min-w-40 w-40 sm:flex' large onClick={() => { }}>
            + Add New Task
          </Button>
          <VerticalEllipsisIcon />
        </div>
      </div>
    </header>
  )
}