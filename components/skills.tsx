'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import { skillsData } from '@/lib/data'

export default function Skills() {
  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView({ threshold: 1 })

  useEffect(() => {
    if (inView) {
      setActiveSection('Skills')
    }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id="skills" className="mb-10 max-w-[53rem] text-center leading-8 scroll-mt-28 sm:mb-20">
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li className="bg-white border border-black/[0.1] rounded-xl px-5 py-3" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
