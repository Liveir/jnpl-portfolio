import React from 'react'

const About = () => {
  return (
    <section id="about" className='flex flex-col gap-10 items-center z-50 px-4 sm:px-10'>
      <h1 className='text-3xl'>About Me</h1>
      <div className='w-full md:w-4/5 xl:w-2/5 px-0 text-sm sm:text-xs md:text-base lg:text-lg text-center font-extralight'>

        After I get my Computer Engineering degree from the University of San Carlos, I want to keep working with computers. I only started learning to code in college, but I&apos;ve picked up a lot about designing and building software and hardware. I began with C, which gave me a strong base for understanding how to code and work with data. Learning Java taught me a different way to program called Object-Oriented Programming and helped me with web development.
        <br></br>
        <br></br>
        In my third year, I started making websites using frameworks like React and NextJS. Within a year, I could build websites and understand JavaScript better. Web development was a big step for me because I learned about things like databases, queries, APIs, and how to make websites secure. I worked with a team of developers, and we used tools like Figma and Git, plus a method called Scrum for managing projects. Our college thesis also helped me learn more about researching and introduced me to machine learning and artificial intelligence using Python and tools like Pandas, NumPy, and TensorFlow. Even though our thesis is done, my interest in artificial intelligence is still strong, and I&apos;m excited to keep exploring the world of coding.
        <br></br>
        <br></br>
        <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">printf(&quot;Hello World!&quot;);</code>
        </p>
      </div>
    </section>
  )
}

export default About