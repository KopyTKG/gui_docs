import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Providers } from './providers'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import { GeistSans } from 'geist/font/sans'
import Screen from '@/modules/screen'

export const metadata: Metadata = {
 title: 'Create Next App',
 description: 'Generated by create next app',
}

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <html lang="en">
   <body className={GeistSans.className}>
    <Providers>
     <main className="min-h-screen h-max dark text-foreground bg-gradient-to-r md:bg-gradient-to-tr from-red-950/25 from-10% via-black to-90%  to-lime-950/25 ">
      <Screen>{children}</Screen>
     </main>
    </Providers>
    <footer className="fixed bottom-0 w-screen bg-transparent flex justify-center">
     <span>build by</span> &nbsp;
     <a
      href="https://github.com/KopyTKG"
      target="_blank"
      rel="noreferrer"
      className=" text-lime-300 font-bold hover:text-lime-100 ease-in-out duration-250 hover:font-extrabold">
      KopyTKG
     </a>
    </footer>
    <Analytics />
    <SpeedInsights />
   </body>
  </html>
 )
}
