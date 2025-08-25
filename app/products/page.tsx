import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCategories } from "@/components/product-categories";
import { Badge } from "@/components/ui/badge";
import { INDUSTRIES } from "@/lib/constants";
import { useSearchParams } from "react-router-dom";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const industrySlug = searchParams.get("industry");
  const selectedIndustry = industrySlug ? INDUSTRIES.find((i) => i.slug === industrySlug) : null;
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-br from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-[var(--axis-orange)] text-white mb-4">
              {selectedIndustry ? `${selectedIndustry.name} Industry` : "Our Products"}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {selectedIndustry
                ? `${selectedIndustry.name} Packaging Solutions`
                : "Custom Packaging Solutions"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {selectedIndustry
                ? `Discover our specialized packaging solutions designed specifically for the ${selectedIndustry.name} industry. ${selectedIndustry.description}`
                : "Explore our comprehensive range of premium packaging products designed to elevate your brand and protect your products."}
            </p>
          </div>
        </section>
        <ProductCategories selectedIndustry={selectedIndustry} />
      </main>
      <Footer />
    </div>
  );
}
