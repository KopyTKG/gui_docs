import React from 'react'

export default function Sidebar({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <div className="absolute -left-[25vw] min-w-[25vw] min-h-[85npm svh] lg:min-w-[15vw] md:left-0  md:fixed bg-slate-500 flex flex-col px-5">
   {children}
  </div>
 )
}
