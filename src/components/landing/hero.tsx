import { Apple, Play, Star } from "lucide-react";

import { Header, StreakBadge } from "./header";
import { PhoneMockup, RatingBadge } from "./phone-mockup";

export function Hero() {
  return (
    <section id="top" className="grid-bg min-h-screen relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Header />

        <div className="grid lg:grid-cols-2 gap-12 items-center py-8 md:py-14">
          <div className="order-2 lg:order-1 flex justify-center relative">
            <PhoneMockup />

            <div className="absolute -left-4 bottom-14 hidden md:block">
              <StreakBadge />
            </div>
            <div className="absolute -right-8 top-10 hidden md:block">
              <RatingBadge />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="hero-title text-[72px] md:text-[96px] lg:text-[120px]">
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

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#download"
                className="w-full sm:w-auto border-2 border-primary rounded-xl px-10 py-4 font-bold hover:bg-primary transition text-center"
              >
                DOWNLOAD NOW
              </a>

              <div className="flex gap-3 w-full sm:w-auto justify-center">
                <a
                  href="#download"
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3.5 hover:bg-white/5 transition"
                >
                  <Apple className="size-5 fill-current" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] text-muted-foreground">
                      Download on the
                    </span>
                    <span className="block text-sm font-bold">App Store</span>
                  </span>
                </a>
                <a
                  href="#download"
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-5 py-3.5 hover:bg-white/5 transition"
                >
                  <Play className="size-5 fill-current" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] text-muted-foreground">
                      Get it on
                    </span>
                    <span className="block text-sm font-bold">Google Play</span>
                  </span>
                </a>
              </div>
            </div>

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