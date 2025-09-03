import { ChatSupport } from "@/components/chat-support";
import { FAQs } from "@/components/faqs";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SolutionFeatures } from "@/components/solution-features";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SolutionFeatures />
        <FAQs />
        <Testimonials />
      </main>
      <Footer />
      <ChatSupport />
    </div>
  );
}
