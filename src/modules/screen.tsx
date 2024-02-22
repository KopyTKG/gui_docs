import React from 'react'

export default function Screen({ children }: Readonly<{ children: React.ReactNode }>) {
 return <div className="grid grid-cols-11 gap-3 min-h-svh">{children}</div>
}
