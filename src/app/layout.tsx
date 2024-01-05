import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar/Navbar'
import UseCilentOnly from '@/Components/ClientOnly'
import ClientOnly from '@/Components/ClientOnly'

const font = Nunito({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'AirBnb',
  description: 'AirBnb clone'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}