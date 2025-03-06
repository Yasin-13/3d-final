"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "../components/navbar"
import Image from "next/image"

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

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">OUR SERVICES</h1>
          <p className="text-xl text-gray-300">Explore our engineering programs and facilities</p>
        </div>
      </section>

      {/* Engineering Programs */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Engineering Programs</h2>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Civil Engineering</h3>
                <p className="text-gray-300 mb-4">
                  Our Civil Engineering program provides comprehensive education in structural design, construction
                  management, environmental engineering, and transportation systems.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Structural analysis and design</li>
                  <li>Construction planning and management</li>
                  <li>Environmental engineering</li>
                  <li>Transportation engineering</li>
                  <li>Geotechnical engineering</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/cv.jpg?height=400&width=600"
                  alt="Civil Engineering"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/mech.jpg?height=400&width=600"
                  alt="Mechanical Engineering"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Mechanical Engineering</h3>
                <p className="text-gray-300 mb-4">
                  Our Mechanical Engineering program covers thermodynamics, fluid mechanics, manufacturing processes,
                  and mechanical design with hands-on laboratory experience.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Thermodynamics and heat transfer</li>
                  <li>Fluid mechanics and machinery</li>
                  <li>Manufacturing processes</li>
                  <li>CAD/CAM technologies</li>
                  <li>Robotics and automation</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Computer Engineering</h3>
                <p className="text-gray-300 mb-4">
                  Our Computer Engineering program focuses on software development, computer architecture, networking,
                  and database management systems.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Data structures and algorithms</li>
                  <li>Operating systems</li>
                  <li>Computer networks</li>
                  <li>Database management systems</li>
                  <li>Software engineering</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/csa.jpg?height=400&width=600"
                  alt="Computer Engineering"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src="/ds.jpg?height=400&width=600"
                  alt="AI and Data Science"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">AI and Data Science</h3>
                <p className="text-gray-300 mb-4">
                  Our specialized programs in AI and Data Science provide cutting-edge education in machine learning,
                  deep learning, big data analytics, and natural language processing.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                  <li>Machine learning algorithms</li>
                  <li>Deep learning and neural networks</li>
                  <li>Big data analytics</li>
                  <li>Natural language processing</li>
                  <li>Computer vision</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Facilities */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Facilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-6 rounded-lg text-center">
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Laboratories</h3>
              <p className="text-gray-300">
                State-of-the-art labs equipped with modern tools and technologies for practical learning
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center">
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Library</h3>
              <p className="text-gray-300">
                Extensive collection of books, journals, and online resources for research and learning
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center">
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Computing Centers</h3>
              <p className="text-gray-300">High-performance computing facilities with latest software and hardware</p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center">
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Robotics Lab</h3>
              <p className="text-gray-300">
                Specialized lab for robotics research and development with modern equipment
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center">
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Incubation Center</h3>
              <p className="text-gray-300">Support for student startups and entrepreneurial ventures</p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg text-center">
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Wi-Fi Campus</h3>
              <p className="text-gray-300">High-speed internet connectivity throughout the campus</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

