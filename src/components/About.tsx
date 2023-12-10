import React from 'react'

const About = () => {
  return (
    <section id="about" className='flex flex-col gap-10 items-center z-50 px-4 sm:px-24'>
      <h1 className='text-3xl'>About Me</h1>
      <div className='w-full md:w-4/5 lg:w-2/3 px-0 text-sm sm:text-xs md:text-base lg:text-lg text-center leading-relaxed font-extralight'>
        After I finish my degree in Computer Engineering in the University of San Carlos, I plan to continue working in computer-related industries. I only started delving into the world of code when I entered college, but all the concepts, principles and knowledge I&apos;ve accumulated over the years in terms of the design, planning, and development of software and hardware applications has really pushed me to learn more and apply these learnt skills in useful scenarios. 
        <br></br>
        <br></br>
        My roots in programming started with C, and I believe starting my coding journey with this language gave me a strong foundation in programming concepts and data structures that are usually abstracted in higher-level languages. Learning Java also introduced me to a different programming style from procedural languages, which was Object-Oriented Programming; I learned concepts such as abstraction, encapsulation, and inheritance, as well as classes and objects which became really useful when learning web development.
        <br></br>
        <br></br>
        I didn&apos;t really get into website building until my third year of programming since it was just an optional track in the course. However, within just a year of starting, I was already able to build websites with frameworks such as React and NextJS. In fact, it was making websites that really gave me a deeper understanding of JavaScript. Web development was the biggest leap in my tech journey as I was able to learn technologies outside of programming, including: databases with PostgreSQL, ORMs, HTTPS APIs, the RESTful framework, authentication, SEOs and many more. Taking in all these knowledge in such a short amount of time was initially difficult, but there was also a sense of satisfaction that came with it. Of course, I could never have done all of these without my fellow team of developers who shares the same passion for web development that I do. Collaborating with them gave me experience on how programming in a team was like, as well as teaching me tools like Figma, Git, Trello, and other project management concepts like Scrum.
        <br></br>
        <br></br>
        Our college thesis was a great endeavour that further honed my researching capabilities. Working on our thesis also gave me a glimpse on machine learning, artificial intelligence, and data analysis. It gave me a stronger foundation on Python and the many libraries that come with it: there was Pandas, NumPy, MatPlot for data analysis; and TensorFlow, Keras and SciKit Learn for artificial intelligence. Although we&apos;ve already finished our thesis, my interest in articial intelligence has only intensified. Beyond this, I can only hope that my passion for technology does not burn out and that I can further explore deeper into the world of code.
        <br></br>
        <br></br>   
        <p className="flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">printf(&quot;Hello World!&quot;)</code>
        </p>
      </div>
    </section>
  )
}

export default About