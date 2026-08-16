import { useEffect } from "react";

import night from "@/assets/delyon-night.jpg.asset.json";
import facade from "@/assets/facade.webp.asset.json";
import patio from "@/assets/patio-pool.webp.asset.json";
import van from "@/assets/coffee-van.jpeg.asset.json";

const photos = [
  { src: night.url, alt: "La Terrasse des Roses illuminée le soir" },
  { src: facade.url, alt: "La façade De Lyon et ses bougainvilliers" },
  { src: patio.url, alt: "Le patio, sa fontaine et ses parasols blancs" },
  { src: van.url, alt: "Notre camionnette café vintage" },
];

export function Gallery({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galerie"
      className="fixed inset-0 z-[70] overflow-y-auto bg-background/95 backdrop-blur-md"
    >
      <div className="mx-auto max-w-5xl px-5 py-16">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-primary">
              Le lieu
            </p>
            <h2 className="mt-3 font-display text-4xl italic text-foreground sm:text-5xl">
              Notre galerie
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-primary/40 px-5 py-2 text-[0.66rem] uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Fermer
          </button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {photos.map((p, i) => (
            <figure
              key={p.src}
              className="tile-zoom rise-in rounded-sm shadow-soft"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-[260px] w-full object-cover sm:h-[320px]"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
