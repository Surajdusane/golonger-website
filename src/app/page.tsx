
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "GoLonger — Guided Pelvic Floor Exercise App",
  description:
    "Guided pelvic floor exercise sessions with follow-along video, timers, cues, and optional reminders. No account required. Subscription required for full access. 18+.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
    </>
  );
}
