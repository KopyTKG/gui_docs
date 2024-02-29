'use client'
import { Link, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import React from 'react'
import { PathContext } from '@/app/Path.context'

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 const { Path } = React.useContext(PathContext)
 return (
  <>
   <Navbar shouldHideOnScroll className="fixed">
    <NavbarContent className="hidden sm:flex mr-16" justify="center">
     <NavbarItem>
      <p className="font-bold text-2xl">{Path}</p>
     </NavbarItem>
    </NavbarContent>
    <NavbarContent className="hidden sm:flex gap-4" justify="end">
     <NavbarItem>
      <Link href="/" color="foreground">
       Home
      </Link>
     </NavbarItem>
     <NavbarItem>
      <Link href="/docs" color="foreground">
       Documentation
      </Link>
     </NavbarItem>
    </NavbarContent>
   </Navbar>
   {children}
  </>
 )
}
