import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Providers} from "@/components/Providers";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JNPL',
  description: 'JNPL - Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
