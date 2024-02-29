'use client'
import React from 'react'

export const PathContext = React.createContext({
 Path: '',
 // eslint-disable-next-line no-unused-vars
 setPath: (path: string) => {},
})
export const PathProvider = ({ children }: { children: React.ReactNode }) => {
 const [Path, setPath] = React.useState('')

 return <PathContext.Provider value={{ Path, setPath }}>{children}</PathContext.Provider>
}
