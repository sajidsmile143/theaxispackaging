"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target, BarChart3, Lightbulb } from "lucide-react"

export function DataResearch() {
  const insights = [
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "We analyze your market to create packaging that resonates with your target audience",
      stat: "95%",
      statLabel: "Market Fit Success",
    },
    {
      icon: Target,
      title: "Consumer Behavior",
      description: "Understanding what drives purchase decisions in your industry",
      stat: "73%",
      statLabel: "Purchase Influence",
    },
    {
      icon: BarChart3,
      title: "Performance Metrics",
      description: "Track how your packaging performs against industry benchmarks",
      stat: "2.3x",
      statLabel: "ROI Improvement",
    },
    {
      icon: Lightbulb,
      title: "Innovation Insights",
      description: "Stay ahead with the latest packaging trends and technologies",
      stat: "150+",
      statLabel: "Trend Reports",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[var(--axis-orange)] text-white mb-4">Data-Driven Design</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--axis-dark-blue)] mb-4">
            Research-Backed Packaging Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our packaging decisions are backed by comprehensive market research and consumer behavior analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[var(--axis-orange)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <insight.icon className="h-8 w-8 text-[var(--axis-orange)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--axis-dark-blue)] mb-2">{insight.title}</h3>
                <p className="text-gray-600 mb-4">{insight.description}</p>
                <div className="border-t pt-4">
                  <div className="text-2xl font-bold text-[var(--axis-orange)]">{insight.stat}</div>
                  <div className="text-sm text-gray-500">{insight.statLabel}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
