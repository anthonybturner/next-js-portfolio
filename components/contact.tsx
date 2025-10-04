'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import { FaPaperPlane } from 'react-icons/fa'

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
      <p className="mb-3 text-gray-700">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:anthonybturner@icloud.com">
          anthonybturner@icloud.com
        </a>{' '}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col">
        <input className="h-14 rounded-lg borderBlack" type="email" placeholder="Your email" />
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4" />
        <button type="submit">
          Submit <FaPaperPlane />
        </button>
      </form>
    </section>
  )
}
