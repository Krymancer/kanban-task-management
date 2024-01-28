'use client';

import LogoDark from '@/assets/logo-dark.svg';
import LogoLight from '@/assets/logo-light.svg';
import LogoMobile from '@/assets/logo-mobile.svg';

import ThemeToggle from '@/components/ThemeToggle';

import Image from 'next/image';

export default function Home() {

  return (
    <main className=''>
      <header>
        <div>
          <Image src={LogoLight} width={152.53} height={25.22} alt='' className='hidden dark:sm:block' />
          <Image src={LogoDark} width={152.53} height={25.22} alt='' className='hidden sm:block dark:hidden' />
          <Image src={LogoMobile} width={24} height={25} alt='' className='block sm:hidden'/>
        </div>
      </header>
      <section></section>
      <ThemeToggle />
    </main>
  )
}
