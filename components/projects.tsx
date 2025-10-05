'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import Project from './project'
import { projectsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Projects() {
  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      setActiveSection('Projects')
    }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id="projects" className="mb-10 max-w-[45rem] text-center leading-8 scroll-mt-28 sm:mb-20">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {/* prettier-ignore */}
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
