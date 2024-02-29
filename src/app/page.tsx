import Email from '@/modules/email'
import Logo from '@/modules/logo'
import { SparklesCore } from '@/components/ui/spakrles'
import Screen from '@/modules/screen'

import { Card, CardBody, CardHeader } from '@nextui-org/react'

export default function Home() {
 return (
  <Screen>
   <div className="flex flex-col items-center gap-10 col-span-3 lg:col-span-7 xl:col-span-11">
    <section className="h-screen w-full col-span-11">
     <SparklesCore
      id="tsparticlesfullpage"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={100}
      className="w-full h-full absolute left-0 top-0"
      particleColor="#CFCFCF"
     />
     <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <Logo />
      <div className="text-5xl font-bold flex gap-4">
       <span>Martin</span>
       <div className="flex flex-col group">
        <span className="opacity-100 transition-opacity group-hover:opacity-0 ease-in-out duration-500">
         Kopecký
        </span>
        <span className=" absolute opacity-0 ease-in-out duration-500 group-hover:opacity-80 group-hover:text-lime-400 transition-opacity">
         {'<'}Kopy{'/>'}
        </span>
       </div>
      </div>
     </div>
    </section>
    <div className="grid gap-5 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
     <Card
      isBlurred
      className="border border-white/5 bg-default-100/20 px-4 py-3 rounded-lg row-span-1 transform scale-110 -rotate-3 md:rotate-0 md:scale-100"
      shadow="sm">
      <CardBody className="flex h-full justify-center items-center">
       <p className="max-w-64 text-justify ">
        Full-stack dev trying to be good. The question of every day is what the hell I broke this
        time, so don&apos;t expect anything else. Over the years I&apos;ve become a
        <span className="font-semibold"> Redneck Engineering</span> at it&apos;s finest.
       </p>
      </CardBody>
     </Card>

     <Card
      isBlurred
      className="border border-white/5 bg-default-100/20 px-4 py-3 rounded-lg row-span-2 transform scale-95 rotate-2 md:rotate-0 md:scale-100"
      shadow="sm">
      <CardHeader className="mb-2">
       <span className="text-2xl font-bold underline">About me</span>
      </CardHeader>
      <CardBody>
       <p className="max-w-64 text-justify ">
        I am a student, web developer, programmer and hobby server administrator. <br />
        <br />I graduated in computer science at high school and I am currently studying Applied
        Computer Science at Jan Evangelista Purkyně University.
        <br />
        <br />
        In my spare time, I manage servers and create websites, I also program desktop applications
        and manage computer networks.
       </p>
      </CardBody>
     </Card>
     <Card
      isBlurred
      className="border border-white/5 bg-default-100/20 px-4 py-3 rounded-lg row-span-2 transform scale-105 -rotate-1 md:rotate-0 md:scale-100"
      shadow="sm">
      <CardHeader className="mb-2">
       <span className="text-2xl font-bold underline">My skills</span>
      </CardHeader>
      <CardBody className="flex gap-5">
       <ul className="max-w-64 ml-5">
        <li className="li">NextJS</li>
        <li className="li">Tauri</li>
        <li className="li">HTML5 & CSS3 (SASS)</li>
        <li className="li">TypeScript</li>
        <li className="li">Eslint & Prettier</li>
       </ul>

       <ul className="max-w-64 ml-5">
        <li className="li">GNU/Linux</li>
        <li className="li">Docker</li>
        <li className="li">Proxmox</li>
       </ul>
      </CardBody>
     </Card>
     <Card
      isBlurred
      className="border border-white/5 bg-default-100/20 px-4 py-3 rounded-lg row-span-1"
      shadow="sm">
      <CardHeader className="mb-2">
       <span className="text-2xl font-bold underline">Contacts</span>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
       <div>
        Find me on github <br />
        <a
         href="https://www.github.com/kopytkg/"
         target="_blank"
         rel="noreferrer"
         className="text-lime-300">
         github.com/kopytkg
        </a>
       </div>
       <div>
        or contact me via email
        <br />
        <Email email="contact@thekrew.app">contact@thekrew.app</Email>
       </div>
      </CardBody>
     </Card>
    </div>
   </div>
  </Screen>
 )
}
