'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { ImInsertTemplate } from 'react-icons/im'
import Image from 'next/image'

export default function Experience() {
  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView({ threshold: 0.85 })

  useEffect(() => {
    if (inView) {
      setActiveSection('Experience')
    }
  }, [inView, setActiveSection])

  return (
    <section ref={ref} id="experience" className="mb-10 max-w-[53rem] text-center leading-8 scroll-mt-28 sm:mb-20">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.rem',
              }}
            >
              <h3 className="font-semibold capitalize">{exp.title}</h3>
              <p className="font-normal !mt-0">{exp.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">{exp.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
