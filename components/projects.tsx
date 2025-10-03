import React from 'react'
import SectionHeading from './section-heading'
import Project from './project'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-20">
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
