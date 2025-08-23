"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { nextTestimonial, prevTestimonial, setCurrentIndex } from "@/lib/slices/testimonialsSlice"

export function Testimonials() {
  const dispatch = useAppDispatch()
  const { testimonials, currentIndex } = useAppSelector((state) => state.testimonials)

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextTestimonial())
    }, 5000)

    return () => clearInterval(interval)
  }, [dispatch])

  const currentTestimonial = testimonials[currentIndex]

  if (!currentTestimonial) return null

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[var(--axis-orange)] text-white mb-4">
            <Star className="h-4 w-4 mr-2" />
            Customer Testimonials
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our packaging
            solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="border-0 shadow-xl mb-8">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-[var(--axis-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="h-8 w-8 text-[var(--axis-orange)]" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-[var(--axis-dark-blue)] text-lg">{currentTestimonial.name}</div>
                    <div className="text-gray-600">{currentTestimonial.company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => dispatch(prevTestimonial())}
              className="rounded-full w-10 h-10 p-0 bg-white hover:bg-[var(--axis-orange)] hover:text-white hover:border-[var(--axis-orange)]"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => dispatch(setCurrentIndex(index))}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[var(--axis-orange)]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => dispatch(nextTestimonial())}
              className="rounded-full w-10 h-10 p-0 bg-white hover:bg-[var(--axis-orange)] hover:text-white hover:border-[var(--axis-orange)]"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* All Testimonials Preview */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "border-[var(--axis-orange)] shadow-lg scale-105"
                    : "border-gray-200 hover:border-[var(--axis-mid-blue)] hover:shadow-md"
                }`}
                onClick={() => dispatch(setCurrentIndex(index))}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-[var(--axis-dark-blue)] text-sm">{testimonial.name}</div>
                      <div className="text-gray-500 text-xs">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--axis-orange)] mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--axis-orange)] mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--axis-orange)] mb-2">10M+</div>
                <div className="text-gray-600">Boxes Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--axis-orange)] mb-2">98%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-[var(--axis-dark-blue)] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Customers?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Experience the same quality and service that our customers rave about. Get started with your custom
                packaging project today.
              </p>
              <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
