import type { Metadata } from "next";

import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
