"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FaUserCircle } from 'react-icons/fa' // Icon for avatar replacement

const Testimonial = () => {
  const testimonialRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    )
  }, [])

  return (
    <div 
      ref={testimonialRef} 
      className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg text-white max-w-lg mx-auto"
    >
      {/* Icon for Avatar Replacement */}
      <div className="w-24 h-24 rounded-full mb-4 border-4 border-white flex items-center justify-center">
        <FaUserCircle size={80} className="text-white" />
      </div>

      {/* Client Testimonial */}
      <blockquote className="text-lg italic text-center mb-4">
        "Himanjal is a fantastic developer. He delivered the project on time and exceeded my expectations. The communication was smooth, and he made sure every detail was perfect. I'll definitely hire him again!"
      </blockquote>

      {/* Client Name and Role */}
      <div className="text-center">
        <p className="font-bold text-xl">John Doe</p>
        <p className="text-sm">Freelance Client, 2023</p>
      </div>
    </div>
  )
}

export default Testimonial
