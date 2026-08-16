import { Reveal } from "./Reveal";

import facade from "@/assets/facade.webp.asset.json";
import patio from "@/assets/patio-pool.webp.asset.json";
import van from "@/assets/coffee-van.jpeg.asset.json";
import breakfast from "@/assets/breakfast.jpg.asset.json";
import coffee from "@/assets/coffee.jpg.asset.json";
import drinks from "@/assets/drinks.jpg.asset.json";
import pizza from "@/assets/pizza.jpg.asset.json";
import pasta from "@/assets/pasta.jpg.asset.json";
import plats from "@/assets/plats.jpg.asset.json";
import sandwich from "@/assets/sandwich.jpg.asset.json";
import sweet from "@/assets/sweet.jpg.asset.json";
import dessert from "@/assets/dessert.jpg.asset.json";

const tiles = [
  { src: facade.url, alt: "Façade du café De Lyon avec ses bougainvilliers", span: "sm:col-span-2 sm:row-span-2" },
  { src: coffee.url, alt: "Cappuccino au soleil" },
  { src: breakfast.url, alt: "Petit déjeuner sur table de marbre" },
  { src: patio.url, alt: "Le patio et sa fontaine", span: "sm:col-span-2" },
  { src: pizza.url, alt: "Pizza margherita" },
  { src: pasta.url, alt: "Tagliatelle au parmesan" },
  { src: drinks.url, alt: "Mojitos et cocktails de fruits" },
  { src: sweet.url, alt: "Crêpes et gaufres au chocolat" },
  { src: plats.url, alt: "Filet de bœuf et poisson grillé" },
  { src: van.url, alt: "Notre coin café vintage" },
  { src: sandwich.url, alt: "Sandwichs, panuzzo et tacos" },
  { src: dessert.url, alt: "Tiramisu et cheesecake" },
];

export function Mosaic() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="rule-rose mb-16 text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-primary">
              Le lieu & la table
            </p>
            <h2 className="mt-4 font-display text-4xl italic text-foreground sm:text-5xl">
              Douze fenêtres sur la terrasse
            </h2>
          </div>
        </Reveal>
        <div className="grid auto-rows-[130px] grid-cols-2 gap-3 sm:auto-rows-[150px] sm:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal
              key={tile.src}
              delay={i * 45}
              className={`h-full ${tile.span ?? ""}`}
            >
              <figure className="tile-zoom h-full w-full rounded-sm shadow-soft">
                <img
                  src={tile.src}
                  alt={tile.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
