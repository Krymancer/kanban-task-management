"use client";

import { Header } from '@/components/header';
import { Columns } from '@/components/columns';
import { Sidebar } from '@/components/sidebar/desktop';

export default function Home() {
  return (
    <main className='h-screen  flex flex-col overflow-hidden'>
      <Header />
      <div className='bg-light-gray flex flex-row flex-auto dark:bg-very-dark-gray overflow-scroll w-screen'>
        <Sidebar />
        <Columns />
      </div>
    </main>
  )
}
