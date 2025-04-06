"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "../components/navbar"
import Link from "next/link"

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

export default function CampusMap() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">CAMPUS MAP</h1>
          <p className="text-xl text-gray-300">Navigate our campus facilities</p>
        </div>
      </section>

      {/* Campus Map */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-8 text-center">Interactive Campus Map</h2>

            <div className="space-y-8">
              <Link href="/basement">
                <div>
                  <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">BASEMENT</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Parking Area</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Maintenance</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Storage</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/ground">
                <div>
                  <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">GROUND FLOOR</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Reception</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Administrative Office</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Cafeteria</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Auditorium</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Library</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/first">
                <div>
                  <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">FIRST FLOOR</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Computer Labs</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Classrooms</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Faculty Offices</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Seminar Hall</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/second">
                <div>
                  <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">SECOND FLOOR</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Science Labs</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Lecture Halls</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Halls</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/third">
                <div>
                  <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">THIRD FLOOR</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Research Labs</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Project Rooms</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Offices</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/fourth">
                <div>
                  <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">FOURTH FLOOR</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">library</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">Classrooms</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-gray-300">laboratory</p>
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}