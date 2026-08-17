import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Testimonials } from "@/components/landing/testimonials";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}