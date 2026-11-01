const steps = [
  {
    number: "01",
    title: "Choose a session",
    description: "Open the app and pick a guided session.",
  },
  {
    number: "02",
    title: "Follow along",
    description:
      "Use the on-screen video, timer, and cues to follow each session.",
  },
  {
    number: "03",
    title: "Keep your record",
    description:
      "Completed sessions are recorded on your device so you can see your progress.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[.3em] text-primary font-semibold">
            HOW IT WORKS
          </p>
          <h2 className="hero-title text-6xl md:text-7xl mt-4">
            THREE SIMPLE <span className="text-primary">STEPS</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            No account. No setup. Just open the app and start.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-card border border-border rounded-2xl p-7"
            >
              <span className="text-primary font-bold text-3xl tracking-wide">
                {step.number}
              </span>
              <h3 className="font-bold text-lg mt-4">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
