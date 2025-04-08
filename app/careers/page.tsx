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

const FloorSection = ({ title, href, facilities }) => (
  <Link href={href}>
    <div>
      <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {facilities.map((facility, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
            <p className="text-gray-300">{facility}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-bold mb-2">Timetable</h4>
        {/* Add timetable component here */}
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-gray-300">Timetable details...</p>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-bold mb-2">Classroom Video</h4>
        {/* Add classroom video component here */}
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <video controls className="w-full">
            <source src="/path/to/classroom/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </Link>
)

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
              <FloorSection
                title="BASEMENT"
                href="/basement"
                facilities={["Parking Area", "Maintenance", "Storage"]}
              />

              <FloorSection
                title="GROUND FLOOR"
                href="/ground"
                facilities={["Reception", "Administrative Office", "Cafeteria", "Auditorium", "Library"]}
              />

              <FloorSection
                title="FIRST FLOOR"
                href="/first"
                facilities={["Computer Labs", "Classrooms", "Faculty Offices", "Seminar Hall"]}
              />

              <FloorSection
                title="SECOND FLOOR"
                href="/second"
                facilities={["Science Labs", "Lecture Halls", "Halls"]}
              />

              <FloorSection
                title="THIRD FLOOR"
                href="/third"
                facilities={["Research Labs", "Project Rooms", "Offices"]}
              />

              <FloorSection
                title="FOURTH FLOOR"
                href="/fourth"
                facilities={["Library", "Classrooms", "Laboratory"]}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}