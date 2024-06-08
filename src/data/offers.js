export const offers = [
  {
    id: 1,
    name: "Wycieczka do Turcji",
    shortDescription: "Zwiedzanie zabytków, wyśmienite jedzenie i wspaniałe plaże.",
    longDescription: "Odkryj bogatą historię Turcji, odwiedzając jej najważniejsze zabytki, delektując się wyśmienitą kuchnią i relaksując na pięknych plażach.",
    thumbnailUrl: "https://github.com/Piggey/e-biznes/blob/161b0016266b84f7f9b11a5e94da24aa2a4dc815/src/assets/1-turcja/thumb.webp",
    imgUrls: [
      "src/assets/1-turcja/thumb.webp",
      "src/assets/1-turcja/1.webp",
      "src/assets/1-turcja/2.webp",
      "src/assets/1-turcja/3.webp",
    ],
    rating: 3.7,
    tags: ["plaże", "historia", "kultura"],
    departureIATA: "WAW",
    departureDate: new Date("2024-07-01"),
    arrivalIATA: "IST",
    arrivalDate: new Date("2024-07-08"),
    pricePerPerson: 2000,
    currency: "PLN",
    destination: "Turcja",
    lat: 38.9637,
    lon: 35.2433,
    opinions: [
      {
        id: 1,
        date: new Date("2023-06-15"),
        name: "Jan Kowalski",
        rating: 5,
        opinion: "Niesamowita wycieczka! Wszystko było doskonale zorganizowane."
      }
    ],
    attractions: ["Plaża do 100m", "Darmowe Wi-Fi", "Wycieczki z przewodnikiem"]
  },
  {
    id: 2,
    name: "Wyprawa do Grecji",
    shortDescription: "Odkryj starożytne ruiny, piaszczyste plaże i urokliwe wyspy Grecji.",
    longDescription: "Podróż do serca starożytnej cywilizacji, zobacz Akropol, ciesz się słonecznymi wyspami i delektuj się grecką kuchnią.",
    thumbnailUrl: "src/assets/2-grecja/thumb.webp",
    imgUrls: [
      "src/assets/2-grecja/thumb.webp",
      "src/assets/2-grecja/1.webp",
      "src/assets/2-grecja/2.webp",
      "src/assets/2-grecja/3.webp",
    ],
    rating: 4.5,
    tags: ["starożytność", "wyspy", "kuchnia"],
    departureIATA: "WAW",
    departureDate: new Date("2024-08-01"),
    arrivalIATA: "ATH",
    arrivalDate: new Date("2024-08-08"),
    pricePerPerson: 2500,
    currency: "PLN",
    destination: "Grecja",
    lat: 37.9838,
    lon: 23.7275,
    opinions: [
      {
        id: 2,
        date: new Date("2023-07-20"),
        name: "Anna Nowak",
        rating: 5,
        opinion: "Grecja jest piękna, a ta wycieczka była wyjątkowa!"
      }
    ],
    attractions: ["Blisko starożytne ruiny", "Darmowe Wi-Fi", "Dostęp do basenu"]
  },
  {
    id: 3,
    name: "Przygoda w Hiszpanii",
    shortDescription: "Ciesz się słońcem, flamenco i hiszpańską gościnnością.",
    longDescription: "Zwiedź malownicze miasta Hiszpanii, odkryj tradycje flamenco, skosztuj tapas i spędź czas na złocistych plażach.",
    thumbnailUrl: "src/assets/3-hiszpania/thumb.webp",
    imgUrls: [
      "src/assets/3-hiszpania/thumb.webp",
      "src/assets/3-hiszpania/1.webp",
      "src/assets/3-hiszpania/2.webp",
      "src/assets/3-hiszpania/3.webp",
    ],
    rating: 4.0,
    tags: ["flamenco", "kuchnia", "plaże"],
    departureIATA: "WAW",
    departureDate: new Date("2024-09-01"),
    arrivalIATA: "BCN",
    arrivalDate: new Date("2024-09-08"),
    pricePerPerson: 3000,
    currency: "PLN",
    destination: "Hiszpania",
    lat: 40.4168,
    lon: -3.7038,
    opinions: [
      {
        id: 3,
        date: new Date("2023-08-10"),
        name: "Michał Wiśniewski",
        rating: 5,
        opinion: "Hiszpania ma wszystko, czego potrzebujesz na idealne wakacje!"
      }
    ],
    attractions: ["Blisko plaży", "Darmowe Wi-Fi", "Lekcje flamenco"]
  }
];
