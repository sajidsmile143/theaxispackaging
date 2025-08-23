"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[var(--axis-dark-blue)] mb-6">
              Create custom boxes & packaging of your dreams
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Order personalized, high-quality custom printed packaging and branded boxes your customers will love all-in-one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white">Request a Quote</Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="border-[var(--axis-mid-blue)] text-[var(--axis-mid-blue)]">
                  Choose Packaging style
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src="/assets/packify-hero-box1.png" alt="Packaging hero" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
