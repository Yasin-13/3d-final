"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "@/app/components/navbar"
import { MapPin, Phone, Instagram, Globe } from "lucide-react"

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

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">CONTACT US</h1>
          <p className="text-xl text-gray-300">Get in touch with us</p>
        </div>
      </section>

      {/* Contact Information */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-300">
                      Survey No. 12, 13, Opp. Hypercity Mall, Kasarvadavali, Thane(W), Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">022-25973737</p>
                    <p className="text-gray-300">022-25973738</p>
                    <p className="text-gray-300">022-25973739</p>
                    <p className="text-gray-300">+917738305400</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <p className="text-gray-300">@apsit_thane</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Website</h3>
                    <a
                      href="https://www.apsit.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-red-600 transition-colors"
                    >
                      www.apsit.edu.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden h-96">
            {/* Placeholder for map */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

