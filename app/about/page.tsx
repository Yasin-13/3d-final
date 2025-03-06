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

      {/* Academic Initiatives */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">ACADEMIC INITIATIVES</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">E-Learning Platform</h3>
              <p className="text-gray-300">Lecture notes on mobile, doubt solving forum</p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Project Based Learning</h3>
              <p className="text-gray-300">Learning from Industry experts</p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Foreign Language Courses</h3>
              <p className="text-gray-300">Expand your global communication skills</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* More Initiatives */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">App Development Club</h3>
              <p className="text-gray-300">Learn to develop android and ios apps.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Antarang</h3>
              <p className="text-gray-300">Promotes emotional well-being</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">IIT-B Super Resource Centre</h3>
              <p className="text-gray-300">Access to premium educational resources</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Attendance Reward</h3>
              <p className="text-gray-300">Get rewarded for regularity!</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Training and Certification</h3>
              <p className="text-gray-300">In open source technologies</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Entrepreneur Development Cell</h3>
              <p className="text-gray-300">Develop entrepreneurial mindset</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Counselling & Mentoring</h3>
              <p className="text-gray-300">Explore the underlying dynamics of oneself</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

