import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/app/lib/utils'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NebulaIO',
  description: 'NebulaIO allows content creators to manage multiple TikTok accounts from the same place. Simply load your accounts, upload your videos and hit post!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <link rel="icon" href="/nebula-IO-logo-2.ico" sizes="any" />
      <body className={cn(
        'min-h-screen font-sans antialiased grainy scrollbar-hide',
        inter.className
      )}>
        <NavBar />
        {children}
        
      </body>
    </html>
  )
}
