'use client';

import { Header } from '@/components/header';
import { Columns } from '@/components/columns';
import { Sidebar } from '@/components/sidebar/desktop';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogHeader, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

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
