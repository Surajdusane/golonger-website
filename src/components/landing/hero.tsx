import { Star } from "lucide-react";
import Image from "next/image";

import heroImage from "@/../public/hero-image.png";
import { Header } from "./header";

export function Hero() {
  return (
    <section id="top" className="grid-bg min-h-screen relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Header />

        <div className="grid lg:grid-cols-2 gap-12 items-center py-8 md:py-14">
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src={heroImage}
              alt="Golonger app hero screen"
              priority
              className="w-72 md:w-80 h-auto"
            />
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="hero-title">
              GO LONGER
              <br />
              STRONGER
              <br />
              <span className="text-primary">INSIDE OUT</span>
            </h1>

            <p className="text-muted-foreground text-lg mt-5 max-w-md mx-auto lg:mx-0">
              Guided pelvic floor training for sexual health and wellness. Five
              minutes a day — built into your routine.
            </p>

            <a
              href="#download"
              className="mt-8 w-full sm:w-auto inline-block border-2 border-primary rounded-xl px-10 py-4 font-bold hover:bg-primary transition text-center"
            >
              DOWNLOAD NOW
            </a>

            <div className="mt-7 flex items-center gap-2 justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 text-gold fill-current" />
                ))}
              </span>
              <span>
                4.8 · 12,400+ reviews across App Store &amp; Google Play
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}