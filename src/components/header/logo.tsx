import { LogoLight, LogoDark, LogoMobile } from "@/components/logos";

export function Logo() {
  return (
    <div className=' sm:w-[300px] sm:min-w-[300px] flex flex-col gap-4 px-4 py-5 sm:px-9 sm:py-8 sm:border-r border-r-lines-light dark:border-r-lines-dark'>
      <LogoLight className='hidden dark:sm:block' />
      <LogoDark className='hidden sm:block dark:hidden' />
      <LogoMobile className='block sm:hidden' />
    </div>
  )
}