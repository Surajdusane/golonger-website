import Image from "next/image";

import heroImage from "@/../public/hero-image.webp";
import StoreIcon from "@/components/site/store-icon";
import { siteConfig } from "@/lib/site";

const storeLink = siteConfig.appStoreUrl || siteConfig.googlePlayUrl;

export function Hero() {
  return (
    <section id="top" className="grid-bg relative min-h-screen">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 md:pt-28">
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
              GUIDED
              <br />
              PELVIC FLOOR
              <br />
              <span className="text-primary">TRAINING</span>
            </h1>

            <p className="text-muted-foreground text-lg mt-4 max-w-md mx-auto lg:mx-0">
              Short, guided pelvic floor exercise sessions you can follow at
              home. No account required.
            </p>

            {storeLink ? (
              <a
                href={storeLink}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary px-10 py-4 text-center font-bold transition hover:bg-primary sm:w-auto"
              >
                <StoreIcon
                  type={siteConfig.appStoreUrl ? "appstore" : "playstore"}
                  size={20}
                />
                DOWNLOAD NOW
              </a>
            ) : (
              <>
                <a
                  href="#features"
                  className="mt-7 w-full sm:w-auto inline-block border-2 border-primary rounded-xl px-10 py-4 font-bold hover:bg-primary transition text-center"
                >
                  SEE HOW IT WORKS →
                </a>
                <p className="text-muted-foreground text-xs tracking-[.25em] mt-4">
                  COMING SOON TO THE APP STORE
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
