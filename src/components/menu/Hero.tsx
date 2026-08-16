import terrace from "@/assets/terrace.jpg.asset.json";

export function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <header className="relative isolate overflow-hidden">
      <img
        src={terrace.url}
        alt="La terrasse ensoleillée de Terrasse de Lyon"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
        <p className="rise-in text-[0.65rem] uppercase tracking-[0.42em] text-primary">
          Café · Resto · Terrasse
        </p>
        <h1
          className="rise-in mt-6 font-display text-6xl italic leading-[0.95] text-foreground sm:text-8xl"
          style={{ animationDelay: "120ms" }}
        >
          Terrasse
          <span className="block not-italic tracking-[0.06em]">de Lyon</span>
        </h1>
        <span
          className="rise-in mt-8 block h-px w-24 bg-primary/50"
          style={{ animationDelay: "240ms" }}
        />
        <p
          className="rise-in mt-8 max-w-xl text-sm font-light leading-relaxed tracking-wide text-muted-foreground sm:text-base"
          style={{ animationDelay: "300ms" }}
        >
          Un jardin de lumière, une carte qui voyage de Naples à Tunis. Cafés
          Lavazza, pâtes fraîches, pizze au four et douceurs à toute heure.
        </p>
        <button
          onClick={onExplore}
          className="rise-in group mt-12 rounded-full border border-primary/40 bg-card/80 px-8 py-3 text-[0.7rem] uppercase tracking-[0.28em] text-primary backdrop-blur-sm transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
          style={{ animationDelay: "380ms" }}
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
