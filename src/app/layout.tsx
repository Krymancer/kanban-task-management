import type { Metadata } from 'next'

import { ThemeProvider } from 'next-themes'

import BoardsContextProvider from "@/hooks/useBoards";
import SelectedBoardContextProvider from '@/hooks/useSelectedBoard';
import SidebarStatusContextProvider from '@/hooks/useSidebarStatus';

import './globals.css'

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
    <html lang="en" suppressHydrationWarning>
      <body className='dark:bg-dark-gray'>
        <ThemeProvider storageKey='theme' defaultTheme='system' enableSystem attribute='class' >
          <BoardsContextProvider>
            <SelectedBoardContextProvider>
              <SidebarStatusContextProvider>
                {children}
              </SidebarStatusContextProvider>
            </SelectedBoardContextProvider>
          </BoardsContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
