"use client"

import { Link } from "react-router-dom"
import { PRODUCT_CATEGORIES } from "@/lib/constants"

export function ProductShowcase() {
  const items = [
    { name: "Folding Cartons", img: "/assets/packify-corrugated-boxes.png" },
    { name: "Rigid Boxes", img: "/assets/packify-luxury-boxes.png" },
    { name: "Mailer Bags", img: "/assets/packify-mailers.png" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] text-center mb-8">Featured Packaging</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.name} to="/products" className="block group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow group-hover:shadow-md">
                <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-center font-medium text-[var(--axis-dark-blue)]">{item.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
