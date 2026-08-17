import Image from "next/image";

import heroImage from "@/../public/hero-image.png";
import { Header } from "./header";

export function Hero() {
  return (
    <section id="top" className="grid-bg min-h-screen relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Header />

        <div className="grid lg:grid-cols-2 gap-10 items-center py-6 md:py-8">
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src={heroImage}
              alt="Golonger app hero screen"
              priority
              className="w-48 md:w-56 lg:w-60 h-auto"
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

            <p className="text-muted-foreground text-lg mt-4 max-w-md mx-auto lg:mx-0">
              Guided pelvic floor training for sexual health and wellness. Five
              minutes a day - built into your routine.
            </p>

            <a
              href="#download"
              className="mt-7 w-full sm:w-auto inline-block border-2 border-primary rounded-xl px-10 py-4 font-bold hover:bg-primary transition text-center"
            >
              DOWNLOAD NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}