import { Link } from "react-router-dom"

export function IndustrySolutions() {
  const industries = [
    { name: "Apparel", href: "/products" },
    { name: "Cosmetics", href: "/products" },
    { name: "Food", href: "/products" },
    { name: "Electronics", href: "/products" },
    { name: "Retail", href: "/products" },
    { name: "Pharmaceutical", href: "/products" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[var(--axis-dark-blue)] text-center mb-8">Shop by Industry</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind) => (
            <Link key={ind.name} to={ind.href} className="p-4 bg-white shadow text-center rounded hover:shadow-md">
              {ind.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
