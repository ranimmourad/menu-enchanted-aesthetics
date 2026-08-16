import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { sections } from "@/data/menu";
import { Hero } from "@/components/menu/Hero";
import { Mosaic } from "@/components/menu/Mosaic";
import { MenuSection } from "@/components/menu/MenuSection";
import { Reveal } from "@/components/menu/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terrasse de Lyon — Carte du Café Resto" },
      {
        name: "description",
        content:
          "La carte de Terrasse de Lyon : petits déjeuners, cafés Lavazza, pizze au four, pasta fresca, grillades, sandwichs et douceurs maison.",
      },
      { property: "og:title", content: "Terrasse de Lyon — Carte du Café Resto" },
      {
        property: "og:description",
        content:
          "Petits déjeuners, cafés Lavazza, pizze, pasta fresca, grillades et douceurs — la carte complète de Terrasse de Lyon.",
      },
    ],
  }),
  component: Index,
});

function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        solid ? "border-b border-border/70 bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className="font-display text-lg italic tracking-wide text-foreground"
        >
          Terrasse de Lyon
        </a>
        <div className="hidden flex-wrap items-center gap-5 lg:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
            >
              {s.title}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-[0.68rem] uppercase tracking-[0.2em] text-primary lg:hidden"
          aria-expanded={open}
        >
          {open ? "Fermer" : "Carte"}
        </button>
      </div>
      {open ? (
        <div className="grid grid-cols-2 gap-2 border-t border-border/70 bg-background/95 px-5 py-4 backdrop-blur-md lg:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="py-1 text-[0.72rem] tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {s.title}
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  );
}

function Index() {
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <div id="top" className="bg-warm min-h-screen">
      <Nav />
      <Hero
        onExplore={() =>
          menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      />

      <Mosaic />

      <div ref={menuRef}>
        <Reveal>
          <div className="rule-rose mx-auto max-w-3xl px-5 pb-6 pt-10 text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-primary">
              La carte
            </p>
            <h2 className="mt-4 font-display text-4xl italic text-foreground sm:text-6xl">
              De l'aube au dernier café
            </h2>
            <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground">
              Tous nos prix sont en dinars tunisiens, taxes comprises. Nos plats
              sont préparés à la commande, avec des produits frais du jour.
            </p>
          </div>
        </Reveal>

        {sections.map((section, i) => (
          <MenuSection key={section.id} section={section} index={i} />
        ))}
      </div>

      <footer className="border-t border-border/70 py-16 text-center">
        <p className="font-display text-3xl italic text-foreground">Terrasse de Lyon</p>
        <p className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-primary">
          Café · Resto · Terrasse
        </p>
        <p className="mx-auto mt-6 max-w-md px-5 text-xs font-light leading-relaxed text-muted-foreground">
          Ouvert tous les jours, du petit déjeuner au dernier dessert. Réservation
          conseillée pour le brunch et les grandes tables.
        </p>
      </footer>
    </div>
  );
}
