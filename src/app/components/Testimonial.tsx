"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
}

const testimonial: Testimonial = {
  name: "Dipal Patel",
  role: "CTO",
  company: "Sunrise aftercare services",
  content: "We had great experience working with Himanjal, he was quick with response and developed great website according to our requirements. He recommended appropriate changes to fit our need. I would reach out to him for our future needs."

}

export default function TestimonialsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="my-16"
    >
      <h2 className="text-4xl font-bold mb-8 glitch" data-text="USER_FEEDBACK">USER_FEEDBACK</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black border border-yellow-400 rounded-lg p-6 shadow-lg hover:shadow-yellow-400/20 transition-shadow duration-300"
      >
        <p className="text-lg mb-4 leading-relaxed relative">
          <span className="absolute -top-4 -left-4 text-4xl text-yellow-400 opacity-50">"</span>
          {testimonial.content}
          <span className="absolute -bottom-4 -right-4 text-4xl text-yellow-400 opacity-50">"</span>
        </p>
        <div className="flex items-center mt-6">
          <div className="w-12 h-12 bg-yellow-400 rounded-full mr-4 flex items-center justify-center text-black font-bold text-xl">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <Link href='https://www.sunriseafc.com/' className="text-yellow-300 text-sm">
              {testimonial.role} @  {testimonial.company}
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}