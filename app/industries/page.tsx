"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { INDUSTRIES } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Factory, Users, Award } from "lucide-react"
import { Link } from "react-router-dom"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Industry-Specific Packaging Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Tailored packaging solutions designed specifically for your industry needs. 
            From food and beverage to cosmetics and electronics, we have the expertise to deliver perfect packaging.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Package className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">25+</h3>
              <p className="text-gray-600">Industries Served</p>
            </div>
            <div className="flex flex-col items-center">
              <Factory className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">50+</h3>
              <p className="text-gray-600">Certified Facilities</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">3000+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-[var(--axis-orange)] mb-4" />
              <h3 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Shop by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect packaging solutions tailored to your industry niche. 
              Each industry has specific requirements and we understand them all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry) => (
              <Link key={industry.slug} to={`/industries/${industry.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{industry.icon}</span>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[var(--axis-orange)] transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg mb-2 text-[var(--axis-dark-blue)]">
                      {industry.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {industry.description}
                    </CardDescription>
                    <div className="mt-4">
                      <img 
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions CTA */}
      <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Industry-Specific Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our packaging experts understand the unique challenges and requirements of each industry. 
            Let us create the perfect packaging solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)]">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Why Choose Axis Packaging for Industry Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver industry-specific expertise with every packaging solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--axis-orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">
                Industry Expertise
              </h3>
              <p className="text-gray-600">
                Deep understanding of industry regulations, requirements, and best practices for each sector.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--axis-orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">
                Certified Manufacturing
              </h3>
              <p className="text-gray-600">
                Access to certified facilities worldwide ensuring quality and compliance for every industry.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--axis-orange)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensuring your packaging meets industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatSupport />
    </div>
  )
} 