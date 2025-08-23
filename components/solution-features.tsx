"use client"

import { Package, Users, Clock, Shield, Award, Zap, Globe, Heart, CheckCircle, TrendingUp, Settings, Truck } from "lucide-react"

export function SolutionFeatures() {
  const features = [
    {
      icon: Users,
      title: "Dedicated expert support",
      description: "Make more informed decisions with unlimited support from our team of product specialists."
    },
    {
      icon: Package,
      title: "End-to-end solution",
      description: "From concept to your door, we simplify your project by handling everything for you."
    },
    {
      icon: Settings,
      title: "Custom sizing",
      description: "Fully control the size of your packaging with no limitations to tailor to your product."
    },
    {
      icon: Shield,
      title: "The Axis Packaging Promise",
      description: "We guarantee the highest quality product and customer experience with every order!"
    },
    {
      icon: Zap,
      title: "Extensive option library",
      description: "Access over 50+ options that you can utilize to create your very own unique box experience."
    },
    {
      icon: Award,
      title: "Professional design services",
      description: "Achieve agency-level packaging designs from our professional artwork and structural designers."
    },
    {
      icon: Globe,
      title: "Managed manufacturing",
      description: "Get the best manufacturing with stringent processes as well as transparency on your production."
    },
    {
      icon: Truck,
      title: "Hassle-free logistics",
      description: "Have us manage your logistics to get the best prices and turnaround time for shipping."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Easily become a more sustainable brand with our range of eco-friendly products and options."
    },
    {
      icon: CheckCircle,
      title: "Meticulous proofing",
      description: "All orders go through our meticulous proofing system before going into production."
    },
    {
      icon: TrendingUp,
      title: "Proactive cost optimization",
      description: "Get proactive cost optimization on every project to ensure you are spending less for packaging."
    },
    {
      icon: Package,
      title: "Multi-packaging capabilities",
      description: "Skip looking for multiple vendors and easily package your entire product line all-in-one place."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--axis-dark-blue)] mb-6">
            We are your best solution for Custom Packaging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never worry about going to multiple sources to get your dream packaging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-[var(--axis-orange)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
