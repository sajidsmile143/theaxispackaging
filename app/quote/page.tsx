import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InstantQuote } from "@/components/instant-quote"

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <InstantQuote />
      </main>
      <Footer />
    </div>
  )
}
