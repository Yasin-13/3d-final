"use client"

import Link from "next/link"
import { Menu, Search } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="flex items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter">
          APSIT
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="hover:text-gray-300 transition-colors">
          HOME
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors">
          ABOUT
        </Link>
        <Link href="/services" className="hover:text-gray-300 transition-colors">
          SERVICES
        </Link>
        <Link href="/careers" className="hover:text-gray-300 transition-colors">
          CAMPUS
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors">
          CONTACT
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button aria-label="Search">
          <Search className="w-5 h-5" />
        </button>
        <button className="md:hidden" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="hover:text-gray-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              HOME
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/careers"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CAREERS
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

