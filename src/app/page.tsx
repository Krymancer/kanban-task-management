'use client';
import Header from '@/components/Header';
import Columns from '@/components/Columns';
import Sidebar from '@/components/Sidebar';

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
