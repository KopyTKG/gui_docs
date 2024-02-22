import React from 'react'

export default function Sidebar({ children }: Readonly<{ children: React.ReactNode }>) {
 return <div className=" col-start-3 col-span-2">{children}</div>
}
