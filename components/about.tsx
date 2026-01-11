'use client'

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-10 max-w-[45rem] leading-8 scroll-mt-28 sm:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After earning my degrees in <span className="font-medium">Computer Science</span> from Ulster County Community
        College and SUNY New Paltz, I launched my career as a <span className="font-medium">full-stack developer</span>.
        Over the past <span className="font-medium">10+ years</span>, I&apos;ve built scalable web applications,
        contributed to development projects, and solved complex technical challenges.{' '}
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{' '}
        <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core
        stack is{' '}
        <span className="font-medium">
          .NET Core, React, Next.js, TypeScript, Angular, Node.js, SQL Server, and PostgreSQL
        </span>
        . I&apos;m always exploring new technologies and currently seeking a{' '}
        <span className="font-medium">full-time position</span> where I can contribute to meaningful projects.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy gaming, movies, and dancing. I&apos;m also
        passionate about <span className="font-medium">continuous learning</span> and currently exploring piano as a
        creative outlet.
      </p>
    </motion.section>
  )
}
