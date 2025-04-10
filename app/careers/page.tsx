"use client"

import { useState } from "react"
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

const FloorSection = ({ title, href, facilities, videos, videoHeadings }) => {
  const [showVideos, setShowVideos] = useState(false)

  const toggleVideos = () => {
    setShowVideos(!showVideos)
  }

  return (
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
          <h4 className="text-lg font-bold mb-2">
Videos            <button
              onClick={(e) => {
                e.preventDefault()
                toggleVideos()
              }}
              className="ml-4 px-4 py-2 text-sm bg-gray-700 rounded-lg hover:bg-gray-600"
            >
              {showVideos ? "Hide" : "Show"}
            </button>
          </h4>
          {showVideos && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos.map((video, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
                  <h5 className="text-md font-semibold mb-2 text-gray-300">
                    {videoHeadings[index] || "Video"}
                  </h5>
                  <div className="relative w-full bg-black" style={{ aspectRatio: "9 / 16" }}>
                    <video
                      controls
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ objectFit: "contain" }}
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

const TimetableSection = () => {
  const departments = [
    {
      name: "Computer Science",
      timetables: [
        { name: "Semester 1", link: "/TT/computer_science_sem1.pdf" },
        { name: "Semester 2", link: "/TT/computer_science_sem2.pdf" },
      ],
    },
    {
      name: "AIML",
      timetables: [
        { name: "Semester 1", link: "/TT/aiml_sem1.pdf" },
        { name: "Semester 2", link: "/TT/aiml_sem2.pdf" },
      ],
    },
    {
      name: "Humanities and Applied Science",
      timetables: [
        { name: "Semester 1", link: "/TT/humanities_applied_science_sem1.pdf" },
        { name: "Semester 2", link: "/TT/humanities_applied_science_sem2.pdf" },
      ],
    },
    {
      name: "Mechanical",
      timetables: [
        { name: "Semester 1", link: "/TT/mechanical_sem1.pdf" },
        { name: "Semester 2", link: "/TT/mechanical_sem2.pdf" },
      ],
    },
  ]

  return (
    <section className="py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Timetable</h2>
        {departments.map((department, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg mb-8"
          >
            <h3 className="text-lg font-bold mb-2 text-center">{department.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {department.timetables.map((timetable, idx) => (
                <a
                  key={idx}
                  href={timetable.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700"
                >
                  <p className="text-gray-300">{timetable.name}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
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
              <FloorSection
                title="BASEMENT"
                href="/basement"
                facilities={["Parking Area", "Maintenance", "Storage"]}
                videos={["/videos/basement1.mp4", "/videos/basement2.mp4", "/videos/basement3.mp4"]}
                videoHeadings={["Labs", "Lobby", "Corridor"]}
              />

              <FloorSection
                title="GROUND FLOOR"
                href="/ground"
                facilities={["Reception", "Administrative Office", "Cafeteria", "Auditorium", "Library"]}
                videos={["/videos/ground1.mp4", "/videos/ground2.mp4", "/videos/ground3.mp4"]}
                videoHeadings={["Lobby", "Cafeteria", "Corridor"]}
              />

              <FloorSection
                title="FIRST FLOOR"
                href="/first"
                facilities={["Computer Labs", "Classrooms", "Faculty Offices", "Seminar Hall"]}
                videos={["/videos/first1.mp4", "/videos/first2.mp4", "/videos/first3.mp4"]}
                videoHeadings={["Labs", "Classrooms", "Corridor"]}
              />

              <FloorSection
                title="SECOND FLOOR"
                href="/second"
                facilities={["Science Labs", "Lecture Halls", "Halls"]}
                videos={["/videos/second1.mp4", "/videos/second2.mp4", "/videos/second3.mp4"]}
                videoHeadings={["Labs", "Lecture Halls", "Corridor"]}
              />

              <FloorSection
                title="THIRD FLOOR"
                href="/third"
                facilities={["Research Labs", "Project Rooms", "Offices"]}
                videos={["/videos/third1.mp4", "/videos/third2.mp4", "/videos/third3.mp4"]}
                videoHeadings={["Labs", "Offices", "Corridor"]}
              />

              <FloorSection
                title="FOURTH FLOOR"
                href="/fourth"
                facilities={["Library", "Classrooms", "Laboratory"]}
                videos={["/videos/fourth1.mp4", "/videos/fourth2.mp4", "/videos/fourth3.mp4"]}
                videoHeadings={["Library", "Classrooms", "Labs"]}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Timetable Section */}
      <TimetableSection />
    </main>
  )
}