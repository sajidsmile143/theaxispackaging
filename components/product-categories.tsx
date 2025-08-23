"use client"
import { Link } from "react-router-dom"

export function ProductCategories() {
  const categories = [
    { name: "Custom Folding Carton Boxes", href: "/products#folding-carton" },
    { name: "Premium Rigid Boxes", href: "/products#rigid" },
    { name: "Custom Box Inserts", href: "/products#inserts" },
    { name: "Custom Reusable Bags", href: "/products#bags" },
    { name: "Printed Mailer Bags", href: "/products#mailer-bags" },
    { name: "Flexible Packaging Pouches", href: "/products#pouches" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] text-center mb-8">One for all solution</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.href} className="p-6 bg-gray-50 hover:bg-gray-100 rounded shadow">
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
