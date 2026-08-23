export type Item = {
  name: string;
  price?: string;
  note?: string;
  tag?: string;
};

export type Group = {
  title: string;
  subtitle?: string;
  items: Item[];
};

export type Section = {
  id: string;
  short: string;
  eyebrow: string;
  title: string;
  tagline: string;
  image: string;
  groups: Group[];
  filterLabel?: string;
};

export const sections: Section[] = [
  {
    id: "reveil",
    short: "Matin",
    eyebrow: "01 — Le matin",
    title: "Le Réveil Doux",
    tagline: "Formules du petit déjeuner, servies jusqu'à midi",
    image: "/images/breakfast.jpg",
    groups: [
      {
        title: "Les Formules",
        items: [
          {
            name: "Petit Cœur",
            price: "10",
            note: "Café au choix, viennoiserie, eau 0,5L",
          },
          {
            name: "Coup de Cœur",
            price: "19",
            note: "Café au choix, viennoiserie, eau 0,5L, jus (citronnade ou orange), omelette",
          },
          {
            name: "Le Cœur Doux",
            price: "23",
            note: "Café au choix, jus frais, eau 0,5L, omelette nature, corbeille de viennoiseries, pain, beurre, chamia, confiture, charcuterie, assortiment de fromages",
          },
          {
            name: "Le Cœur Vaillant · Duo",
            price: "40",
            tag: "Pour 2",
            note: "2 cafés, eau 1L, 2 jus frais, 2 milkshakes, 2 yaourts au granola et fruits de saison, 2 omelettes nature, charcuterie, fromages, viennoiseries, beurre, confiture, pâte à tartiner, 2 mini sandwichs, 2 crêpes ou pancakes chocolat",
          },
          {
            name: "Brunch Terrasse de Lyon",
            price: "100",
            tag: "6 personnes",
            note: "6 cafés, 2 eaux 1L, 6 jus frais, 6 milkshakes, 6 yaourts au granola, 4 omelettes nature, 2 ojja œufs & merguez, 6 mini sandwichs, charcuterie, fromages, frites, viennoiseries, pain maison, pain demi & malawi, huile d'olive, ricotta, chamia, confiture, beurre, chocolat, 2 rfissa, 2 madmouja, banbaloni, yoyo, 2 crêpes chocolat, 2 pancakes chocolat, 2 fondants chocolat, asidet zgougou",
          },
          {
            name: "Bon Bon",
            price: "17",
            note: "Chocolat au lait, lait chaud ou thé, bol de céréales, tartine chocolat, jus frais",
          },
          {
            name: "La La",
            price: "17",
            note: "Chocolat au lait, pancake, jus frais, œuf au choix",
          },
          {
            name: "Le Tunisien",
            price: "40",
            note: "2 cafés, 2 jus frais, malawi, huile d'olive, ricotta, chamia, ojja merguez ou mokli merguez, eau 1L, confiture, beurre, droo, banbaloni",
          },
        ],
      },
      {
        title: "Les Suppléments",
        items: [
          { name: "Fromage sicilien persil ou blanc", price: "7" },
          { name: "Gruyère", price: "7" },
          { name: "Charcuterie", price: "9" },
          { name: "Omelette nature", price: "8" },
          { name: "Nutella", price: "4" },
          { name: "Viennoiserie", price: "3" },
          { name: "Cake maison", price: "3" },
          { name: "Œuf à la coque", price: "3" },
          { name: "Chamia, beurre ou confiture", price: "3" },
          { name: "Pain demi, pain maison ou malawi", price: "3" },
        ],
      },
    ],
  },
  {
    id: "cafe",
    short: "Café",
    eyebrow: "02 — La pause",
    title: "L'Heure du Café",
    tagline: "Torréfaction classique, Lavazza & créations signature",
    image: "/images/coffee.jpg",
    groups: [
      {
        title: "Café Classique",
        items: [
          { name: "Expresso", price: "6" },
          { name: "Americano", price: "6,5" },
          { name: "Capucin", price: "6,5" },
          { name: "Café crème", price: "7" },
          { name: "Nescafé au lait", price: "7" },
          { name: "Chocolat au lait", price: "7" },
          { name: "Cappuccino", price: "10" },
          { name: "Cappuccino chantilly", price: "12" },
          { name: "Turkish coffee", price: "10" },
          {
            name: "Turkish coffee & pâtisseries tunisiennes",
            note: "Assortiment de la maison",
          },
          {
            name: "Birthday coffee",
            note: "Café au choix, chantilly et bougie",
          },
        ],
      },
      {
        title: "Espresso & Lavazza",
        subtitle: "Nos cafés d'exception — mêmes tarifs Lavazza",
        items: [
          { name: "Expresso", price: "7", tag: "Lavazza" },
          { name: "Expresso américain", price: "7,5", tag: "Lavazza" },
          { name: "Capucin", price: "7,5", tag: "Lavazza" },
          { name: "Café crème", price: "8", tag: "Lavazza" },
          { name: "Cappuccino", price: "14", tag: "Lavazza" },
          { name: "Capucin Nestlé", price: "10" },
          { name: "Café crème Nestlé", price: "12" },
          { name: "Supplément Nestlé", price: "3" },
        ],
      },
      {
        title: "Signature Terrasse de Lyon",
        items: [
          {
            name: "Café signature au choix",
            price: "12",
            note: "Caramel, noisette, vanille ou spéculoos",
          },
          { name: "Café liégeois", price: "14", note: "Café, glace, chantilly" },
          {
            name: "Café viennois",
            price: "15",
            note: "Café, glace vanille, crème chantilly",
          },
        ],
      },
      {
        title: "Frappuccinos",
        items: [
          { name: "Caramel", price: "14" },
          { name: "Vanille", price: "14" },
          { name: "Oréo", price: "14" },
          { name: "Spéculoos", price: "14" },
          { name: "Ferrero Rocher", price: "14" },
          { name: "Terrasse de Lyon", price: "18", note: "Nutella & fruits secs" },
        ],
      },
      {
        title: "Chocolats Chauds",
        items: [
          { name: "Hot Dark", price: "14" },
          { name: "Hot Nutella", price: "16" },
          { name: "Hot Spéculoos", price: "14" },
          { name: "Hot Ferrero", price: "14" },
          { name: "Hot Caramel", price: "14" },
          { name: "Hot Vanille", price: "14" },
          { name: "Hot Banane", price: "14" },
          { name: "Hot Noisette", price: "14" },
        ],
      },
      {
        title: "Thés & Infusions",
        items: [
          { name: "Thé à la menthe fraîche", price: "6" },
          { name: "Thé infusion", price: "8" },
          { name: "Thé aux amandes", price: "12" },
          { name: "Thé aux pignons", price: "16" },
        ],
      },
    ],
  },
  {
    id: "fraicheur",
    short: "Boissons",
    eyebrow: "03 — Les verres",
    title: "Fraîcheur & Bulles",
    tagline: "Mojitos, cocktails de fruits, sodasodas et glaces",
    image: "/images/drinks.jpg",
    groups: [
      {
        title: "Soft Drinks",
        items: [
          { name: "Eau minérale 1L", price: "5" },
          { name: "Eau gazéifiée 1L", price: "5" },
          {
            name: "Soda",
            price: "7",
            note: "Coca-Cola, Coca Light, Fanta, Fanta Citron, Boga",
          },
          { name: "Boisson énergétique", price: "12", note: "Red Bull, Shark" },
        ],
      },
      {
        title: "Cocktails Maison",
        items: [
          {
            name: "Passion",
            price: "18",
            note: "Banane, dattes, lait, fruits secs, grenadine",
          },
          {
            name: "Rose de Sable",
            price: "18",
            note: "Glace fraise & citron, jus de fraise, banane au lait",
          },
          {
            name: "Tropicana",
            price: "18",
            note: "Banane, fruits secs, ananas, fraise",
          },
          {
            name: "Maracana",
            price: "18",
            note: "Fruits de saison, boule de glace au choix, chantilly",
          },
        ],
      },
      {
        title: "Mojitos",
        items: [
          {
            name: "Virgin Mojito",
            price: "14",
            note: "Menthe fraîche, citron vert, sucre de canne, Sprite",
          },
          { name: "Apple Mojito", price: "15", note: "Menthe, citron vert, pomme, Sprite" },
          {
            name: "Mojito Framboise",
            price: "15",
            note: "Menthe, citron vert, framboise, Sprite",
          },
          { name: "Blue Mojito", price: "15" },
          { name: "Mojito Fraise", price: "16", note: "Menthe, citron vert, fraise, Sprite" },
          {
            name: "Red Bull Mojito",
            price: "18",
            note: "Menthe, citron vert, Red Bull, Sprite",
          },
        ],
      },
      {
        title: "Glaces",
        items: [
          { name: "2 boules de glace", price: "12" },
          { name: "3 boules de glace", price: "16" },
          { name: "Banana Split", price: "22" },
        ],
      },
    ],
  },
  {
    id: "entrees",
    short: "Entrées",
    eyebrow: "04 — Pour commencer",
    title: "Le Prélude",
    tagline: "Entrées chaudes et salades du marché",
    image: "/images/starters.jpg",
    groups: [
      {
        title: "Chaudes",
        items: [
          { name: "Brik au thon", price: "10" },
          { name: "Brik à la chevrette", price: "12" },
          { name: "Gratin poulet & champignons", price: "22" },
          { name: "Calamars dorés", price: "24" },
        ],
      },
      {
        title: "Froides",
        items: [
          { name: "Salade méchouia", price: "14" },
          { name: "Salade César", price: "22" },
          { name: "Salade niçoise", price: "22" },
          { name: "Salade fruits de mer", price: "27" },
        ],
      },
    ],
  },
  {
    id: "pizze",
    short: "Pizze",
    eyebrow: "05 — Dal forno",
    title: "Le Pizze",
    tagline: "Pâte du jour, cuisson au four — comme à Napoli",
    image: "/images/pizza.jpg",
    groups: [
      {
        title: "Le Nostre Pizze",
        items: [
          { name: "Margherita", price: "18", note: "Sauce tomate, mozzarella" },
          {
            name: "Pizza Ortolana",
            price: "20",
            note: "Sauce tomate, mozzarella, légumes sautés",
          },
          {
            name: "Pizza al Tonno",
            price: "22",
            note: "Sauce tomate, mozzarella, thon, olives noires",
          },
          {
            name: "Pizza Regina",
            price: "24",
            note: "Sauce tomate, mozzarella, jambon, champignons",
          },
          { name: "Pizza ai Peperoni", price: "24", note: "Sauce tomate, mozzarella, pepperoni" },
          {
            name: "Quattro Formaggi",
            price: "26",
            note: "Sauce blanche, mozzarella, gorgonzola, parmesan, emmental",
          },
          {
            name: "Pizza Pollo e Funghi",
            price: "26",
            note: "Sauce tomate, mozzarella, poulet, champignons frais",
          },
          {
            name: "Pizza Messicana",
            price: "27",
            note: "Sauce tomate, viande hachée, mozzarella, poivrons, parmesan",
          },
          { name: "Pizza ai Frutti di Mare", price: "30" },
          { name: "Quattro Stagioni", price: "30" },
        ],
      },
    ],
  },
  {
    id: "paste",
    short: "Pasta",
    eyebrow: "06 — Fatta in casa",
    title: "La Pasta",
    tagline: "Pâtes fraîches, sauces blanches et rouges",
    image: "/images/pasta.jpg",
    groups: [
      {
        title: "Sugo Bianco · Sauce blanche",
        items: [
          {
            name: "Pasta della Regina",
            price: "26",
            note: "Poulet, champignons, jambon, basilic, tomates cerises",
          },
          { name: "Ravioli alla Crema di Parmigiano", price: "26" },
          { name: "Tagliatelle al Parmigiano", price: "26" },
          {
            name: "Spaghetti alla Carbonara",
            price: "27",
            note: "Sauce blanche, jambon fumé, œuf, basilic, parmesan",
          },
          {
            name: "Penne ai Quattro Formaggi",
            price: "28",
            note: "Sauce blanche, gruyère, roquefort, gouda, parmesan, tomates cerises, basilic",
          },
          {
            name: "Pasta al Pesto",
            price: "28",
            note: "Crème fraîche, basilic, tomates cerises",
          },
          { name: "Tagliatelle al Salmone", price: "32" },
        ],
      },
      {
        title: "Sugo Rosso · Sauce rouge",
        items: [
          { name: "Penne all'Arrabbiata", price: "22" },
          {
            name: "Spaghetti alla Puttanesca",
            price: "24",
            note: "Sauce tomate, thon, câpres, basilic, olives, piment de Cayenne",
          },
          {
            name: "Spaghetti alla Bolognese",
            price: "26",
            note: "Pâte fraîche, viande hachée",
          },
          { name: "Lasagne alla Bolognese", price: "26" },
          {
            name: "Pasta Mare e Monti",
            price: "28",
            tag: "Rosé",
            note: "Sauce rosée, champignons frais, crevettes, basilic, tomates cerises",
          },
          {
            name: "Spaghetti ai Frutti di Mare",
            price: "32",
            note: "Crevettes, seiches, chevrettes, moules",
          },
          { name: "Lasagne ai Frutti di Mare", price: "34" },
        ],
      },
    ],
  },
  {
    id: "grill",
    short: "Grill",
    eyebrow: "07 — Le grand plat",
    title: "La Table du Grill",
    tagline: "Viandes, poissons et spécialités de la maison",
    image: "/images/plats.jpg",
    groups: [
      {
        title: "Du Filet · Viandes",
        items: [
          { name: "Escalope de poulet grillée", price: "25", note: "Riz, salade verte ou légumes sautés, frites" },
          { name: "Escalope panée", price: "26", note: "Riz, salade verte ou légumes sautés, frites" },
          {
            name: "Émincé de poulet sauce champignons",
            price: "28",
            note: "Riz, salade verte ou légumes sautés, frites",
          },
          {
            name: "Cordon bleu revisité",
            price: "28",
            note: "Escalope farcie au jambon, sauce blanche, thym, safran, parmesan, noix de muscade, légumes, pâtes",
          },
          { name: "Escalope parmigiana", price: "30" },
          { name: "Escalope à la crème gratinée", price: "30", note: "Gruyère" },
          { name: "Émincé de bœuf", price: "44" },
          { name: "Filet de bœuf grillé", price: "58" },
          {
            name: "Filet de bœuf sauce au choix",
            price: "62",
            note: "Champignons, roquefort ou poivre",
          },
        ],
      },
      {
        title: "Du Large · Poissons",
        items: [
          { name: "Loup ou dorade grillé", price: "32" },
          { name: "Gratin fruits de mer", price: "28" },
          { name: "Ojja merguez", price: "26" },
          { name: "Ojja fruits de mer", price: "30" },
        ],
      },
    ],
  },
  {
    id: "pains",
    short: "Pains",
    eyebrow: "08 — À la main",
    title: "Pain & Compagnie",
    tagline: "Choisissez votre pain, on s'occupe du reste",
    image: "/images/sandwich.jpg",
    filterLabel: "Choisissez votre pain",
    groups: [
      {
        title: "Sandwich",
        items: [
          { name: "Le Fermier", price: "18", note: "Grillé ou pané" },
          { name: "Le Carnivore", price: "20" },
        ],
      },
      {
        title: "Baguette Farcie",
        items: [
          { name: "Escalope grillée", price: "18" },
          { name: "Escalope panée", price: "20" },
          { name: "Viande hachée", price: "22" },
        ],
      },
      {
        title: "Cornet",
        items: [
          { name: "Escalope grillée", price: "18" },
          { name: "Escalope panée", price: "20" },
          { name: "Viande hachée", price: "22" },
        ],
      },
      {
        title: "Panuzzo",
        subtitle: "Fromage au choix : mozzarella ou gruyère",
        items: [
          { name: "Escalope grillée", price: "18" },
          { name: "Escalope panée", price: "20" },
          { name: "Viande hachée", price: "22" },
          { name: "Chevrettes au pesto", price: "24" },
        ],
      },
      {
        title: "Tacos",
        items: [
          { name: "Escalope grillée", price: "16" },
          { name: "Escalope panée", price: "17" },
          { name: "Viande hachée", price: "20" },
        ],
      },
      {
        title: "Panini",
        items: [
          { name: "Jambon fromage", price: "12" },
          { name: "Thon fromage", price: "14" },
          { name: "Poulet fromage", price: "16" },
          { name: "Terrasse", price: "18", note: "Jambon, fromage, thon" },
        ],
      },
    ],
  },
  {
    id: "burgers",
    short: "Burgers",
    eyebrow: "09 — Entre deux pains",
    title: "Les Burgers & l'Œuf",
    tagline: "Burgers maison et omelettes généreuses",
    image: "/images/burger.jpg",
    groups: [
      {
        title: "Burgers",
        items: [
          { name: "Classic Burger", price: "18" },
          { name: "Chicken Burger", price: "18" },
          { name: "Cheese Burger", price: "20" },
          { name: "Big Cheese", price: "24" },
          {
            name: "Poulet Pané",
            price: "24",
            note: "Sauce burger, laitue, tomate, oignon caramélisé, poulet pané, fromage pané",
          },
        ],
      },
      {
        title: "Omelettes",
        items: [
          { name: "Classique nature", price: "14" },
          { name: "Végétarienne", price: "15" },
          { name: "Jambon fromage", price: "16" },
          { name: "Thon fromage", price: "17" },
          { name: "Terrasse", price: "22", note: "Fromage, thon, jambon, champignons" },
          { name: "Supplément fromage, jambon ou thon", price: "7" },
        ],
      },
    ],
  },
  {
    id: "sucre",
    short: "Crêpes",
    eyebrow: "10 — Le goûter",
    title: "Crêpes, Gaufres & Pancakes",
    tagline: "Salés ou sucrés, à toute heure",
    image: "/images/sweet.jpg",
    groups: [
      {
        title: "Crêpes Salées",
        items: [
          { name: "Jambon fromage", price: "16" },
          { name: "Thon fromage", price: "17" },
          { name: "Tunisienne", price: "18", note: "Thon, fromage, œuf" },
          { name: "Crêpe pizza", price: "18", note: "Sauce tomate, thon, olives, fromage" },
          { name: "Thon fromage jambon", price: "20" },
          { name: "Poulet champignons", price: "22", note: "Poulet, champignons, fromage" },
          { name: "Crêpe fourrée", price: "22", note: "Poulet, champignons, jambon fumé, fromage" },
          { name: "Crêpe panée", price: "22", note: "Jambon, poulet, fromage, champignons" },
          { name: "Gratinée viande hachée", price: "22" },
        ],
      },
      {
        title: "Crêpes Sucrées",
        items: [
          { name: "Nutella", price: "16" },
          { name: "Nutella fruits secs", price: "18" },
          { name: "Nutella banane", price: "20" },
          { name: "Nutella spéculoos", price: "20" },
          { name: "Pistache", price: "20" },
          { name: "Over Dose", price: "22", note: "Nutella, Oréo, M&M's, Bueno" },
          { name: "Nutella banane fruits secs", price: "22" },
          {
            name: "Crêpe Terrasse",
            price: "24",
            note: "Nutella, spéculoos, banane, fruits secs, boule de glace",
          },
        ],
      },
      {
        title: "Gaufres Salées",
        items: [
          { name: "Jambon fromage", price: "14" },
          { name: "Thon fromage", price: "16" },
          { name: "Poulet fromage", price: "18" },
        ],
      },
      {
        title: "Gaufres Sucrées",
        items: [
          { name: "Nutella", price: "18" },
          { name: "Nutella fruits secs", price: "20" },
          { name: "Nutella banane", price: "20" },
          { name: "Nutella spéculoos", price: "22" },
          { name: "Nutella banane fruits secs", price: "22" },
          { name: "Over Dose", price: "22" },
          { name: "Gaufre Terrasse", price: "24", note: "Nutella, Oréo, M&M's, Bueno" },
        ],
      },
      {
        title: "Pancakes Sucrés",
        items: [
          { name: "Nutella", price: "18" },
          { name: "Nutella spéculoos", price: "20" },
          { name: "Nutella fruits secs", price: "20" },
          { name: "Nutella banane", price: "20" },
          { name: "Nutella banane fruits secs", price: "22" },
          { name: "Pancakes Terrasse", price: "24", note: "Nutella, Oréo, M&M's, Bueno" },
        ],
      },
      {
        title: "Pancakes Salés",
        items: [
          { name: "Thon fromage", price: "14" },
          { name: "Légumes", price: "17" },
        ],
      },
    ],
  },
  {
    id: "dolci",
    short: "Dolci",
    eyebrow: "11 — Pour finir",
    title: "I Dolci",
    tagline: "La dernière douceur avant de partir",
    image: "/images/dessert.jpg",
    groups: [
      {
        title: "Desserts",
        items: [
          { name: "Fondant chocolat", price: "14" },
          { name: "Fondant noisette", price: "14" },
          { name: "Fondant pistache", price: "14" },
          {
            name: "Tiramisu",
            price: "16",
            note: "Classique, Oréo, Nutella ou spéculoos",
          },
          {
            name: "Cheesecake",
            price: "16",
            note: "Nutella, spéculoos, Oréo ou nature",
          },
          { name: "Gâteau maison", price: "16" },
          { name: "Banana Split", price: "22" },
          {
            name: "Assiette de fruits Terrasse",
            price: "25",
            note: "Fruits de saison, fruits secs, boule de glace, crème chantilly",
          },
        ],
      },
    ],
  },
  {
    id: "chichas",
    short: "Chichas",
    eyebrow: "12 — La vapeur",
    title: "Les Chichas",
    tagline: "Fumo, Kaloud et création maison, servies avec soin",
    image: "/images/chicha.webp",
    groups: [
      {
        title: "Nos Chichas",
        items: [
          { name: "Chicha Fumo-Fakher", price: "15" },
          { name: "Chicha Fumo-Adalya", price: "15" },
          { name: "Chicha Kaloud-Fakher", price: "15" },
          { name: "Chicha Kaloud-Adalya", price: "15" },
          {
            name: "Chicha Spéciale Terrasse de Lyon",
            price: "18",
            note: "Fruits secs, fruits frais, jus de fruits, chocolat ou café",
          },
          { name: "Supplément Glaçons", price: "5" },
          {
            name: "Chicha VIP",
            price: "25",
            note: "Servie avec plateau de fruits de saison",
          },
        ],
      },
      {
        title: "Nos Parfums",
        subtitle: "Menthe · Raisin · Pomme · Chewing Gum · Citron · Melon pêche",
        items: [],
      },
    ],
  },
];
