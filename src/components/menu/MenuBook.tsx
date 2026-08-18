import { useCallback, useEffect, useMemo, useState } from "react";
import { sections, type Section } from "@/data/menu";

/* ------------------------------------------------------------------ */
/* Page model                                                          */
/* ------------------------------------------------------------------ */

type CoverPage = { kind: "cover" };
type PlacePage = {
  kind: "place";
  image: string;
  title: string;
  subtitle: string;
};
type SectionPage = { kind: "section"; section: Section };
type BackPage = { kind: "back" };

type Page = CoverPage | PlacePage | SectionPage | BackPage;

const placePages: PlacePage[] = [
  {
    kind: "place",
    image: "/images/place-facade.jpg",
    title: "De Lyon · Café Resto",
    subtitle: "La façade et ses bougainvilliers, à l'ombre des arcades",
  },
  {
    kind: "place",
    image: "/images/place-night.jpg",
    title: "La Terrasse des Roses",
    subtitle: "Nos soirées, à la lueur des lampadaires",
  },
  {
    kind: "place",
    image: "/images/place-patio.jpg",
    title: "Le Patio & la Fontaine",
    subtitle: "Sous les macramés, autour de l'eau",
  },
  {
    kind: "place",
    image: "/images/place-van.jpg",
    title: "Le Café Ambulant",
    subtitle: "« Coffee is always a good idea »",
  },
];

/**
 * Order of the book:
 *   Cover
 *   Place (facade)
 *   sections 1-3   (matin, café, boissons)
 *   Place (night)
 *   sections 4-6   (entrées, pizze, pasta)
 *   Place (patio)
 *   sections 7-9   (grill, pains, burgers)
 *   Place (van)
 *   sections 10-11 (crêpes, dolci)
 *   Back cover
 */
function buildPages(): Page[] {
  const pages: Page[] = [{ kind: "cover" }];
  const chunks = [
    sections.slice(0, 3),
    sections.slice(3, 6),
    sections.slice(6, 9),
    sections.slice(9),
  ];
  chunks.forEach((chunk, i) => {
    if (placePages[i]) pages.push(placePages[i]);
    chunk.forEach((section) => pages.push({ kind: "section", section }));
  });
  pages.push({ kind: "back" });
  return pages;
}

/* ------------------------------------------------------------------ */
/* Page renderers                                                      */
/* ------------------------------------------------------------------ */

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
    <li className="py-2">
      <div className="flex items-baseline">
        <span className="text-[0.9rem] font-normal tracking-wide text-foreground">
          {name}
          {tag ? (
            <span className="ml-2 align-middle rounded-full border border-primary/25 bg-accent/60 px-2 py-[0.05rem] text-[0.55rem] font-medium uppercase tracking-[0.12em] text-accent-foreground">
              {tag}
            </span>
          ) : null}
        </span>
        <span className="leader" aria-hidden="true" />
        {price ? (
          <span className="font-display text-base text-primary">
            {price}
            <span className="ml-0.5 text-[0.55rem] uppercase tracking-[0.14em] text-muted-foreground">
              dt
            </span>
          </span>
        ) : (
          <span className="text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground">
            sur demande
          </span>
        )}
      </div>
      {note ? (
        <p className="mt-0.5 max-w-2xl pr-6 text-[0.72rem] font-light leading-relaxed text-muted-foreground">
          {note}
        </p>
      ) : null}
    </li>
  );
}

function CoverFace() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden text-center">
      <img
        src="/images/delyon-night.jpg"
        alt="Terrasse de Lyon"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/55 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-background/60" />
      <div className="relative px-8">
        <p className="text-[0.6rem] uppercase tracking-[0.4em] text-primary sm:text-[0.7rem]">
          Café · Resto · Terrasse
        </p>
        <div className="rule-rose mx-auto mt-6 pb-6">
          <h1 className="font-display text-5xl italic leading-none text-foreground sm:text-7xl">
            Terrasse
            <span className="mt-1 block text-4xl not-italic tracking-[0.08em] sm:text-5xl">
              DE LYON
            </span>
          </h1>
        </div>
        <p className="mx-auto mt-10 max-w-xs text-[0.78rem] font-light leading-relaxed text-muted-foreground">
          La carte, feuille après feuille — du premier café du matin
          à la dernière douceur du soir.
        </p>
        <p className="mt-12 text-[0.6rem] uppercase tracking-[0.32em] text-primary/80">
          Ouvrez le livre →
        </p>
      </div>
    </div>
  );
}

function PlaceFace({ page }: { page: PlacePage }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-end overflow-hidden">
      <img
        src={page.image}
        alt={page.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="relative p-8 text-center sm:p-10">
        <span className="mx-auto mb-4 block h-px w-12 bg-primary/50" />
        <h2 className="font-display text-3xl italic leading-none text-foreground sm:text-4xl">
          {page.title}
        </h2>
        <p className="mt-3 text-[0.78rem] font-light tracking-wide text-muted-foreground">
          {page.subtitle}
        </p>
      </div>
    </div>
  );
}

function SectionFace({ section }: { section: Section }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      {/* Banner */}
      <figure className="relative h-[34%] shrink-0">
        <img
          src={section.image}
          alt={section.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-center">
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-primary">
            {section.eyebrow}
          </p>
          <h2 className="mt-1 font-display text-3xl italic leading-none text-foreground sm:text-4xl">
            {section.title}
          </h2>
          <p className="mt-1 text-[0.72rem] font-light tracking-wide text-muted-foreground">
            {section.tagline}
          </p>
        </figcaption>
      </figure>

      {/* Items */}
      <div className="min-h-0 flex-1 overflow-y-auto bg-card px-6 py-6 sm:px-8">
        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {section.groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-xl text-foreground">{group.title}</h3>
              {group.subtitle ? (
                <p className="mt-0.5 text-[0.66rem] uppercase tracking-[0.14em] text-primary/80">
                  {group.subtitle}
                </p>
              ) : null}
              <span className="mt-2 block h-px w-10 bg-primary/40" />
              <ul className="mt-1 divide-y divide-border/60">
                {group.items.map((item) => (
                  <PriceRow key={group.title + item.name} {...item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BackFace() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden text-center">
      <img
        src="/images/place-patio.jpg"
        alt="Terrasse de Lyon"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative px-8">
        <p className="font-display text-4xl italic text-foreground">Terrasse de Lyon</p>
        <p className="mt-3 text-[0.62rem] uppercase tracking-[0.3em] text-primary">
          Café · Resto · Terrasse
        </p>
        <p className="mx-auto mt-6 max-w-xs text-xs font-light leading-relaxed text-muted-foreground">
          Ouvert tous les jours, du petit déjeuner au dernier dessert.
          Réservation conseillée pour le brunch et les grandes tables.
        </p>
        <p className="mt-8 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
          Prix en dinars tunisiens · taxes comprises
        </p>
      </div>
    </div>
  );
}

function PageFace({ page }: { page: Page }) {
  switch (page.kind) {
    case "cover":
      return <CoverFace />;
    case "place":
      return <PlaceFace page={page} />;
    case "section":
      return <SectionFace section={page.section} />;
    case "back":
      return <BackFace />;
  }
}

/* ------------------------------------------------------------------ */
/* Book shell                                                          */
/* ------------------------------------------------------------------ */

export function MenuBook() {
  const pages = useMemo(buildPages, []);
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState<"next" | "prev" | null>(null);

  const go = useCallback(
    (dir: "next" | "prev") => {
      setIndex((cur) => {
        const target = dir === "next" ? cur + 1 : cur - 1;
        if (target < 0 || target >= pages.length) return cur;
        setFlipping(dir);
        window.setTimeout(() => setFlipping(null), 520);
        return target;
      });
    },
    [pages.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go("next");
      if (e.key === "ArrowLeft") go("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const atStart = index === 0;
  const atEnd = index === pages.length - 1;

  return (
    <div className="bg-warm min-h-screen">
      {/* Top bar */}
      <div className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <a
            href="/"
            className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
          >
            ← Site
          </a>
          <span className="font-display text-lg italic tracking-wide text-foreground">
            Le Livre de la Carte
          </span>
          <span className="w-12 text-right text-[0.62rem] uppercase tracking-[0.2em] text-primary">
            {index + 1}/{pages.length}
          </span>
        </div>
      </div>

      {/* Book stage */}
      <div className="flex min-h-screen items-center justify-center px-4 pb-28 pt-24">
        <div className="book-stage w-full max-w-2xl">
          <div className="book-shell">
            {/* spine shadow */}
            <span className="book-spine" aria-hidden="true" />
            <div
              key={index}
              className={`book-page shadow-lift ${
                flipping === "next"
                  ? "flip-in-next"
                  : flipping === "prev"
                    ? "flip-in-prev"
                    : ""
              }`}
            >
              <PageFace page={pages[index]} />
            </div>
          </div>

          {/* Tap zones for mobile */}
          <button
            aria-label="Page précédente"
            onClick={() => go("prev")}
            disabled={atStart}
            className="book-tap left-0"
          />
          <button
            aria-label="Page suivante"
            onClick={() => go("next")}
            disabled={atEnd}
            className="book-tap right-0"
          />
        </div>
      </div>

      {/* Bottom controls */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-5 py-4">
          <button
            onClick={() => go("prev")}
            disabled={atStart}
            className="rounded-full border border-primary/40 px-6 py-2 text-[0.66rem] uppercase tracking-[0.22em] text-primary transition-all hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-30"
          >
            ← Précédent
          </button>

          <div className="hidden flex-1 items-center justify-center gap-1.5 sm:flex">
            {pages.map((_, i) => (
              <button
                key={i}
                aria-label={`Aller à la page ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go("next")}
            disabled={atEnd}
            className="rounded-full border border-primary/40 px-6 py-2 text-[0.66rem] uppercase tracking-[0.22em] text-primary transition-all hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-30"
          >
            Suivant →
          </button>
        </div>
      </div>
    </div>
  );
}
