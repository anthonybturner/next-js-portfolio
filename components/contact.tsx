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
    <section ref={ref} id="contact" className="mb-10 max-w-[45rem] text-center leading-8 scroll-mt-28 sm:mb-20">
      <SectionHeading>Contact Me</SectionHeading>
      <p className="mb-3 text-gray-700">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:anthonybturner@icloud.com">
          anthonybturner@icloud.com
        </a>{' '}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col p-1">
        <input
          className="h-14 rounded-lg borderBlack  border-1 border-gray-200 p-2 bg-gray-50"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack border-1 border-gray-200 p-2 bg-gray-50"
          placeholder="Your Message"
        />
        <button
          className="relative flex gap-2 borderBlack border-1 border-gray-200 p-2 w-full self-start sm:w-fit "
          type="submit"
        >
          Submit <FaPaperPlane className="absolute top-0 right-0" />
        </button>
      </form>
    </section>
  )
}
