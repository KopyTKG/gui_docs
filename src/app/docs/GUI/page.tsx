'use client'
import Chapter from '@/components/docs/chapter'
import Screen from '@/modules/screen'
import Sidebar from '@/components/docs/sidebar'
import { PathContext } from '@/app/Path.context'
import React, { useEffect, useLayoutEffect } from 'react'

export default function GUI_Guide({ data }: any) {
 let { setPath } = React.useContext(PathContext)

 useLayoutEffect(() => {
  setPath('Next.js')
 }, [setPath])

 useEffect(() => {
  console.log(data)
 }, [data])
 return (
  <div className="overflow-y-hidden h-[98vh] py-16">
   <Screen>
    <Sidebar>
     <Chapter> aa </Chapter>
    </Sidebar>
   </Screen>
  </div>
 )
}
