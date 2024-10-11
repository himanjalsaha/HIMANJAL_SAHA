"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'
import { ReactLenis } from '@studio-freight/react-lenis'

interface Project {
  id: string
  title: string
  year: number
  tag: string
  mainImage: string
  behanceLink: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'ReadMe AI',
    year: 2024,
    tag: 'AI Documentation',
    mainImage: 'https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/1728215129130.mp4?alt=media&token=246da1d2-2a4e-4338-8fcc-f14872b995dc',
    behanceLink: 'https://readmeai-seven.vercel.app/',
  },
  {
    id: '2',
    title: 'Connect AI',
    year: 2024,
    tag: 'AI Social Network',
    mainImage: 'https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/1725727430344.mp4?alt=media&token=e6d3c6a5-dd3f-42e1-91c7-f1de5c2f84eb',
    behanceLink: 'https://connect-ai-phi.vercel.app/',
  },
  {
    id: '3',
    title: 'Rejoice',
    year: 2024,
    tag: 'UI/UX Design',
    mainImage: 'https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/1723841228802.mp4?alt=media&token=960fbe61-e54a-48ed-a607-97dbbe9fcf8f',
    behanceLink: 'https://rejouice-sigma.vercel.app/',
  },
  {
    id: '4',
    title: 'Portfolio & Scroll Animation',
    year: 2024,
    tag: 'UI/UX & Animation',
    mainImage: 'https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/1724531326421.mp4?alt=media&token=3497d355-d18b-4973-af4d-378f67eee5a7',
    behanceLink: 'https://himanjal.vercel.app/',
  },
]

const mobileProjects: Project[] = [
  {
    id: '1',
    title: 'App One',
    year: 2024,
    tag: 'Mobile App Design',
    mainImage: 'https://firebasestorage.googleapis.com/v0/b/ui-forge.appspot.com/o/1711745543677.mp4?alt=media&token=c51f9913-f18d-42fe-962c-d74c73cbe05e',
    behanceLink: 'https://appone.vercel.app/',
  },
  // Add more mobile projects here if needed
]

export default function Component() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="bg-zinc-950 min-h-screen text-yellow-400 p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <h2 className="text-3xl font-bold mb-8 text-center">Mobile App Showcase</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {mobileProjects.map((project) => (
            <MobileProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </ReactLenis>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl md:text-2xl font-semibold">{project.title}</h2>
          <span className="text-sm md:text-base text-yellow-300">{project.year}</span>
        </div>
        <span className="inline-block bg-yellow-900 text-yellow-400 px-3 py-1 rounded-full text-sm mb-4">
          {project.tag}
        </span>
      </div>
      <div className="relative aspect-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={project.mainImage}
          className="w-full h-full object-cover"
        />
        <Link 
          href={project.behanceLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute bottom-4 right-4 bg-yellow-400 text-black p-2 rounded-full shadow-md hover:bg-yellow-300 transition-colors duration-300"
        >
          <FiArrowRight size={24} />
          <span className="sr-only">View project</span>
        </Link>
      </div>
    </motion.div>
  )
}

function MobileProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs"
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="text-sm text-yellow-300">{project.year}</span>
        </div>
        <span className="inline-block bg-yellow-900 text-yellow-400 px-3 py-1 rounded-full text-sm">
          {project.tag}
        </span>
      </div>
      <div className="relative">
        <div className="aspect-[9/16] overflow-hidden rounded-lg mx-4 mb-4 bg-yellow-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            src={project.mainImage}
            className="w-full h-full object-cover"
          />
        </div>
        <Link 
          href={project.behanceLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute bottom-4 right-4 bg-yellow-400 text-black p-2 rounded-full shadow-md hover:bg-yellow-300 transition-colors duration-300"
        >
          <FiArrowRight size={24} />
          <span className="sr-only">View mobile project</span>
        </Link>
      </div>
    </motion.div>
  )
}