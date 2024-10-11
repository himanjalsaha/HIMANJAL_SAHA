"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const projects = [
    { 
      id: 1, 
      title: 'Code Snippet Manager', 
      image: '/code-snippet-manager.jpg', // Replace with actual image path
      description: 'A web app for organizing and sharing code snippets, with support for syntax highlighting and themes.' 
    },
    { 
      id: 2, 
      title: 'Personal Portfolio', 
      image: '/personal-portfolio.jpg', // Replace with actual image path
      description: 'A responsive personal portfolio showcasing my skills, projects, and achievements as a full-stack developer.' 
    },
    { 
      id: 3, 
      title: 'Guitar Tuner App', 
      image: '/guitar-tuner.jpg', // Replace with actual image path
      description: 'A React Native app for tuning guitars with real-time pitch detection and audio feedback.' 
    },
    { 
      id: 4, 
      title: 'AI-Powered Documentation Generator', 
      image: '/ai-documentation.jpg', // Replace with actual image path
      description: 'A SaaS product that generates developer documentation from code using AI, built with MERN stack.' 
    },
    { 
      id: 5, 
      title: 'Adult Foster Care Website', 
      image: '/foster-care.jpg', // Replace with actual image path
      description: 'A client project for an adult foster care service provider, featuring clean design and user-friendly navigation.' 
    },
    { 
      id: 6, 
      title: 'SEO-Optimized Course Platform', 
      image: '/course-platform.jpg', // Replace with actual image path
      description: 'A full-stack web app for online courses, focusing on SEO optimization and smooth user experience.' 
    }
  ]
  

const ProjectGrid = () => {
  const projectRefs = useRef([])

  useEffect(() => {
    projectRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: index * 0.2, // Stagger animation by 0.2s for each card
        }
      )
    })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white px-5 py-10">
      <h1 className="text-4xl md:text-6xl font-mono text-center mb-16 uppercase">
        Projects Showcase
      </h1>

      {/* Bento-style grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="relative rounded-lg overflow-hidden bg-white text-black shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image */}
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectGrid
