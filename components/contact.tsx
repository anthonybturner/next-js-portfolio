'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmil'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const { ref } = useSectionInView('Contact', 1)

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-10 max-w-[45rem] text-center leading-8 scroll-mt-28 sm:mb-20"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="mb-3 text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:anthonybturner@icloud.com">
          anthonybturner@icloud.com
        </a>{' '}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col p-1"
        action={async (formData) => {
          await sendEmail(formData)
        }}
      >
        <input
          className="
            h-14 rounded-lg
            p-2
            bg-gray-50 border border-gray-200
            borderBlack
          "
          name="senderEmail"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="
            h-52 my-3 rounded-lg
            p-2
            bg-gray-50 border border-gray-200
            borderBlack
          "
          name="message"
          placeholder="Your Message"
        />
        <button
          className="group flex items-center justify-center gap-2
            h-[3rem] w-[8rem]
            bg-gray-900
            border border-gray-900 text-white rounded-full outline-none transition-all
            borderBlack hover:bg-gray-950 active:scale-105"
          type="submit"
        >
          Submit <FaPaperPlane className="group:hover:translate-x-1 text-xs opactiy-70 transition-all" />{' '}
        </button>
      </form>
    </motion.section>
  )
}
