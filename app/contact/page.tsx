"use client";

import type React from "react";

import { ChatSupport } from "@/components/chat-support";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY_INFO } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [quoteFormData, setQuoteFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", quoteFormData);
    // Handle form submission
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactFormData);
    // Handle form submission
  };

  const faqItems = [
    "What are your minimum order quantities?",
    "What are your turnaround times?",
    "What are your payment terms?",
    "Do you offer free samples?",
    "Do you ship internationally?",
    "Do you offer design services?",
    "How do I place an order?",
    "Do you have volume discounts?",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Hero & FAQ */}
              <div>
                {/* Hero Section */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                    <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
                    <div className="w-12 h-12 bg-green-500 rounded-full"></div>
                    <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
                  </div>

                  <h1 className="text-4xl font-bold text-[var(--axis-dark-blue)] mb-6">
                    Your Packaging Success
                    <br />
                    Starts with
                    <br />
                    <span className="text-green-600">theasxis Packaging</span>
                  </h1>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    At theasxisPackaging, we thrive on elevating solutions and cost- effective
                    custom packaging that enhances your brand and drives customer satisfaction. From
                    concept to delivery, we're your trusted partner for all your packaging needs.
                  </p>
                </div>

                {/* FAQ Section */}
                <div>
                  <h2 className="text-2xl font-bold text-[var(--axis-dark-blue)] mb-6">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-3">
                    {faqItems.map((question, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <span className="text-gray-700">{question}</span>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Forms */}
              <div className="space-y-8">
                {/* Request a Quote Form */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-green-600 text-white">
                    <CardTitle className="text-lg">REQUEST A QUOTE</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleQuoteSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="quote-name" className="text-sm font-medium">
                          Name *
                        </Label>
                        <Input
                          id="quote-name"
                          type="text"
                          required
                          value={quoteFormData.name}
                          onChange={(e) =>
                            setQuoteFormData({ ...quoteFormData, name: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="quote-email" className="text-sm font-medium">
                          Email *
                        </Label>
                        <Input
                          id="quote-email"
                          type="email"
                          required
                          value={quoteFormData.email}
                          onChange={(e) =>
                            setQuoteFormData({ ...quoteFormData, email: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="quote-phone" className="text-sm font-medium">
                          Phone *
                        </Label>
                        <Input
                          id="quote-phone"
                          type="tel"
                          required
                          value={quoteFormData.phone}
                          onChange={(e) =>
                            setQuoteFormData({ ...quoteFormData, phone: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="quote-company" className="text-sm font-medium">
                          Company
                        </Label>
                        <Input
                          id="quote-company"
                          type="text"
                          value={quoteFormData.company}
                          onChange={(e) =>
                            setQuoteFormData({ ...quoteFormData, company: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="quote-message" className="text-sm font-medium">
                          Message
                        </Label>
                        <Textarea
                          id="quote-message"
                          rows={4}
                          value={quoteFormData.message}
                          onChange={(e) =>
                            setQuoteFormData({ ...quoteFormData, message: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        REQUEST QUOTE
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Info Form */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="bg-gray-100">
                    <CardTitle className="text-lg text-gray-800">Contact Info</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="contact-name" className="text-sm font-medium">
                          Your Name
                        </Label>
                        <Input
                          id="contact-name"
                          type="text"
                          value={contactFormData.name}
                          onChange={(e) =>
                            setContactFormData({ ...contactFormData, name: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="contact-email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="contact-email"
                          type="email"
                          value={contactFormData.email}
                          onChange={(e) =>
                            setContactFormData({ ...contactFormData, email: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="contact-phone" className="text-sm font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          value={contactFormData.phone}
                          onChange={(e) =>
                            setContactFormData({ ...contactFormData, phone: e.target.value })
                          }
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-gray-800">Project Info</Label>
                        <div className="mt-2 space-y-3">
                          <div>
                            <Label htmlFor="project-type" className="text-sm text-gray-600">
                              Project Type
                            </Label>
                            <select
                              id="project-type"
                              value={contactFormData.projectType}
                              onChange={(e) =>
                                setContactFormData({
                                  ...contactFormData,
                                  projectType: e.target.value,
                                })
                              }
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                              <option value="">Select Type</option>
                              <option value="custom-boxes">Custom Boxes</option>
                              <option value="packaging-design">Packaging Design</option>
                              <option value="bulk-order">Bulk Order</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div>
                            <Label htmlFor="budget" className="text-sm text-gray-600">
                              Budget Range
                            </Label>
                            <select
                              id="budget"
                              value={contactFormData.budget}
                              onChange={(e) =>
                                setContactFormData({ ...contactFormData, budget: e.target.value })
                              }
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                              <option value="">Select Budget</option>
                              <option value="under-1000">Under $1,000</option>
                              <option value="1000-5000">$1,000 - $5,000</option>
                              <option value="5000-10000">$5,000 - $10,000</option>
                              <option value="over-10000">Over $10,000</option>
                            </select>
                          </div>

                          <div>
                            <Label htmlFor="timeline" className="text-sm text-gray-600">
                              Timeline
                            </Label>
                            <select
                              id="timeline"
                              value={contactFormData.timeline}
                              onChange={(e) =>
                                setContactFormData({ ...contactFormData, timeline: e.target.value })
                              }
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            >
                              <option value="">Select Timeline</option>
                              <option value="asap">ASAP</option>
                              <option value="1-2-weeks">1-2 weeks</option>
                              <option value="1-month">1 month</option>
                              <option value="flexible">Flexible</option>
                            </select>
                          </div>

                          <div>
                            <Label htmlFor="description" className="text-sm text-gray-600">
                              Project Description
                            </Label>
                            <Textarea
                              id="description"
                              rows={3}
                              value={contactFormData.description}
                              onChange={(e) =>
                                setContactFormData({
                                  ...contactFormData,
                                  description: e.target.value,
                                })
                              }
                              className="mt-1"
                              placeholder="Tell us about your project..."
                            />
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                      >
                        SEND MESSAGE
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* Customer Support Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Support Image */}
              <div className="relative">
                <img
                  src="/api/placeholder/500/400"
                  alt="Customer Support Representative"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>

              {/* Support Content */}
              <div>
                <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">
                  Looking for instant support?
                  <br />
                  Speak with our experts within a<br />
                  matter of minutes
                </h2>

                <p className="text-gray-600 mb-8">
                  Get connected with our packaging experts in a matter of minutes. Our team is
                  standing by to help you with any questions about custom packaging solutions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--axis-dark-blue)]">Free Live Expert</p>
                      <p className="text-gray-600">Quick Response</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--axis-dark-blue)]">No Wait Time</p>
                      <p className="text-gray-600">Immediate Assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Office Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Sales Office Info */}
              <div>
                <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] mb-6">
                  Our sales office
                </h2>
                <p className="text-gray-600 mb-8">
                  Visit our sales office to discuss your packaging needs in person. Our team is
                  ready to help you create the perfect packaging solution for your business.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-2">
                      Visit Our Sales Office
                    </h3>
                    <p className="text-gray-600">{COMPANY_INFO.address}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">{COMPANY_INFO.hours}</p>
                    <p className="text-gray-600">Saturday: 9AM-2PM EST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--axis-dark-blue)] mb-2">
                      Contact Information
                    </h3>
                    <p className="text-gray-600">Phone: {COMPANY_INFO.phone}</p>
                    <p className="text-gray-600">Email: {COMPANY_INFO.email}</p>
                  </div>
                </div>
              </div>

              {/* Office Image */}
              <div className="relative">
                <img
                  src="/api/placeholder/500/400"
                  alt="Sales Office"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Facilities Section */}
        <section className="py-16 bg-[var(--axis-dark-blue)] text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Manufacturing Content */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Our manufacturing facilities
                  <br />
                  around the world
                </h2>

                <p className="text-blue-100 mb-8">
                  With state-of-the-art manufacturing facilities strategically located around the
                  globe, we ensure fast delivery and competitive pricing for all your custom
                  packaging needs.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Europe</h3>
                    <p className="text-blue-100 text-sm">Germany, Poland, Turkey</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">United States</h3>
                    <p className="text-blue-100 text-sm">California, Texas, New York</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">South & Southeast Asia</h3>
                    <p className="text-blue-100 text-sm">China, India, Vietnam</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">East Asia</h3>
                    <p className="text-blue-100 text-sm">Japan, South Korea</p>
                  </div>
                </div>
              </div>

              {/* Manufacturing Image */}
              <div className="relative">
                <img
                  src="/api/placeholder/500/400"
                  alt="Manufacturing Facility"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>
  );
}
