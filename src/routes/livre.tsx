import { createFileRoute } from "@tanstack/react-router";

import { MenuBook } from "@/components/menu/MenuBook";

export const Route = createFileRoute("/livre")({
  head: () => ({
    meta: [
      { title: "Terrasse de Lyon — Le Livre de la Carte" },
      {
        name: "description",
        content:
          "Feuilletez la carte de Terrasse de Lyon comme un livre : petits déjeuners, cafés Lavazza, pizze, pasta, grillades et douceurs maison.",
      },
      { property: "og:title", content: "Terrasse de Lyon — Le Livre de la Carte" },
      {
        property: "og:description",
        content:
          "La carte du café resto Terrasse de Lyon, présentée page après page.",
      },
    ],
  }),
  component: MenuBook,
});
