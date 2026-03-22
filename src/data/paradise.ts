import type { DeviceVersion } from '../types/index.ts';

const S = 'https://static.wikia.nocookie.net/tamagotchi/images';

export const PARADISE: DeviceVersion = {
  id: 'paradise',
  name: 'Tamagotchi Paradise',
  categories: [
    // ── LAND ────────────────────────────────────────
    {
      id: 'p-land',
      name: 'Land',
      emoji: '\u{1F33F}',
      guideUrl: 'https://imgur.com/RY43wgb',
      characters: [
        // Meat cells
        { id: 'p-meowtchi', name: 'Meowtchi', condition: 'Meat cells, 0 care mistakes', sprite: `${S}/8/87/Meowtchi_Neutral_Sprite.png` },
        { id: 'p-pochitchi', name: 'Pochitchi', condition: 'Meat cells, 0\u20131 care mistakes', sprite: `${S}/b/b9/Pochitchi_Paradise_sprite.png` },
        { id: 'p-gumax', name: 'Gumax', condition: 'Meat cells, 2\u20135 care mistakes', sprite: `${S}/7/7f/Gumax_Paradise_sprite.png` },
        { id: 'p-ratchi', name: 'Ratchi', condition: 'Meat cells, 6+ care mistakes', sprite: `${S}/7/79/RatchiSpriteParadise.png` },
        // Carrot cells
        { id: 'p-mametchi', name: 'Mametchi', condition: 'Carrot cells, 0 care mistakes', sprite: `${S}/b/bf/Mametchi_Paradise_Mini_Sprite.png` },
        { id: 'p-mimitchi', name: 'Mimitchi', condition: 'Carrot cells, 0\u20131 care mistakes', sprite: `${S}/a/a7/Mimitchi_Paradise_sprite.png` },
        { id: 'p-molmotchi', name: 'Molmotchi', condition: 'Carrot cells, 2\u20135 care mistakes', sprite: `${S}/f/ff/Molmotchi_Paradise_sprite.png` },
        { id: 'p-sheeptchi', name: 'Sheeptchi', condition: 'Carrot cells, 6+ care mistakes', sprite: `${S}/f/fe/Sheeptchi_Paradise_sprite.png` },
        // Worm cells
        { id: 'p-leopatchi', name: 'Leopatchi', condition: 'Worm cells, 0 care mistakes', sprite: `${S}/8/8f/Leopatchi_Paradise_sprite.png` },
        { id: 'p-sebiretchi', name: 'Sebiretchi', condition: 'Worm cells, 0\u20131 care mistakes', sprite: `${S}/8/82/Sebiretchi_Paradise_sprite.png` },
        { id: 'p-elizardotchi', name: 'Elizardotchi', condition: 'Worm cells, 2\u20135 care mistakes', sprite: `${S}/7/75/Elizardotchi_Paradise_sprite.png` },
        { id: 'p-heavytchi', name: 'Heavytchi', condition: 'Worm cells, 6+ care mistakes', sprite: `${S}/d/d2/Heavytchi_Paradise_sprite.png` },
        // Indeterminate cells
        { id: 'p-violetchi', name: 'Violetchi', condition: 'Indeterminate cells, 0 care mistakes' },
        { id: 'p-potsunentchi', name: 'Potsunentchi', condition: 'Indeterminate cells, 0\u20131 care mistakes', sprite: `${S}/2/2f/Potsunentchi_Paradise_sprite.png` },
        { id: 'p-tustustchi', name: 'Tustustchi', condition: 'Indeterminate cells, 2\u20135 care mistakes', sprite: `${S}/2/2d/Tustustchi_Paradise_sprite.png` },
        { id: 'p-shigemi-san', name: 'Shigemi-san', condition: 'Indeterminate cells, 6+ care mistakes', sprite: `${S}/e/eb/Shigemi-san_Paradise_sprite.png` },
      ],
    },

    // ── WATER ───────────────────────────────────────
    {
      id: 'p-water',
      name: 'Water',
      emoji: '\u{1F4A7}',
      guideUrl: 'https://imgur.com/RY43wgb',
      characters: [
        // Seafood cells
        { id: 'p-irukatchi', name: 'Irukatchi', condition: 'Seafood cells, 0 care mistakes', sprite: `${S}/9/9e/Irukatchi_Paradise_Sprite.png` },
        { id: 'p-kametchi', name: 'Kametchi', condition: 'Seafood cells, 0\u20131 care mistakes', sprite: `${S}/c/cf/Kametchi_Paradise_sprite.png` },
        { id: 'p-kujiratchi', name: 'Kujiratchi', condition: 'Seafood cells, 2\u20135 care mistakes', sprite: `${S}/c/c1/Kujiratchi_Paradise_sprite.png` },
        { id: 'p-uruotchi', name: 'Uruotchi', condition: 'Seafood cells, 6+ care mistakes', sprite: `${S}/5/51/Uruotchi_Paradise_sprite.png` },
        // Seaweed cells
        { id: 'p-axolopatchi', name: 'Axolopatchi', condition: 'Seaweed cells, 0 care mistakes', sprite: `${S}/8/88/Axolopatchi_Paradise_sprite.png` },
        { id: 'p-imoritchi', name: 'Imoritchi', condition: 'Seaweed cells, 0\u20131 care mistakes', sprite: `${S}/9/93/Imoritchi_Paradise_sprite.png` },
        { id: 'p-kawazutchi', name: 'Kawazutchi', condition: 'Seaweed cells, 2\u20135 care mistakes', sprite: `${S}/9/9e/KawazutchiSprite.png` },
        { id: 'p-beavertchi', name: 'Beavertchi', condition: 'Seaweed cells, 6+ care mistakes', sprite: `${S}/7/74/Beavertchi_Paradise_sprite.png` },
        // Shrimp cells
        { id: 'p-tachutchi', name: 'Tachutchi', condition: 'Shrimp cells, 0 care mistakes', sprite: `${S}/c/ce/Tachutchi_Paradise_sprite.png` },
        { id: 'p-sharktchi', name: 'Sharktchi', condition: 'Shrimp cells, 0\u20131 care mistakes', sprite: `${S}/c/c2/Sharktchi_Paradise_sprite.png` },
        { id: 'p-ankotchi', name: 'Ankotchi', condition: 'Shrimp cells, 2\u20135 care mistakes', sprite: `${S}/9/95/Ankotchi_Paradise_sprite.png` },
        { id: 'p-otototchi', name: 'Otototchi', condition: 'Shrimp cells, 6+ care mistakes', sprite: `${S}/a/a4/Otototchi_Paradise_sprite.png` },
        // Indeterminate cells
        { id: 'p-kuraratchi', name: 'Kuraratchi', condition: 'Indeterminate cells, 0 care mistakes', sprite: `${S}/b/bf/Kuraratchi_Paradise_sprite.png` },
        { id: 'p-mendakotchi', name: 'Mendakotchi', condition: 'Indeterminate cells, 0\u20131 care mistakes', sprite: `${S}/9/95/Mendakotchi_Paradise_sprite.png` },
        { id: 'p-amefuratchi', name: 'Amefuratchi', condition: 'Indeterminate cells, 2\u20135 care mistakes', sprite: `${S}/c/c8/Amefuratchi_Paradise_sprite.png` },
        { id: 'p-gusokutchi', name: 'Gusokutchi', condition: 'Indeterminate cells, 6+ care mistakes', sprite: `${S}/a/ab/Gusokutchi_Paradise_sprite.png` },
      ],
    },

    // ── SKY ─────────────────────────────────────────
    {
      id: 'p-sky',
      name: 'Sky',
      emoji: '\u{2601}\u{FE0F}',
      guideUrl: 'https://imgur.com/RY43wgb',
      characters: [
        // Chicken cells
        { id: 'p-horhotchi', name: 'Horhotchi', condition: 'Chicken cells, 0 care mistakes', sprite: `${S}/1/18/Horhotchi_Paradise_sprite.png` },
        { id: 'p-mongatchi', name: 'Mongatchi', condition: 'Chicken cells, 0\u20131 care mistakes', sprite: `${S}/7/7c/Mongatchi_Paradise_sprite.png` },
        { id: 'p-eagletchi', name: 'Eagletchi', condition: 'Chicken cells, 2\u20135 care mistakes', sprite: `${S}/b/b0/Eagletchi_Paradise_sprite.png` },
        { id: 'p-batchi', name: 'Batchi', condition: 'Chicken cells, 6+ care mistakes', sprite: `${S}/6/65/Batchi_Paradise_sprite.png` },
        // Corn cells
        { id: 'p-peacotchi', name: 'Peacotchi', condition: 'Corn cells, 0 care mistakes', sprite: `${S}/0/00/Peacotchi_Paradise_sprite.png` },
        { id: 'p-batatchi', name: 'Batatchi', condition: 'Corn cells, 0\u20131 care mistakes', sprite: `${S}/d/d8/Batatchi_Paradise_sprite.png` },
        { id: 'p-kuchipatchi-sky', name: 'Kuchipatchi', condition: 'Corn cells, 2\u20135 care mistakes', sprite: `${S}/a/a2/Kuchipatchi_Paradise_sprite.png` },
        { id: 'p-kiwitchi', name: 'Kiwitchi', condition: 'Corn cells, 6+ care mistakes', sprite: `${S}/2/29/Kiwitchi_Paradise_sprite.png` },
        // Syrup cells
        { id: 'p-papillotchi', name: 'Papillotchi', condition: 'Syrup cells, 0 care mistakes', sprite: `${S}/a/a5/Papillotchi_Paradise_sprite.png` },
        { id: 'p-kabutotchi', name: 'Kabutotchi', condition: 'Syrup cells, 0\u20131 care mistakes', sprite: `${S}/3/3b/Kabutotchi_Paradise_sprite.png` },
        { id: 'p-tentotchi', name: 'Tentotchi', condition: 'Syrup cells, 2\u20135 care mistakes', sprite: `${S}/b/bc/Tentotchi_Paradise_sprite.png` },
        { id: 'p-hatchitchi', name: 'Hatchitchi', condition: 'Syrup cells, 6+ care mistakes', sprite: `${S}/4/4f/Hatchitchi_Paradise_sprite.png` },
        // Indeterminate cells
        { id: 'p-gemtchi', name: 'Gemtchi', condition: 'Indeterminate cells, 0 care mistakes', sprite: `${S}/f/ff/Gemtchi_Paradise_sprite.png` },
        { id: 'p-oretatchi', name: 'Oretatchi', condition: 'Indeterminate cells, 0\u20131 care mistakes', sprite: `${S}/a/ac/Oretatchi_Paradise_sprite.png` },
        { id: 'p-ishikorotchi', name: 'Ishikorotchi', condition: 'Indeterminate cells, 2\u20135 care mistakes', sprite: `${S}/a/a1/Ishikorotchi_Paradise_sprite.png` },
        { id: 'p-magmatchi', name: 'Magmatchi', condition: 'Indeterminate cells, 6+ care mistakes', sprite: `${S}/0/03/Magmatchi_Paradise_sprite.png` },
      ],
    },

    // ── FOREST (Jade exclusive) ─────────────────────
    {
      id: 'p-forest',
      name: 'Forest',
      emoji: '\u{1F332}',
      guideUrl: 'https://imgur.com/kjfHP3i',
      characters: [
        // Peking Meat cells
        { id: 'p-forest-horhotchi', name: 'Forest Horhotchi', condition: 'Peking Meat cells, 0 care mistakes', sprite: `${S}/0/04/ForestHorhotchi_Paradise_sprite.png` },
        { id: 'p-konkotchi', name: 'Konkotchi', condition: 'Peking Meat cells, 0\u20131 care mistakes', sprite: `${S}/4/42/Konkotchi_Paradise_sprite.png` },
        { id: 'p-tigaotchi', name: 'Tigaotchi', condition: 'Peking Meat cells, 2\u20135 care mistakes', sprite: `${S}/4/45/Tigaotchi_Paradise_sprite.png` },
        { id: 'p-tanoontchi', name: 'Tanoontchi', condition: 'Peking Meat cells, 6+ care mistakes', sprite: `${S}/d/d6/Tanoontchi_Paradise_sprite.png` },
        // Bamboo Grass cells
        { id: 'p-lessapantchi', name: 'Lessapantchi', condition: 'Bamboo Grass cells, 0 care mistakes', sprite: `${S}/f/f8/Lessapantchi_Paradise_sprite.png` },
        { id: 'p-kanokotchi', name: 'Kanokotchi', condition: 'Bamboo Grass cells, 0\u20131 care mistakes', sprite: `${S}/5/5e/Kanokotchi_Paradise_sprite.png` },
        { id: 'p-suigyutchi', name: 'Suigyutchi', condition: 'Bamboo Grass cells, 2\u20135 care mistakes', sprite: `${S}/8/87/Suigyutchi_Paradise_sprite.png` },
        { id: 'p-panbootchi', name: 'Panbootchi', condition: 'Bamboo Grass cells, 6+ care mistakes', sprite: `${S}/d/d7/Panbootchi_Paradise_sprite.png` },
        // Pomegranate cells
        { id: 'p-kachitchi', name: 'Kachitchi', condition: 'Pomegranate cells, 0 care mistakes', sprite: `${S}/d/d1/Kachitchi_Paradise_sprite.png` },
        { id: 'p-tokipatchi', name: 'Tokipatchi', condition: 'Pomegranate cells, 0\u20131 care mistakes', sprite: `${S}/9/96/Tokipatchi_Paradise_sprite.png` },
        { id: 'p-kuchipatchi-forest', name: 'Kuchipatchi', condition: 'Pomegranate cells, 2\u20135 care mistakes', sprite: `${S}/a/a2/Kuchipatchi_Paradise_sprite.png` },
        { id: 'p-sparrotchi', name: 'Sparrotchi', condition: 'Pomegranate cells, 6+ care mistakes', sprite: `${S}/f/f9/Sparrotchi_Paradise_sprite.png` },
        // Indeterminate cells
        { id: 'p-shiitaketchi', name: 'Shiitaketchi', condition: 'Indeterminate cells, 0 care mistakes', sprite: `${S}/8/8b/Shiitaketchi_Paradise_sprite.png` },
        { id: 'p-peatchi', name: 'Peatchi', condition: 'Indeterminate cells, 0\u20131 care mistakes', sprite: `${S}/e/e0/Peatchi_Paradise_sprite.png` },
        { id: 'p-nappatchi', name: 'Nappatchi', condition: 'Indeterminate cells, 2\u20135 care mistakes', sprite: `${S}/0/01/Nappatchi_Paradise_sprite.png` },
        { id: 'p-rushraditchi', name: 'Rushraditchi', condition: 'Indeterminate cells, 6+ care mistakes', sprite: `${S}/7/7d/Rushraditchi_Paradise_sprite.png` },
      ],
    },

    // ── SPECIAL (cross-connect) ─────────────────────
    {
      id: 'p-special',
      name: 'Special',
      emoji: '\u2728',
      characters: [
        { id: 'p-chodracotchi', name: 'Chodracotchi', condition: 'Connect Pink Land with 2 different color shells during Young Stage', sprite: `${S}/9/93/Chodracotchi_Paradise_sprite.png` },
        { id: 'p-mermarintchi', name: 'Mermarintchi', condition: 'Connect Blue Water with 2 different color shells during Young Stage', sprite: `${S}/5/50/Mermarintchi_Paradise_sprite.png` },
        { id: 'p-yayacorntchi', name: 'Yayacorntchi', condition: 'Connect Purple Sky with 2 different color shells during Young Stage', sprite: `${S}/f/fb/Yayacorntchi_Paradise_sprite.png` },
        { id: 'p-tatsutchi', name: 'Tatsutchi', condition: 'Connect Jade Forest with 2 different color shells during Young Stage', sprite: `${S}/d/db/Tatsutchi_Paradise_sprite.png` },
      ],
    },

    // ── DLC ─────────────────────────────────────────
    {
      id: 'p-savanna',
      name: 'Savanna Land',
      emoji: '\u{1F981}',
      characters: [
        { id: 'p-shyontchi', name: 'Shyontchi', condition: 'Savanna Land DLC', sprite: `${S}/6/68/Shyontchi_Paradise_sprite.png` },
        { id: 'p-meertchi', name: 'Meertchi', condition: 'Savanna Land DLC', sprite: `${S}/a/a3/Meertchi_Paradise_sprite.png` },
      ],
    },
    {
      id: 'p-poo-park',
      name: 'Poo Park',
      emoji: '\u{1F4A9}',
      characters: [
        { id: 'p-omarutchi', name: 'Omarutchi', condition: 'Poo Park DLC', sprite: `${S}/a/a7/Omarutchi_Paradise_sprite.png` },
        { id: 'p-pooptchi', name: 'Pooptchi', condition: 'Poo Park DLC', sprite: `${S}/0/08/Pooptchi_Paradise_sprite.png` },
      ],
    },
    {
      id: 'p-pacific',
      name: 'Pacific Island',
      emoji: '\u{1F3DD}\u{FE0F}',
      characters: [
        { id: 'p-koalabutchi', name: 'Koalabutchi', condition: 'Pacific Island DLC', sprite: `${S}/5/56/Koalabutchi_Paradise_sprite.png` },
        { id: 'p-platyputchi', name: 'Platyputchi', condition: 'Pacific Island DLC', sprite: `${S}/c/cd/Platyputchi_Paradise_sprite.png` },
      ],
    },
  ],
};
