import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I never thought five minutes could change how I feel. Three weeks in and I'm stronger, more confident - and I notice it every day.",
    name: "Maya R.",
    meta: "Verified user · 34",
  },
  {
    quote:
      "The sessions are short enough that I never skip them. The progress tracking keeps me honest in the best way.",
    name: "James K.",
    meta: "Verified user · 41",
  },
  {
    quote:
      "Discreet, private, and genuinely science-backed. Exactly what I was looking for.",
    name: "Priya S.",
    meta: "Verified user · 29",
  },
  {
    quote:
      "My partner noticed the difference before I even told them I was training. That says everything.",
    name: "Daniel M.",
    meta: "Verified user · 38",
  },
  {
    quote:
      "It meets me where I am. Beginner-friendly, no judgment, and real results.",
    name: "Alia T.",
    meta: "Verified user · 27",
  },
  {
    quote:
      "The reminder was the only push I needed. Four months in, it's just part of my routine now.",
    name: "Sam W.",
    meta: "Verified user · 45",
  },
];

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 text-gold fill-current" />
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[.3em] text-primary font-semibold">
            REVIEWS
          </p>
          <h2 className="hero-title text-6xl md:text-7xl mt-4">
            WHAT PEOPLE ARE{" "}
            <span className="text-primary">SAYING</span>
          </h2>
          <div className="flex items-center justify-center gap-2.5 mt-5 text-sm text-muted-foreground">
            <Stars />
            <span className="font-bold text-foreground">4.8 / 5</span>
            <span>from 12,400+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col"
            >
              <Stars />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90 flex-1">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-sm">
                    {review.name}
                  </span>
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {review.meta}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}