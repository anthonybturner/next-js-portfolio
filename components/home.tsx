'use client'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import './home.css'
0
export default function Home() {
  const { ref } = useSectionInView('Home')
  return (
    <section ref={ref} id="home" className="mb-10 max-w-[50rem] text-center sm:mb-20 scroll-mt-28">
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E03AQFDLV4eL39Hqw/profile-displayphoto-shrink_800_800/B4EZNuZHioHEAg-/0/1732723898932?e=1762387200&v=beta&t=_kpM4TUR_IF_r1qoJ4w8hEHRwTdHILJ2Yb94FljKNow"
              alt="anthony portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏾
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Anthony.</span> I&apos;m a{' '}
        <span className="font-bold">seasoned full-stack developer</span> with{' '}
        <span className="font-bold">10+ years</span> building scalable web applications. I specialize in{' '}
        <span className="font-bold">React/Next.js, .NET Core, TypeScript, and SQL Server</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowRight className="opactity-70  group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110  hover:bg-gray-950 hover:text-white active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.docx"
          download
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition "></HiDownload>
        </a>

        <a
          href="https://www.linkedin.com/in/anthony-turner-0207b76b/"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin></BsLinkedin>
        </a>
        <a
          href="https://github.com/anthonybturner"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare></FaGithubSquare>
        </a>
      </motion.div>
    </section>
  )
}
