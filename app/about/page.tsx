"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "../components/navbar"

const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">ABOUT APSIT</h1>
          <p className="text-xl text-gray-300">Learn more about our institution and what makes us unique</p>
        </div>
      </section>

      {/* Industrial Collaborations */}
<AnimatedSection className="py-12 px-6 md:px-12 lg:px-20">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Industrial Collaborations</h2>

    <img 
      src="/coll.png" 
      alt="Industrial Collaborations" 
      className="w-full h-auto rounded-lg mb-8"
    />

    <p className="text-gray-300 mb-6">
      APSIT has numerous industrial collaborations to undergo training in world leading technologies through
      Bentley Academic Alliance, Cisco Networking Academy, Red Hat Academy, AWS Academy, Palo Alto Cybersecurity
      Academy, Oracle Academy, Juniper Cloud and Automation Academy, Blue Prism Academy and many more.
    </p>
    <p className="text-gray-300 mb-6">
      APSIT has rare hardware facilities like Nvidia DGX station for AI & Data Science research, iOS environment
      for cross platform application development, E Yantra Robotics Systems, Texas Instruments USA low power
      signal multi processors for Industry 4.0.
    </p>
    <p className="text-gray-300 mb-6">
      Students also get hands on experience on the industry recommended software like Autodesk, Ansys, Creo,
      Dassult 3D Experience, Solidworks, Kubernetes, Open MPI, Flutter, Jenkins, OpenStack, Tensorflow, Flask,
      Django.
    </p>
    <p className="text-gray-300 mb-6">
      APSIT trains students for aptitude tests which are essentially screening tests to shortlist candidates
      during recruitment process. These tests address the areas of logical reasoning, critical thinking, problem
      solving skills. Students' performance is monitored through online portal designed for aptitude practice
      tests.
    </p>
    <p className="text-gray-300">
      Efforts taken in this direction in past years has resulted in improved pay package offers and a greater
      number of recruiters visiting campus. Companies are also choosing the institute as a venue for their state
      level and national level campus drives that demands robust infrastructure for bulk recruitments.
    </p>
  </div>
</AnimatedSection>


{/* More Initiatives */}
<AnimatedSection className="py-12 px-6 md:px-12 lg:px-20">
  <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-4 text-center md:text-left">
        <img 
          src="/app.png" 
          alt="App Development Club" 
          className="w-20 h-20 object-cover rounded-md mb-4 md:mb-0" 
        />
        <div>
          <h3 className="text-xl font-bold mb-2">App Development Club</h3>
          <p className="text-gray-300">Learn to develop android and ios apps.</p>
          <a href="https://www.instagram.com/app_development_club_it?igsh=OWcxb3o1NjNtajRr" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline mt-2 block">
            Follow on Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-4 text-center md:text-left">
        <img 
          src="/ant.png" 
          alt="Antarang" 
          className="w-20 h-20 object-cover rounded-md mb-4 md:mb-0" 
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Antarang</h3>
          <p className="text-gray-300">Promotes emotional well-being</p>
          <a href="https://www.instagram.com/antarang_apsit?igsh=cWc2aGVsbzVka3A5" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline mt-2 block">
            Follow on Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-4 text-center md:text-left">
        <img 
          src="/iit.png" 
          alt="IIT-B Super Resource Centre" 
          className="w-20 h-20 object-cover rounded-md mb-4 md:mb-0" 
        />
        <div>
          <h3 className="text-xl font-bold mb-2">IIT-B Super Resource Centre</h3>
          <p className="text-gray-300">Access to premium educational resources</p>
          <a href="https://instagram.com/apsit_iitbresource" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline mt-2 block">
            Follow on Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-4 text-center md:text-left mt-4">
        <img 
          src="/moodle.png" 
          alt="PBL" 
          className="w-20 h-20 object-cover rounded-md mb-4 md:mb-0" 
        />
        <div>
          <h3 className="text-xl font-bold mb-2">PBL</h3>
          <p className="text-gray-300">Learning from Industry experts</p>
          <a href="https://elearn.apsit.edu.in/moodle/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline mt-2 block">
            Visit Platform
          </a>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-4 text-center md:text-left mt-4">
        <img 
          src="/pbl.png" 
          alt="E-learning Platform" 
          className="w-20 h-20 object-cover rounded-md mb-4 md:mb-0" 
        />
        <div>
          <h3 className="text-xl font-bold mb-2">E-learning Platform</h3>
          <p className="text-gray-300">Lecture notes on mobile, doubt solving forum</p>
          <a href="https://instagram.com/apsit_elearning" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline mt-2 block">
            Follow on Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-4 text-center md:text-left mt-4">
        <img 
          src="/ent.png" 
          alt="Entrepreneur Development Cell" 
          className="w-20 h-20 object-cover rounded-md mb-4 md:mb-0" 
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Entrepreneur Development Cell</h3>
          <p className="text-gray-300">Develop entrepreneurial mindset</p>
          <a href="https://www.instagram.com/edc_apsit?igsh=bGZmd3ZqYTBucndk" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline mt-2 block">
            Follow on Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-4 text-center md:text-left mt-4">
        <img 
          src="/coun.png" 
          alt="Counselling & Mentoring" 
          className="w-20 h-20 object-cover rounded-md mb-4 md:mb-0" 
        />
        <div>
          <h3 className="text-xl font-bold mb-2">Counselling & Mentoring</h3>
          <p className="text-gray-300">Explore the underlying dynamics of oneself</p>
          <a href="https://instagram.com/apsit_counselling" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline mt-2 block">
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* New: EXALT */}
      <div className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-4 text-center md:text-left mt-4">
        <img 
          src="/hell.png" 
          alt="EXALT - Technical Fest" 
          className="w-20 h-20 object-cover rounded-md mb-4 md:mb-0" 
        />
        <div>
          <h3 className="text-xl font-bold mb-2">EXALT</h3>
          <p className="text-gray-300">Annual Technical Fest of APSIT, Thane ⚡</p>
          <a href="https://www.instagram.com/exalt_apsit/?igsh=Nmt4Y3loY290bHo4" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline mt-2 block">
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* New: A.M.C. */}
      <div className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row items-center space-x-0 md:space-x-4 text-center md:text-left mt-4">
        <img 
          src="/mus.png" 
          alt="A.M.C. - APSIT Music Club" 
          className="w-20 h-20 object-cover rounded-md mb-4 md:mb-0" 
        />
        <div>
          <h3 className="text-xl font-bold mb-2">A.M.C.</h3>
          <p className="text-gray-300">APSIT's very own music club – Home to the APSIT BAND</p>
          <a href="https://www.instagram.com/apsitmusicclub/?igsh=Zjh2eWIxeTI5Y2Jz" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline mt-2 block">
            Follow on Instagram
          </a>
        </div>
      </div>

    </div>
  </div>
</AnimatedSection>

    </main>
  )
}

