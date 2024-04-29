import type { Metadata } from 'next'

import { ThemeProvider } from 'next-themes'

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
