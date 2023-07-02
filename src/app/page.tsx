import { About, Hero, Services } from '@/sections'


export default function Home() {
  return (
    <main className="flex min-h-screen overflow-hidden flex-col items-center justify-between  ">
       <Hero />
       <About />
       <Services />
    </main>
  )
}
