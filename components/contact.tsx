'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView({ threshold: 1 })

  useEffect(() => {
    if (inView) {
      setActiveSection('Contact')
    }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id="contact" className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28 sm:mb-20">
      <SectionHeading>Contact Me</SectionHeading>
      <p className="mb-3"></p>
    </section>
  )
}
