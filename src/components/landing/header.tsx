export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="w-8 h-8 rounded-full border-[3px] border-primary relative inline-block">
        <span className="absolute w-2.5 h-2.5 rounded-full bg-primary left-1 top-1" />
      </span>
      <span className="font-extrabold text-xl tracking-wide">GOLONGER</span>
    </a>
  );
}

export function Header() {
  return (
    <header className="h-20 flex items-center justify-between">
      <Logo />

      <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition">
          Features
        </a>
        <a href="#reviews" className="hover:text-foreground transition">
          Reviews
        </a>
        <a href="#download" className="hover:text-foreground transition">
          Download
        </a>
      </nav>

      <a
        href="#download"
        className="hidden md:block border border-border rounded-xl px-6 py-3 text-sm hover:bg-white/5 transition"
      >
        Get the app
      </a>
    </header>
  );
}