import React from 'react'
import Image from 'next/image'

const HeroGradient = () => {
  return (
    <>
      <div className="bg-[#df6161] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#2e1616]">.</div>
      <div className="bg-[#8074d4] absolute top-[-8rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#24223b]">.</div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-1 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-purple-500 after:via-purple-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-900 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-red-700 after:dark:opacity-10 before:lg:h-[360px] -z-1 ">
        <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/jnpl-logo.svg"
            alt="Logo"
            width={300}
            height={1}
            priority
        />
      </div>
    </>
  )
}

export default HeroGradient