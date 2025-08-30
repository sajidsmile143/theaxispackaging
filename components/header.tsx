"use client";

import { Button } from "@/components/ui/button";
import { COMPANY_INFO, INDUSTRIES, NAVIGATION_ITEMS, PRODUCT_CATEGORIES } from "@/lib/constants";
import { ChevronDown, Clock, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get first 10 products for dropdown
  const productsForDropdown = PRODUCT_CATEGORIES.slice(0, 10);

  // Get first 12 industries for dropdown
  const industriesForDropdown = INDUSTRIES.slice(0, 12);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-[var(--axis-orange)] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{COMPANY_INFO.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/logo.png"
              alt="Axis Packaging Logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-[var(--axis-dark-gray)]">
                {COMPANY_INFO.name}
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">{COMPANY_INFO.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => {
              // Special handling for Products and Industries with dropdowns
              if (item.name === "Products") {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 text-gray-700 hover:text-[var(--axis-secondary-blue)] font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>

                    {/* Products Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-[650px] bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-4">
                          Our Products
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {productsForDropdown.map((product) => (
                            <Link
                              key={product.slug}
                              to="/products"
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <h4 className="text-sm font-medium text-gray-900">
                                  {product.name}
                                </h4>
                                <p className="text-xs text-gray-500 line-clamp-2">
                                  {product.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <Link
                            to="/products"
                            className="text-[var(--axis-orange)] hover:text-[var(--axis-orange)]/80 font-medium text-sm"
                          >
                            View All Products →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.name === "Industries") {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 text-gray-700 hover:text-[var(--axis-secondary-blue)] font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>

                    {/* Industries Dropdown */}
                    <div className="absolute top-full left-[-70px] mt-2 w-[650px] h-[480px] overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)] mb-4">
                          Shop by Industry
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {industriesForDropdown.map((industry) => (
                            <Link
                              key={industry.slug}
                              to={`/products?industry=${industry.slug}`}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <img
                                src={industry.image}
                                alt={industry.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <h4 className="text-sm font-medium text-gray-900">
                                  {industry.name}
                                </h4>
                                <p className="text-xs text-gray-500 line-clamp-2">
                                  {industry.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <Link
                            to="/industries"
                            className="text-[var(--axis-orange)] hover:text-[var(--axis-orange)]/80 font-medium text-sm"
                          >
                            View All Industries →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular navigation items
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-[var(--axis-secondary-blue)] font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/quote">
              <Button
                variant="outline"
                className="border-[var(--axis-light-gray)] text-[var(--axis-light-gray)] hover:bg-[var(--axis-mid-blue)] hover:text-white bg-transparent"
              >
                Get Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90 text-white">
                Call Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-[var(--axis-secondary-blue)] font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/quote">
                  <Button
                    variant="outline"
                    className="border-[var(--axis-light-gray)] text-[var(--axis-light-gray)] bg-transparent w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    className="bg-[var(--axis-secondary-blue)] hover:bg-[var(--axis-secondary-blue)]/90 text-white w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Call Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
