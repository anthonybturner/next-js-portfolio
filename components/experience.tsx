'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import { experiencesData } from '@/lib/data'

export default function Experience() {
  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView({ threshold: 0.85 })

  useEffect(() => {
    if (inView) {
      setActiveSection('Experience')
    }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id="experience" className="mb-28 max-w-[53rem] text-center leading-8 scroll-mt-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <ul className="flex flex-wrap gap-2 text-lg text-gray-800">
        {experiencesData.map((exp, index) => (
          <li className="bg-white border border-black/[0.1] rounded-xl px-5 py-3" key={index}>
            <h2>{exp.title}</h2>
            <p>{exp.description}</p>
            {exp.location}
            {exp.date}
          </li>
        ))}
      </ul>
    </section>
  )
}
