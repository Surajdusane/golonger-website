import {
  BellRing,
  Dumbbell,
  ListChecks,
  Lock,
  PlayCircle,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Guided daily sessions",
    description: "Short guided routines you can follow at your own pace.",
  },
  {
    icon: TrendingUp,
    title: "Session history",
    description: "See your completed sessions and streaks in one place.",
  },
  {
    icon: ListChecks,
    title: "Structured sessions",
    description: "Clear on-screen timing and instructions.",
  },
  {
    icon: Lock,
    title: "No account required",
    description:
      "Your exercise history is stored on your device.",
  },
  {
    icon: BellRing,
    title: "Gentle reminders",
    description:
      "Optional reminders to help you keep a routine.",
  },
  {
    icon: PlayCircle,
    title: "Follow-along video",
    description: "Clear demonstrations with timers and cues.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[.3em] text-primary font-semibold">
            WHY GOLONGER
          </p>
          <h2 className="hero-title text-6xl md:text-7xl mt-4">
            SESSIONS THAT FIT{" "}
            <span className="text-primary">YOUR DAY</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Short guided sessions you can do at home.
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
