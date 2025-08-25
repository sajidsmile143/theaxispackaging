"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setActiveCategory } from "@/lib/slices/faqsSlice";
import { HelpCircle, MessageCircle, Search } from "lucide-react";
import { useState } from "react";

export function FAQs() {
  const dispatch = useAppDispatch();
  const { faqs, activeCategory } = useAppSelector((state) => state.faqs);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Orders", "Production", "Customization", "Materials"];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[var(--axis-mid-blue)] text-white mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
            Got Questions? We Have Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about our custom packaging solutions and
            services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <Button
              variant={activeCategory === "All" ? "default" : "outline"}
              onClick={() => dispatch(setActiveCategory("All"))}
              className={
                activeCategory === "All"
                  ? "bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
                  : "border-gray-300 text-gray-700 hover:border-[var(--axis-orange)] hover:text-[var(--axis-orange)] bg-transparent"
              }
            >
              All Questions
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => dispatch(setActiveCategory(category))}
                className={
                  activeCategory === category
                    ? "bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
                    : "border-gray-300 text-gray-700 hover:border-[var(--axis-orange)] hover:text-[var(--axis-orange)] bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-b last:border-b-0">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <Badge variant="outline" className="mt-1 text-xs">
                          {faq.category}
                        </Badge>
                        <span className="font-medium text-[var(--axis-dark-blue)]">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pl-16">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No FAQs Found</h3>
              <p className="text-gray-500 mb-4">
                We couldn't find any questions matching your search. Try different keywords or
                browse all categories.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  dispatch(setActiveCategory("All"));
                }}
                variant="outline"
                className="bg-transparent"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white rounded-2xl p-8">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-[var(--axis-yellow-orange)]" />
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Our packaging experts are here to help. Get personalized answers to your specific
                questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white">
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
