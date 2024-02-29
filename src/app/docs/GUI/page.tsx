'use client'
import Chapter from '@/components/docs/chapter'
import Screen from '@/modules/screen'
import Sidebar from '@/components/docs/sidebar'
import { PathContext } from '@/app/Path.context'
import React, { useLayoutEffect } from 'react'

export default function GUI_Guide() {
 let { setPath } = React.useContext(PathContext)
 let TMPData = []
 for (let index = 0; index < 1000; index++) {
  TMPData.push('asdasdas' + index)
 }
 useLayoutEffect(() => {
  setPath('Next.js')
 }, [setPath])
 return (
  <div className="overflow-y-hidden h-[98vh] py-16">
   <div className="flex flex-col justify-center items-center gap-2 w-screen bg-white">
    <div className="text-4xl font-bold"> NextJS 14.0.0 </div>
   </div>

   <Screen>
    <Sidebar>
     <Chapter> aa </Chapter>
    </Sidebar>
   </Screen>
  </div>
 )
}
