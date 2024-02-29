import React from 'react'
export default function Content({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <main className="bg-green-500/15 xl:col-start-4 xl:col-span-7 h-[90vh] overflow-y-scroll scrollbar-hide ">
   <div className="max-w-2xl mx-auto antialiased pt-4 relative">{children}</div>
  </main>
 )
}
