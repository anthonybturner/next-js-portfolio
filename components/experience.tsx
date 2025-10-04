'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'

export default function Experience() {
  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView({ threshold: 0.85 })

  useEffect(() => {
    if (inView) {
      setActiveSection('Experience')
    }
  }, [inView, setActiveSection])
  return (
    <section ref={ref} id="experience" className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28 sm:mb-20">
      <SectionHeading>Experience</SectionHeading>
      <p className="mb-3">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      <p className="mb-3">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      <p className="mb-3">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      <p className="mb-3">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      <p className="mb-3">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      <p className="mb-3">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
    </section>
  )
}
