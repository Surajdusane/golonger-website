import {
  BellRing,
  Dumbbell,
  HeartPulse,
  Lock,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Guided daily sessions",
    description:
      "Five-minute routines that adapt to your strength, your schedule, and your goals.",
  },
  {
    icon: TrendingUp,
    title: "Progress you can see",
    description:
      "Track reps, holds, and milestones as your pelvic floor gets stronger week by week.",
  },
  {
    icon: ShieldCheck,
    title: "Science-backed",
    description:
      "Exercises grounded in pelvic floor physiotherapy, explained in plain language.",
  },
  {
    icon: Lock,
    title: "Private by design",
    description:
      "Your health data stays on your device. No accounts, no sharing, no ads.",
  },
  {
    icon: BellRing,
    title: "Gentle reminders",
    description:
      "Discreet nudges that build the habit - without breaking your focus.",
  },
  {
    icon: HeartPulse,
    title: "Confidence, restored",
    description:
      "Better strength and control support your wellness and your relationships.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[.3em] text-primary font-semibold">
            WHY GOLONGER
          </p>
          <h2 className="hero-title text-6xl md:text-7xl mt-4">
            TRAINING THAT FITS{" "}
            <span className="text-primary">YOUR LIFE</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Short, science-backed sessions designed around your day - not the
            other way around.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 transition"
            >
              <span className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center">
                <feature.icon className="size-5 text-primary" />
              </span>
              <h3 className="font-bold text-lg mt-5">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}