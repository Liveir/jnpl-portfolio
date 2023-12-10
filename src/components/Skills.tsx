"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from 'next/image'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  // Use section in view hook
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 flex flex-col gap-10 items-center">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-1 after:h-[180px] after:w-[120px] after:translate-x-1/3 after:bg-gradient-conic after:from-purple-300 after:via-purple-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-600 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-purple-700 after:dark:opacity-10 before:lg:h-[360px] -z-1 ">
        <h1 className='text-3xl relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'>Skills</h1>
      </div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border-black rounded-xl px-4 py-3 flex align-middle items-center w-fit dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="flex gap-2 align-middle items-center">
              <Image
                    className=""
                    src={skill.image}
                    alt="Profile Picture"
                    width={20}
                    height={1}
                    priority
              />
              {skill.name}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
