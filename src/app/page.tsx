"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Component from './components/projects'
import TestimonialsSection from './components/Testimonial'
import { sendEmail } from './components/action'
const projects = [
  { id: 1, title: 'Project Alpha', description: 'A full-stack e-commerce platform', tech: ['React', 'Node.js', 'MongoDB'] },
  { id: 2, title: 'Beta App', description: 'Real-time chat application', tech: ['Socket.io', 'Express', 'Redis'] },
  { id: 3, title: 'Gamma Dashboard', description: 'Analytics dashboard for big data', tech: ['Vue.js', 'D3.js', 'Python'] },
]

const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'SQL', 'AWS', 'Docker']

export default function FuturisticPortfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const [isLoaded, setIsLoaded] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)
    setFormStatus(result)
  }

  return (
    <div className="min-h-screen bg-black text-yellow-400 font-mono">
      <div className="fixed top-0 left-0 w-full h-1 bg-yellow-400"></div>
      <div className="fixed bottom-0 right-0 w-1 h-full bg-yellow-400"></div>

      <header className="p-6 border-b border-yellow-400">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <motion.h1 
            className="text-xl md:text-3xl  font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            HIMANJAL_SAHA.exe
          </motion.h1>
          <ul className="flex space-x-4">
            {['about',  'contact'].map((section) => (
              <motion.li 
                key={section}
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={() => setActiveSection(section)}
                  className={`uppercase ${activeSection === section ? 'text-yellow-400' : 'text-gray-500'} text-xs md:text-sm hover:text-yellow-300 transition-colors`}
                >
                  {section}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <AnimatePresence mode="wait">
          {activeSection === 'about' && (
            <motion.section 
              key="about"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="text-4xl font-bold mb-4 glitch" data-text="SYSTEM_PROFILE">SYSTEM_PROFILE</h2>
              <p className="text-lg mb-4 leading-relaxed">
                INITIALIZING... Full stack developer with advanced capabilities in creating efficient, scalable, and user-friendly web applications. Equipped with a high-precision eye for detail and optimized for clean code generation. Primary objective: Build digital solutions that revolutionize user experience and system performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="w-full h-1 bg-yellow-400 my-8"></div>
              <Component/>
              <TestimonialsSection/>
            </motion.section>
          )}

          {activeSection === 'projects' && (
            <motion.section 
              key="projects"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="text-4xl font-bold mb-8 glitch" data-text="MISSION_LOG">MISSION_LOG</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    className="border border-yellow-400 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

{activeSection === 'contact' && (
            <motion.section 
              key="contact"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="text-4xl font-bold mb-8 glitch" data-text="ESTABLISH_COMMS">ESTABLISH_COMMS</h2>
              <div className="flex space-x-6 mb-8">
                <a href="https://github.com/himanjalsaha" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-300 transition-colors">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/himanjal-saha-263143247/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-300 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="mailto:himanjal.dev@gmail.com" className="text-3xl hover:text-yellow-300 transition-colors">
                  <FaEnvelope />
                </a>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="ENTER_NAME" className="w-full bg-black border border-yellow-400 p-2 rounded" required />
                <input name="email" type="email" placeholder="ENTER_EMAIL" className="w-full bg-black border border-yellow-400 p-2 rounded" required />
                <textarea name="message" placeholder="ENTER_MESSAGE" rows={4} className="w-full bg-black border border-yellow-400 p-2 rounded" required></textarea>
                <button type="submit" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 transition-colors">
                  TRANSMIT
                </button>
              </form>
              {formStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-2 rounded ${formStatus.success ? 'bg-green-500' : 'bg-red-500'}`}
                >
                  {formStatus.message}
                </motion.div>
              )}
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="text-center py-4 border-t border-yellow-400">
        <p>&copy; 2023 HIMANJAL_SAHA. ALL_RIGHTS_RESERVED.</p>
      </footer>

      {isLoaded && (
        <motion.div
          className="fixed bottom-4 right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </motion.div>
      )}

      <style jsx global>{`
        @keyframes glitch {
          0% {
            transform: translate(0)
          }
          20% {
            transform: translate(-2px, 2px)
          }
          40% {
            transform: translate(-2px, -2px)
          }
          60% {
            transform: translate(2px, 2px)
          }
          80% {
            transform: translate(2px, -2px)
          }
          100% {
            transform: translate(0)
          }
        }
        .glitch {
          position: relative;
          animation: glitch 1s infinite;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% {
            clip: rect(10px, 9999px, 31px, 0);
            transform: skew(0.6deg);
          }
          5% {
            clip: rect(70px, 9999px, 71px, 0);
            transform: skew(0.3deg);
          }
          10% {
            clip: rect(74px, 9999px, 86px, 0);
            transform: skew(0.6deg);
          }
          15% {
            clip: rect(89px, 9999px, 64px, 0);
            transform: skew(0.2deg);
          }
          20% {
            clip: rect(67px, 9999px, 91px, 0);
            transform: skew(0.6deg);
          }
          25% {
            clip: rect(69px, 9999px, 26px, 0);
            transform: skew(0.8deg);
          }
          30% {
            clip: rect(82px, 9999px, 34px, 0);
            transform: skew(0.7deg);
          }
          35% {
            clip: rect(27px, 9999px, 100px, 0);
            transform: skew(0.3deg);
          }
          40% {
            clip: rect(64px, 9999px, 15px, 0);
            transform: skew(0.2deg);
          }
          45% {
            clip: rect(79px, 9999px, 49px, 0);
            transform: skew(0.5deg);
          }
          50% {
            clip: rect(30px, 9999px, 5px, 0);
            transform: skew(0.4deg);
          }
          55% {
            clip: rect(67px, 9999px, 23px, 0);
            transform: skew(0.6deg);
          }
          60% {
            clip: rect(100px, 9999px, 98px, 0);
            transform: skew(0.8deg);
          }
          65% {
            clip: rect(29px, 9999px, 97px, 0);
            transform: skew(0.2deg);
          }
          70% {
            clip: rect(94px, 9999px, 53px, 0);
            transform: skew(0.3deg);
          }
          75% {
            clip: rect(81px, 9999px, 37px, 0);
            transform: skew(0.9deg);
          }
          80% {
            clip: rect(48px, 9999px, 62px, 0);
            transform: skew(0.5deg);
          }
          85% {
            clip: rect(82px, 9999px, 11px, 0);
            transform: skew(0.4deg);
          }
          90% {
            clip: rect(54px, 9999px, 84px, 0);
            transform: skew(0.7deg);
          }
          95% {
            clip: rect(28px, 9999px, 78px, 0);
            transform: skew(0.3deg);
          }
          100% {
            clip: rect(94px, 9999px, 75px, 0);
            transform: skew(0.6deg);
          }
        }
        @keyframes glitch-anim2 {
          0% {
            clip: rect(65px, 9999px, 99px, 0);
            transform: skew(0.4deg);
          }
          5% {
            clip: rect(86px, 9999px, 54px, 0);
            transform: skew(0.6deg);
          }
          10% {
            clip: rect(57px, 9999px, 89px, 0);
            transform: skew(0.2deg);
          }
          15% {
            clip: rect(39px, 9999px, 24px, 0);
            transform: skew(0.8deg);
          }
          20% {
            clip: rect(95px, 9999px,
            18px, 0);
            transform: skew(0.3deg);
          }
          25% {
            clip: rect(69px, 9999px, 48px, 0);
            transform: skew(0.5deg);
          }
          30% {
            clip: rect(26px, 9999px, 63px, 0);
            transform: skew(0.7deg);
          }
          35% {
            clip: rect(62px, 9999px, 72px, 0);
            transform: skew(0.2deg);
          }
          40% {
            clip: rect(40px, 9999px, 43px, 0);
            transform: skew(0.9deg);
          }
          45% {
            clip: rect(56px, 9999px, 25px, 0);
            transform: skew(0.3deg);
          }
          50% {
            clip: rect(33px, 9999px, 31px, 0);
            transform: skew(0.5deg);
          }
          55% {
            clip: rect(50px, 9999px, 77px, 0);
            transform: skew(0.7deg);
          }
          60% {
            clip: rect(66px, 9999px, 1px, 0);
            transform: skew(0.2deg);
          }
          65% {
            clip: rect(46px, 9999px, 47px, 0);
            transform: skew(0.4deg);
          }
          70% {
            clip: rect(76px, 9999px, 83px, 0);
            transform: skew(0.8deg);
          }
          75% {
            clip: rect(72px, 9999px, 42px, 0);
            transform: skew(0.3deg);
          }
          80% {
            clip: rect(67px, 9999px, 92px, 0);
            transform: skew(0.6deg);
          }
          85% {
            clip: rect(89px, 9999px, 6px, 0);
            transform: skew(0.2deg);
          }
          90% {
            clip: rect(13px, 9999px, 91px, 0);
            transform: skew(0.5deg);
          }
          95% {
            clip: rect(25px, 9999px, 66px, 0);
            transform: skew(0.7deg);
          }
          100% {
            clip: rect(42px, 9999px, 97px, 0);
            transform: skew(0.3deg);
          }
        }
      `}</style>
    </div>
  )
}