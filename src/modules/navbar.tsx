import { Navbar, NavbarBrand } from '@nextui-org/react'
import Image from 'next/image'

export default function Nav() {
 return (
  <Navbar isBlurred isBordered className=" px-4 xl:px-56 py-2 fixed top-0">
   <NavbarBrand>
    <a href="/" className="flex gap-2 items-center">
     <Image src="/logo.png" width={50} height={50} alt="Logo Icon" />
     <div className="flex flex-col">
      <span className="text-lime-400 font-bold text-xs">The</span>
      <span className="text-lime-400 font-bold text-xl">Krew</span>
     </div>
    </a>
   </NavbarBrand>
  </Navbar>
 )
}
