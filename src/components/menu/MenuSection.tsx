import { useState } from "react";
import type { Section } from "@/data/menu";
import { Reveal } from "./Reveal";

function PriceRow({
  name,
  price,
  note,
  tag,
}: {
  name: string;
  price?: string;
  note?: string;
  tag?: string;
}) {
  return (
    <li className="group py-3">
      <div className="flex items-baseline">
        <span className="font-sans text-[0.95rem] font-normal tracking-wide text-foreground transition-colors group-hover:text-primary">
          {name}
          {tag ? (
            <span className="ml-2 align-middle rounded-full border border-primary/25 bg-accent/60 px-2 py-[0.1rem] text-[0.6rem] font-medium uppercase tracking-[0.14em] text-accent-foreground">
              {tag}
            </span>
          ) : null}
        </span>
        <span className="leader" aria-hidden="true" />
        {price ? (
          <span className="font-display text-lg text-primary">
            {price}
            <span className="ml-0.5 text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
              dt
            </span>
          </span>
        ) : (
          <span className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
            sur demande
          </span>
        )}
      </div>
      {note ? (
        <p className="mt-1 max-w-2xl pr-10 text-[0.78rem] font-light leading-relaxed text-muted-foreground">
          {note}
        </p>
      ) : null}
    </li>
  );
}

export function MenuSection({ section, index }: { section: Section; index: number }) {
  const [active, setActive] = useState<string>("Tous");
  const filtered = section.filterLabel
    ? active === "Tous"
      ? section.groups
      : section.groups.filter((g) => g.title === active)
    : section.groups;

  return (
    <section id={section.id} className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Photo banner */}
        <Reveal>
          <figure className="tile-zoom relative rounded-sm shadow-soft">
            <img
              src={section.image}
              alt={section.title}
              loading="lazy"
              width={1600}
              height={900}
              className="h-[220px] w-full object-cover sm:h-[320px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-center sm:p-8">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">
                {section.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-4xl italic leading-none text-foreground sm:text-5xl">
                {section.title}
              </h2>
              <p className="mt-3 text-[0.78rem] font-light tracking-wide text-muted-foreground">
                {section.tagline}
              </p>
            </figcaption>
          </figure>
        </Reveal>

        {section.filterLabel ? (
          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <span className="mr-2 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                {section.filterLabel}
              </span>
              {["Tous", ...section.groups.map((g) => g.title)].map((label) => (
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  aria-pressed={active === label}
                  className={`rounded-full border px-4 py-1.5 text-[0.72rem] tracking-[0.1em] transition-all duration-300 ${
                    active === label
                      ? "border-primary bg-primary text-primary-foreground shadow-soft"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </Reveal>
        ) : null}

        <div className="mt-12 grid gap-x-14 gap-y-12 md:grid-cols-2">
          {filtered.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="rounded-sm border border-border/70 bg-card px-6 py-7 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:px-8">
                <h3 className="font-display text-2xl text-foreground">{group.title}</h3>
                {group.subtitle ? (
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.16em] text-primary/80">
                    {group.subtitle}
                  </p>
                ) : null}
                <span className="mt-4 block h-px w-12 bg-primary/40" />
                <ul className="mt-3 divide-y divide-border/60">
                  {group.items.map((item) => (
                    <PriceRow key={group.title + item.name} {...item} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-center font-display text-sm italic text-muted-foreground">
          — {String(index + 1).padStart(2, "0")} —
        </p>
      </div>
    </section>
  );
}
