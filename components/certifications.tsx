'use client'
import { certificationsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import ImageLightbox from './image-lightbox'
import SectionHeading from './section-heading'

const fadeInAnimVariants = {
  initial: () => ({
    opactiy: 0,
    y: 100,
  }),

  animate: (index: number) => {
    return {
      opactiy: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }
  },
}

export default function Certification() {
  const { ref } = useSectionInView('Certifications')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [selectedImageUrl, setSelectedImageUrl] = useState('')

  const openLightbox = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl)
    setIsLightboxOpen(true)
  }

  return (
    <>
      <section ref={ref} id="certifications" className="mb-20 max-w-[53rem] scroll-mt-28 sm:mb-40">
        <SectionHeading>My certifications</SectionHeading>
        <ul className="flex flex-col gap-8">
          {certificationsData.map((certification, index) => (
            <motion.li
              className="bg-white border border-black/[0.1] rounded-lg p-6 hover:bg-gray-50 transition"
              key={index}
              variants={fadeInAnimVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {certification.thumbnailUrl && (
                  <button
                    onClick={() => openLightbox(certification.imageUrl)}
                    className="sm:flex-shrink-0 sm:w-40 sm:h-40 bg-none border-none p-0 cursor-pointer hover:opacity-90 transition"
                  >
                    <Image
                      src={certification.thumbnailUrl}
                      alt={certification.title}
                      width={160}
                      height={160}
                      className="rounded-lg object-cover w-full h-40 sm:w-40 sm:h-40"
                    />
                  </button>
                )}
                <div className="flex-1">
                  <a
                    href={certification.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-amber-600 transition"
                  >
                    {certification.title}
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {certification.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {certification.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {certification.pdfUrl && (
                    <div className="mt-4">
                      <a
                        href={certification.pdfUrl}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
                      >
                        <FaDownload className="text-sm" />
                        Download Certificate
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
      <ImageLightbox
        isOpen={isLightboxOpen}
        imageUrl={selectedImageUrl}
        title="Certification"
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  )
}
