'use client'
import { useEffect } from 'react'

export default function IDroute() {
 useEffect(() => {
  fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/md', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
   },
   body: JSON.stringify({
    file: 'guide.md',
   }),
  })
   .then((res: { json: () => any }) => res.json())
   .then((data: any) => console.log(data))
 }, [])
 return <div></div>
}
