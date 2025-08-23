import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCategories } from "@/components/product-categories"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-[var(--axis-orange)] text-white mb-4">Our Products</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Custom Packaging Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our comprehensive range of premium packaging products designed to elevate your brand and protect
              your products.
            </p>
          </div>
        </section>
        <ProductCategories />
      </main>
      <Footer />
    </div>
  )
}
