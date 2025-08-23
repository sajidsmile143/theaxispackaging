"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { PRODUCT_CATEGORIES } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Package, Star, Truck, Shield, CheckCircle, Download, MessageCircle } from "lucide-react"
import { Link, useParams } from "react-router-dom"

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = PRODUCT_CATEGORIES.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Back to Products
            </Button>
          </Link>
        </div>
        <Footer />
        <ChatSupport />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[var(--axis-orange)]">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-[var(--axis-orange)]">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-[var(--axis-dark-blue)] font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">{product.icon}</span>
                <Badge className="bg-[var(--axis-orange)] text-white">Premium Quality</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--axis-dark-blue)] mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
                  Get Custom Quote
                </Button>
                <Button size="lg" variant="outline" className="border-[var(--axis-dark-blue)] text-[var(--axis-dark-blue)]">
                  Download Specs
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Product Features & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why {product.name} is the perfect choice for your packaging needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Package className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Premium Quality</h3>
              <p className="text-gray-600">Highest quality materials and expert craftsmanship</p>
            </Card>
            <Card className="text-center p-6">
              <Star className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Custom Design</h3>
              <p className="text-gray-600">Tailored to your brand and specific requirements</p>
            </Card>
            <Card className="text-center p-6">
              <Truck className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times with worldwide shipping</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-[var(--axis-orange)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">Certified</h3>
              <p className="text-gray-600">ISO certified and compliant with industry standards</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">
                Product Specifications
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Customizable sizes and dimensions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Premium materials and finishes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Full-color printing capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Eco-friendly options available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Minimum order quantity: 100 pieces</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Production time: 10-15 business days</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">
                Why Choose This Product?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Our {product.name} are designed with your business in mind. We understand the importance 
                  of quality packaging in protecting your products and enhancing your brand image.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With years of experience in the packaging industry, we've developed solutions that 
                  combine functionality, aesthetics, and sustainability to meet the highest standards.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every product is crafted with attention to detail, ensuring that your packaging 
                  not only looks great but also performs exceptionally well in real-world conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our packaging experts help you create the perfect {product.name} for your business. 
            Get a custom quote today and see the difference quality packaging can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]">
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat with Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] text-center mb-12">
            Related Products
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.filter(p => p.slug !== slug).slice(0, 3).map((relatedProduct) => (
              <Card key={relatedProduct.slug} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{relatedProduct.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {relatedProduct.description}
                  </p>
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-24 object-cover rounded-lg mb-4"
                  />
                  <Link to={`/products/${relatedProduct.slug}`}>
                    <Button variant="outline" className="w-full border-[var(--axis-orange)] text-[var(--axis-orange)] hover:bg-[var(--axis-orange)] hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  )
} 