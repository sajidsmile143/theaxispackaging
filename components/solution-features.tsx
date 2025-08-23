import { CheckCircle, FileText, Palette, Award } from "lucide-react"

export function SolutionFeatures() {
  const features = [
    {
      icon: CheckCircle,
      title: "Dedicated expert support",
      description: "Make more informed decisions with our dedicated team of product specialists.",
    },
    {
      icon: FileText,
      title: "End-to-end solution",
      description: "From concept to your door, we handle design, printing, and everything else you need.",
    },
    {
      icon: Palette,
      title: "Custom sizing",
      description: "Fully control the size of your packaging with our custom sizing tailored to your product.",
    },
    {
      icon: Award,
      title: "The CustomProPackaging Promise",
      description: "We guarantee the highest quality product and customer experience with every order.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We are your best solution for <span className="text-green-500">Custom Packaging</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Never worry about going to multiple sources to get your dream packaging.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
