import Image from 'next/image'

export default function Logo() {
 return (
  <>
   <div className="flex gap-4 items-center flex-col md:flex-row">
    <div className="flex gap-4 items-center">
     <Image src="/logo.png" width={140} height={140} alt="Logo Icon" />
     <div className="flex flex-col">
      <span className="text-lg lg:text-3xl font-bold text-lime-400">The</span>
      <span className="text-3xl lg:text-5xl font-bold text-lime-400">Krew</span>
     </div>
    </div>
   </div>
  </>
 )
}
