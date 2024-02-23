import type { Metadata } from 'next'
import './globals.css'
import BoardsContextProvider from "@/hooks/useBoards";
import SelectedBoardContextProvider from '@/hooks/useSelectedBoard';
import SidebarStatusContextProvider from '@/hooks/useSidebarStatus';

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
        <BoardsContextProvider>
          <SelectedBoardContextProvider>
            <SidebarStatusContextProvider>
              {children}
            </SidebarStatusContextProvider>
          </SelectedBoardContextProvider>
        </BoardsContextProvider>
        </body>
    </html>
  )
}
