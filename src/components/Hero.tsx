import React from 'react'
import HeaderNavbar from '@/components/HeaderNavbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className='flex flex-col gap-10 items-center z-50 p-4 md:p-24 my-10'>
    <Image
          className="relative rounded-full border-5 border-white"
          src="/prof-pic.png"
          alt="Profile Picture"
          width={80}
          height={80}
          priority
    />
    <div className='w-full md:w-4/5 lg:w-2/3 px-0 text-sm sm:text-lg md:text-xl lg:text-3xl text-center leading-normal'>
      Hey there, I&apos;m <span className='font-bold'>Johnfil Initan.</span> I&apos;m a <span className='font-bold'>computer engineering student</span> dedicated to making impactful <span className=" text-transparent bg-clip-text bg-gradient-to-bl from-white via-red-500 to-gray-300">hardware and software solutions</span>. I enjoy making all sorts of applications, and I am greatly interested in the future of <span className=" text-transparent bg-clip-text bg-gradient-to-bl from-white via-violet-700 to-gray-300">artificial general intelligence</span>.
    </div>
    <HeaderNavbar />
  </section>
  )
}

export default Hero