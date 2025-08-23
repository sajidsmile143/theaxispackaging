"use client"
import { useState } from "react"
import { Link } from "react-router-dom"
import { PRODUCT_CATEGORIES } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Star, Truck, Shield, ChevronLeft, ChevronRight } from "lucide-react"

export function ProductCategories() {
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 6
  const totalPages = Math.ceil(PRODUCT_CATEGORIES.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = PRODUCT_CATEGORIES.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
            One for All Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get everything custom packaging your business needs all in one place. 
            From folding cartons to luxury rigid boxes, we have it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {currentProducts.map((product) => (
            <Link key={product.slug} to={`/products/${product.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{product.icon}</span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[var(--axis-orange)] transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2 text-[var(--axis-dark-blue)]">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[var(--axis-orange)] text-[var(--axis-orange)] hover:bg-[var(--axis-orange)] hover:text-white"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-16">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center space-x-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className={currentPage === page ? "bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90" : ""}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center space-x-1"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Product Features */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Package className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Premium Quality</h3>
            <p className="text-gray-600">Highest quality materials and craftsmanship</p>
          </div>
          <div className="flex flex-col items-center">
            <Star className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Custom Design</h3>
            <p className="text-gray-600">Tailored to your brand and requirements</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick turnaround times worldwide</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
            <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Certified</h3>
            <p className="text-gray-600">ISO certified and compliant materials</p>
          </div>
        </div>
      </div>
    </section>
  )
}
