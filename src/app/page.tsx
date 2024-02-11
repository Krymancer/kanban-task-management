'use client';

import Button from '@/components/Button';
import Header from '@/components/Header';

import data from '@/utils/data.json';

function Columns() {
  return (
    <section className='flex flex-col items-center justify-center gap-6 px-4'>
      <p className='text-center text-medium-gray font-bold text-lg'>This board is empty. Create a new column to get started.</p>
      <Button className='w-[174px]' onClick={() => { }}>+ Add New Column</Button>
    </section>
  )
}

export default function Home() {

  console.log(data);

  return (
    <main className='h-full min-h-screen flex flex-col overflow-hidden'>
      <Header />
      <div className='bg-light-gray flex flex-col flex-auto items-center justify-center dark:bg-very-dark-gray'>
        <Columns />
      </div>
    </main>
  )
}
