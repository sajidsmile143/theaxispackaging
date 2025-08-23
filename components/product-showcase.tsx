"use client"

import { Link } from "react-router-dom"
import { PRODUCT_CATEGORIES } from "@/lib/constants"

export function ProductShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-6">
            One for all solution, for custom printed packaging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get everything custom packaging your business needs all in one place.
          </p>
          <Link to="/products">
            <button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Browse full catalog
            </button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.slice(0, 12).map((product) => (
            <Link key={product.slug} to={`/products/${product.slug}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2 group-hover:text-[var(--axis-orange)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Looking for something else? We can help.
            </h3>
            <Link to="/quote">
              <button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Request a custom quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
