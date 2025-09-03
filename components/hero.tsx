"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
          <div className="inline-flex items-center px-3 py-1 bg-yellow-100 rounded-full text-sm font-medium text-gray-700 mb-4">
              Premium Packaging Solutions
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[var(--axis-dark-blue)] mb-4">
              Create custom boxes & packaging of your dreams
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
              Order personalized, high-quality custom printed packaging and branded boxes your
              customers will love all-in-one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/quote">
                <Button className="bg-[var(--axis-orange)]  text-[var(--axis-light-gray)] hover:bg-[var(--axis-orange)]/90 text-white">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  variant="outline"
                  className="border-[var(--axis-mid-blue)] text-[var(--axis-mid-blue)] hover:bg-[var(--axis-orange)] hover:text-white"
                >
                  Choose Packaging style
                </Button>
              </Link>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 mt-6 text-sm text-gray-500">
              <span>50k+ Happy</span>
              <span>24h Quick Turnaround</span>
              <span>100% Custom Made</span>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                ✓ Premium Quality
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <img
                src="/assets/homePic.png"
                alt="Packaging hero"
                className="w-full max-w-md h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}