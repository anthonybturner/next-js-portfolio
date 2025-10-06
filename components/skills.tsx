'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { animate, motion } from 'framer-motion'

const fadeInAnimVariants = {
  initial: () => ({
    opactiy: 0,
    y: 100,
  }),

  animate: (index: number) => {
    return {
      opactiy: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }
  },
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')

  return (
    <section ref={ref} id="skills" className="mb-20 max-w-[53rem] text-center leading-8 scroll-mt-28 sm:mb-40">
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 hover:bg-amber-600"
            key={index}
            variants={fadeInAnimVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
