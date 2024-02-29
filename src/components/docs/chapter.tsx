import React from 'react'
export default function Chapter({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return <div className="text-xl font-bold w-full border-b-1 border-gray-200/35">{children}</div>
}
