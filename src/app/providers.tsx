'use client'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { PathProvider } from './Path.context'

export function Providers({ children }: { children: React.ReactNode }) {
 return (
  <NextUIProvider>
   <PathProvider>{children}</PathProvider>
  </NextUIProvider>
 )
}
