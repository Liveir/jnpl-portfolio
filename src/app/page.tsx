import HeroGradient from '@/components/HeroGradient'
import Hero from '@/components/Hero'
import Links from '@/components/Links'
import Space from '@/components/Space'
import About from '@/components/About'
import Skills from '../components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='flex min-h-screen flex-col items-center justify-between py-10'>
        <HeroGradient />
        <Hero />
        <Links />
      </div>
      <Space height="100"/>
      <div className='flex flex-col items-center justify-between py-10'>
        <About />
      </div>
      <Space height="100"/>
      <div className='flex flex-col items-center justify-between py-10'>
        <Skills />
      </div>
      <div className='flex flex-col items-center justify-between'>
        <Footer />
      </div>
    </main>
  )
}