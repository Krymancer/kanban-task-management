'use client';
import Header from '@/components/Header';
import Columns from '@/components/Columns';

export default function Home() {
  return (
    <main className='h-screen  flex flex-col overflow-hidden'>
      <Header />
      <div className='bg-light-gray flex flex-col flex-auto items-center justify-center dark:bg-very-dark-gray'>
        <Columns />
      </div>
    </main>
  )
}
