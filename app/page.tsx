import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { InstantQuote } from "@/components/instant-quote"
import { FAQs } from "@/components/faqs"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { ChatSupport } from "@/components/chat-support"
import { SolutionFeatures } from "@/components/solution-features"
import { ProductShowcase } from "@/components/product-showcase"
import { IndustrySolutions } from "@/components/industry-solutions"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SolutionFeatures />
        <ProductShowcase />
        <IndustrySolutions />
        <InstantQuote />
        <FAQs />
        <Testimonials />
      </main>
      <Footer />
      <ChatSupport />
    </div>
  )
}
