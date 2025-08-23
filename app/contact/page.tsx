"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our packaging experts",
      contact: COMPANY_INFO.phone,
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your questions and requirements",
      contact: COMPANY_INFO.email,
      action: "Send Email",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      contact: "Available 24/7",
      action: "Start Chat",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-[var(--axis-orange)] text-white mb-6">Contact Us</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Let's Discuss Your Packaging Needs</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Ready to elevate your brand with custom packaging? Our team of experts is here to help you create the
                perfect solution for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-[var(--axis-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="h-8 w-8 text-[var(--axis-orange)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <p className="font-medium text-[var(--axis-dark-blue)] mb-4">{method.contact}</p>
                    <Button className="bg-[var(--axis-mid-blue)] hover:bg-[var(--axis-mid-blue)]/90 text-white">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-xl">
                <CardHeader className="bg-[var(--axis-dark-blue)] text-white">
                  <CardTitle className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Company Info */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-6">Visit Our Facility</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-[var(--axis-orange)] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-[var(--axis-dark-blue)]">Address</p>
                          <p className="text-gray-600">{COMPANY_INFO.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-[var(--axis-orange)] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-[var(--axis-dark-blue)]">Business Hours</p>
                          <p className="text-gray-600">{COMPANY_INFO.hours}</p>
                          <p className="text-gray-600">Saturday: 9AM-2PM EST</p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-6">Quick Response Times</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Email Inquiries</span>
                        <Badge className="bg-green-100 text-green-800">Within 2 hours</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Quote Requests</span>
                        <Badge className="bg-blue-100 text-blue-800">Within 24 hours</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Phone Calls</span>
                        <Badge className="bg-orange-100 text-orange-800">Immediate</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Live Chat</span>
                        <Badge className="bg-purple-100 text-purple-800">Real-time</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>
  )
}
