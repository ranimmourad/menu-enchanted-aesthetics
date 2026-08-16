import { sections } from "@/data/menu";
import { Reveal } from "./Reveal";

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="rule-rose mb-16 text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-primary">
              Choisissez votre envie
            </p>
            <h2 className="mt-4 font-display text-4xl italic text-foreground sm:text-5xl">
              Les catégories de la carte
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {sections.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <a
                href={`#${s.id}`}
                className="tile-zoom group relative block rounded-sm shadow-soft transition-shadow duration-500 hover:shadow-lift"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-40 w-full object-cover sm:h-48"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-center">
                  <span className="block text-[0.58rem] uppercase tracking-[0.28em] text-primary">
                    {s.short}
                  </span>
                  <span className="mt-1 block font-display text-xl italic leading-tight text-foreground">
                    {s.title}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
