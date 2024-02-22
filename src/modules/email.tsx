'use client'
import React from 'react'
export default function Email(props: {
 email: string
 children:
  | string
  | number
  | boolean
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | Iterable<React.ReactNode>
  | React.ReactPortal
  | React.PromiseLikeOfReactNode
  | null
  | undefined
}) {
 return (
  <span
   className="text-lime-300 hover:cursor-pointer"
   onClick={() => {
    try {
     navigator.clipboard.writeText(props.email)
    } catch (e) {
     console.error(e)
    }
   }}>
   {props.children}
  </span>
 )
}
