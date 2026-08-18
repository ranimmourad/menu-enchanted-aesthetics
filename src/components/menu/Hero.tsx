export function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <header className="relative isolate overflow-hidden">
      <img
        src="/images/delyon-night.jpg"
        alt="La terrasse illuminée du café De Lyon à la tombée du soir"
        width={1920}
        height={1440}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto flex min-h-[92svh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
        {/* "Café · Resto · Terrasse" text removed */}
        
        <button
          onClick={onExplore}
          // Changed mt-36 to mt-96 to push the button lower
          className="rise-in group mt-96 rounded-full border border-primary/40 bg-card/80 px-8 py-3 text-[0.7rem] uppercase tracking-[0.28em] text-primary backdrop-blur-sm transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
          style={{ animationDelay: "120ms" }}
        >
          Découvrir la carte
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="float-slow block h-10 w-px bg-primary/40" />
      </div>
    </header>
  );
}
