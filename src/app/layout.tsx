import type { Metadata } from 'next'
import './globals.css'
import DataContextProvider, { DataContext } from '@/hooks/useData'

export const metadata: Metadata = {
  title: 'Kanban task management',
  description: 'Kanban task management web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-dark-gray'>
        <DataContextProvider>
          {children}
        </DataContextProvider>
        </body>
    </html>
  )
}
