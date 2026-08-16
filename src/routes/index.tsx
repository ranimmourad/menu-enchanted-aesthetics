import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { sections } from "@/data/menu";
import { Hero } from "@/components/menu/Hero";
import { CategoryGrid } from "@/components/menu/CategoryGrid";
import { Gallery } from "@/components/menu/Gallery";
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

function Nav({ onGallery }: { onGallery: () => void }) {
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
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a
          href="#top"
          className="shrink-0 whitespace-nowrap font-display text-lg italic tracking-wide text-foreground"
        >
          Terrasse de Lyon
        </a>
        <div className="hidden min-w-0 flex-1 items-center justify-end gap-5 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap text-[0.64rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              {s.short}
            </a>
          ))}
          <button
            onClick={onGallery}
            className="whitespace-nowrap text-[0.64rem] uppercase tracking-[0.18em] text-primary transition-opacity hover:opacity-70"
          >
            Galerie
          </button>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto text-[0.68rem] uppercase tracking-[0.2em] text-primary md:hidden"
          aria-expanded={open}
        >
          {open ? "Fermer" : "Carte"}
        </button>
      </div>
      {open ? (
        <div className="grid grid-cols-2 gap-2 border-t border-border/70 bg-background/95 px-5 py-4 backdrop-blur-md md:hidden">
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
          <button
            onClick={() => {
              setOpen(false);
              onGallery();
            }}
            className="py-1 text-left text-[0.72rem] tracking-wide text-primary"
          >
            Galerie
          </button>
        </div>
      ) : null}
    </nav>
  );
}

function Index() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [gallery, setGallery] = useState(false);

  return (
    <div id="top" className="bg-warm min-h-screen">
      <Nav onGallery={() => setGallery(true)} />
      <Gallery open={gallery} onClose={() => setGallery(false)} />
      <Hero
        onExplore={() =>
          menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      />

      <CategoryGrid />


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
