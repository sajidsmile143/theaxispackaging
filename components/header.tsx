"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, Clock } from "lucide-react"
import { NAVIGATION_ITEMS, COMPANY_INFO } from "@/lib/constants"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-[var(--axis-dark-blue)] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{COMPANY_INFO.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/logo.png" 
              alt="Axis Packaging Logo" 
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-[var(--axis-dark-blue)]">{COMPANY_INFO.name}</h1>
              <p className="text-xs text-gray-600 hidden sm:block">{COMPANY_INFO.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-[var(--axis-orange)] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/quote">
              <Button
                variant="outline"
                className="border-[var(--axis-mid-blue)] text-[var(--axis-mid-blue)] hover:bg-[var(--axis-mid-blue)] hover:text-white bg-transparent"
              >
                Get Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white">Call Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-[var(--axis-orange)] font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/quote">
                  <Button
                    variant="outline"
                    className="border-[var(--axis-mid-blue)] text-[var(--axis-mid-blue)] bg-transparent w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Call Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
