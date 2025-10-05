'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'
import Image from 'next/image'

type ProjectProps = (typeof projectsData)[number]

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group even:pl-2 mb-3 sm:mb-8 last:m-0"
    >
      <section
        className="
        relative overflow-hidden
        flex flex-col
        max-w-[42rem] 
        mb-3 last:mb-0
        sm:mb-8 sm:h-auto
        bg-gray-100 border border-black/5 rounded-lg
        sm:pr-8
        hover:bg-gray-200 transition
      "
      >
        <div
          className="
          relative flex flex-col
          w-full h-full
          pt-4 pb-7 px-5
      
          sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
          sm:group-even:ml-[18rem] sm:group-even:even:pl-8
        "
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt- gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="
                  px-3 py-1
                  text-[0.5rem] uppercase tracking-wider
                  bg-black/[0.7] text-white rounded-full
                  hover:bg-amber-600
                "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="
              relative sm:block rounded-t-lg shadow-2xl
              sm:absolute w-[28.25rem] sm:top-8 sm:-right-40
              group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
              group-even:right-[initial] sm:group-even:-left-40
              group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:hover:rotate-2
              transition-all duration-300
            "
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
        ></Image>
      </section>
    </motion.div>
  )
}
