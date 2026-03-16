import type { DeviceVersion } from '../types/index.ts';

const W = 'https://static.wikia.nocookie.net/tamagotchi/images';

export const VERSIONS: DeviceVersion[] = [
  {
    id: 'uni',
    name: 'Tamagotchi Uni',
    categories: [
      // ── Base Game Adults ───────────────────────────────
      {
        id: 'uni-adult-m',
        name: 'Adult \u2642',
        emoji: '\u{1F9D1}',
        characters: [
          { id: 'uni-mametchi', name: 'Mametchi', gender: 'male', stage: 'adult', condition: 'From Kuriritchi: 0 care mistakes, OR 1\u20133 CM + Go Tama Walk 3\u00D7', sprite: `${W}/c/ce/MametchiUniSprite.png` },
          { id: 'uni-weeptchi', name: 'Weeptchi', gender: 'male', stage: 'adult', condition: 'From Kuriritchi: 1\u20133 care mistakes', sprite: `${W}/a/a2/WeeptchiUniSprite.png` },
          { id: 'uni-shimagurutchi', name: 'Shimagurutchi', gender: 'male', stage: 'adult', condition: 'From Kuriritchi: 4+ care mistakes', sprite: `${W}/a/a5/SimagurutchiUniSprite.png` },
          { id: 'uni-kuchipatchi', name: 'Kuchipatchi', gender: 'male', stage: 'adult', condition: 'From Gunchitchi: 0\u20131 CM, OR 2\u20135 CM + Tama Delivery \u226510', sprite: `${W}/1/1a/KuchipatchiUniSprite.png` },
          { id: 'uni-shykutchi', name: 'Shykutchi', gender: 'male', stage: 'adult', condition: 'From Gunchitchi: 2\u20135 care mistakes', sprite: `${W}/3/3b/ShykutchiUniSprite.png` },
          { id: 'uni-bigsmile', name: 'Bigsmile', gender: 'male', stage: 'adult', condition: 'From Gunchitchi: 6+ care mistakes', sprite: `${W}/1/1e/BigsmileUniSprite.png` },
          { id: 'uni-kikitchi', name: 'Kikitchi', gender: 'male', stage: 'adult', condition: 'From Curltchi: 0\u20131 CM, OR 2\u20135 CM + perfect arcade \u226520', sprite: `${W}/0/0c/KikitchiUniSprite.png` },
          { id: 'uni-unimarutchi-m', name: 'Unimarutchi', gender: 'male', stage: 'adult', condition: 'From Curltchi: 2\u20135 care mistakes', sprite: `${W}/2/26/UnimarutchiUniSprite.png` },
          { id: 'uni-gozarutchi', name: 'Gozarutchi', gender: 'male', stage: 'adult', condition: 'From Curltchi: 6+ care mistakes', sprite: `${W}/6/61/GozarutchiSmartSprite.png` },
        ],
      },
      {
        id: 'uni-adult-f',
        name: 'Adult \u2640',
        emoji: '\u{1F9D1}',
        characters: [
          { id: 'uni-neliatchi', name: 'Neliatchi', gender: 'female', stage: 'adult', condition: 'From Labilatchi: 0 CM, OR 1\u20133 CM + Go Tama Walk 3\u00D7', sprite: `${W}/b/b3/NeliatchiUniSprite.png` },
          { id: 'uni-milktchi', name: 'Milktchi', gender: 'female', stage: 'adult', condition: 'From Labilatchi: 1\u20133 care mistakes', sprite: `${W}/e/eb/MilktchiUniSprite.png` },
          { id: 'uni-momotchi', name: 'Momotchi', gender: 'female', stage: 'adult', condition: 'From Labilatchi: 4+ care mistakes', sprite: `${W}/e/eb/MomotchiUniSprite.png` },
          { id: 'uni-woopatchi', name: 'Woopatchi', gender: 'female', stage: 'adult', condition: 'From Teftetchi: 0\u20131 CM, OR 2\u20135 CM + Tama Delivery \u226510' },
          { id: 'uni-memetchi', name: 'Memetchi', gender: 'female', stage: 'adult', condition: 'From Teftetchi: 2\u20135 care mistakes' },
          { id: 'uni-picochutchi', name: 'Picochutchi', gender: 'female', stage: 'adult', condition: 'From Teftetchi: 6+ care mistakes' },
          { id: 'uni-mimitchi', name: 'Mimitchi', gender: 'female', stage: 'adult', condition: 'From Tustustchi: 0\u20131 CM, OR 2\u20135 CM + perfect arcade \u226520' },
          { id: 'uni-unimarutchi-f', name: 'Unimarutchi', gender: 'female', stage: 'adult', condition: 'From Tustustchi: 2\u20135 care mistakes', sprite: `${W}/2/26/UnimarutchiUniSprite.png` },
          { id: 'uni-sebiretchi', name: 'Sebiretchi', gender: 'female', stage: 'adult', condition: 'From Tustustchi: 6+ care mistakes' },
        ],
      },
      {
        id: 'uni-special',
        name: 'Special',
        emoji: '\u2728',
        characters: [
          { id: 'uni-hypertchi', name: 'Hypertchi', gender: 'male', stage: 'special', condition: 'Gen multiple of 5, Tamaverse marriage, Tama Travel \u22653\u00D7', sprite: `${W}/5/51/HypertchiUniSprite.png` },
          { id: 'uni-bubbletchi', name: 'Bubbletchi', gender: 'female', stage: 'special', condition: 'Gen multiple of 5, Tamaverse marriage, Tama Fashion \u22653 outfits' },
          { id: 'uni-shimasimatchi', name: 'ShimaShimatchi', gender: 'male', stage: 'special', condition: 'Uni\u00D7Uni marriage, craft \u22651 DIY', sprite: `${W}/a/a8/Simasimatchi_Uni_Sprite.png` },
          { id: 'uni-yattatchi', name: 'Yattatchi', gender: 'female', stage: 'special', condition: 'Uni\u00D7Uni marriage, craft \u22651 DIY' },
        ],
      },
      {
        id: 'uni-tamapet',
        name: 'Tamapets',
        emoji: '\u{1F43E}',
        characters: [
          { id: 'uni-harapparatchi', name: 'Harapparatchi', gender: 'none', stage: 'tamapet', condition: 'Place Pumpkin Trio, Potted Flowers, Tropical Palm or Tent' },
          { id: 'uni-makimotchi', name: 'Makimotchi', gender: 'none', stage: 'tamapet', condition: 'Place Art, Plant Shelf, Hammock or UFO' },
          { id: 'uni-monatototchi', name: 'Monatototchi', gender: 'none', stage: 'tamapet', condition: 'Place Inner Tubes & Ball, Gumballs, Planet or Serving Cart' },
          { id: 'uni-rinsetchi', name: 'Rinsetchi', gender: 'none', stage: 'tamapet', condition: 'Place Pastel Tent or Rainbow Pillow' },
          { id: 'uni-shurikentchi', name: 'Shurikentchi', gender: 'none', stage: 'tamapet', condition: 'Place Arcade Machine, Jukebox or TV' },
        ],
      },

      // ── DLC: Very Berry Land ───────────────────────────
      {
        id: 'uni-vbl',
        name: 'Very Berry Land',
        emoji: '\u{1F353}',
        characters: [
          { id: 'uni-ichigotchi', name: 'Ichigotchi', gender: 'female', condition: 'Very Berry Land DLC' },
          { id: 'uni-ringotchi', name: 'Ringotchi', gender: 'female', condition: 'Very Berry Land DLC' },
          { id: 'uni-patitchi', name: 'Patitchi', gender: 'female', condition: 'Very Berry Land DLC' },
          { id: 'uni-cornetchi', name: 'Cornetchi', gender: 'female', condition: 'Very Berry Land DLC' },
          { id: 'uni-tanghulutchi', name: 'Tanghulutchi', gender: 'female', condition: 'Very Berry Land DLC' },
          { id: 'uni-hotcaketchi', name: 'Hotcaketchi', gender: 'female', condition: 'Very Berry Land DLC' },
        ],
      },

      // ── DLC: LoveMelo\u266AConcert ─────────────────────────
      {
        id: 'uni-lmc',
        name: 'LoveMelo\u266AConcert',
        emoji: '\u{1F3B5}',
        characters: [
          { id: 'uni-lovelitchi', name: 'Lovelitchi', gender: 'female', condition: 'LoveMelo Concert DLC' },
          { id: 'uni-melodytchi', name: 'Melodytchi', gender: 'female', condition: 'LoveMelo Concert DLC' },
          { id: 'uni-pianitchi', name: 'Pianitchi', gender: 'female', condition: 'LoveMelo Concert DLC' },
          { id: 'uni-rhythristchi', name: 'Rhythristchi', gender: 'female', condition: 'LoveMelo Concert DLC' },
          { id: 'uni-chekeratchi', name: 'Chekeratchi', gender: 'female', condition: 'LoveMelo Concert DLC' },
          { id: 'uni-drumcrubitchi', name: 'Drumcrubitchi', gender: 'female', condition: 'LoveMelo Concert DLC' },
        ],
      },

      // ── DLC: Tamamori Fashion Show \u2606 ──────────────────
      {
        id: 'uni-tfs',
        name: 'Tamamori Fashion Show \u2606',
        emoji: '\u{1F457}',
        characters: [
          { id: 'uni-coffretchi', name: 'Coffretchi', gender: 'female', condition: 'Fashion Show DLC' },
          { id: 'uni-mystartchi', name: 'Mystartchi', gender: 'female', condition: 'Fashion Show DLC' },
          { id: 'uni-moriritchi', name: 'Moriritchi', gender: 'female', condition: 'Fashion Show DLC' },
          { id: 'uni-spacytchi', name: 'Spacytchi', gender: 'male', condition: 'Fashion Show DLC' },
          { id: 'uni-dresstchi', name: 'Dresstchi', gender: 'female', condition: 'Fashion Show DLC' },
          { id: 'uni-boots-brothers', name: 'Boots Brothers', gender: 'male', condition: 'Fashion Show DLC' },
        ],
      },

      // ── DLC: Angel Festival ────────────────────────────
      {
        id: 'uni-af',
        name: 'Angel Festival',
        emoji: '\u{1F47C}',
        characters: [
          { id: 'uni-flowerdite', name: 'Flowerdite', gender: 'female', condition: 'Angel Festival DLC' },
          { id: 'uni-sebirecupid', name: 'Sebirecupid', gender: 'female', condition: 'Angel Festival DLC' },
          { id: 'uni-yumemittie', name: 'Yumemittie', gender: 'female', condition: 'Angel Festival DLC' },
          { id: 'uni-mame-el', name: 'Mame-El', gender: 'male', condition: 'Angel Festival DLC' },
          { id: 'uni-pegasustchi', name: 'Pegasustchi', gender: 'male', condition: 'Angel Festival DLC' },
          { id: 'uni-unimarucorn', name: 'Unimarucorn', gender: 'both', condition: 'Angel Festival DLC' },
        ],
      },

      // ── DLC: Monster Carnival ──────────────────────────
      {
        id: 'uni-mc',
        name: 'Monster Carnival',
        emoji: '\u{1F47E}',
        characters: [
          { id: 'uni-meduupa', name: 'Meduupa', gender: 'female', condition: 'Monster Carnival DLC' },
          { id: 'uni-gobpypon', name: 'Gobpypon', gender: 'male', condition: 'Monster Carnival DLC' },
          { id: 'uni-giveuptchi', name: 'Giveuptchi', gender: 'female', condition: 'Monster Carnival DLC' },
          { id: 'uni-slimypatchi', name: 'Slimypatchi', gender: 'male', condition: 'Monster Carnival DLC' },
          { id: 'uni-mamegon', name: 'Mamegon', gender: 'male', condition: 'Monster Carnival DLC' },
          { id: 'uni-onimarutchi', name: 'Onimarutchi', gender: 'both', condition: 'Monster Carnival DLC' },
        ],
      },

      // ── DLC: Sanrio Characters ─────────────────────────
      {
        id: 'uni-sanrio',
        name: 'Sanrio Characters',
        emoji: '\u{1F380}',
        characters: [
          { id: 'uni-mame-kitty', name: 'Mame Kitty', gender: 'female', condition: 'Sanrio DLC' },
          { id: 'uni-mymelo-lovelitchi', name: 'MyMelo Lovelitchi', gender: 'female', condition: 'Sanrio DLC' },
          { id: 'uni-kuromi-melodytchi', name: 'Kuromi Melodytchi', gender: 'female', condition: 'Sanrio DLC' },
          { id: 'uni-cinnamon-moriritchi', name: 'Cinnamon Moriritchi', gender: 'female', condition: 'Sanrio DLC' },
          { id: 'uni-patchi-purin', name: 'Patchi Purin', gender: 'male', condition: 'Sanrio DLC' },
          { id: 'uni-pochacco-mimitchi', name: 'Pochacco Mimitchi', gender: 'female', condition: 'Sanrio DLC' },
          { id: 'uni-usahana-memetchi', name: 'Usahana Memetchi', gender: 'female', condition: 'Sanrio DLC' },
          { id: 'uni-hangyodon-sebiretchi', name: 'Hangyodon Sebiretchi', gender: 'female', condition: 'Sanrio DLC' },
          { id: 'uni-cogimyun-woopatchi', name: 'Cogimyun Woopatchi', gender: 'female', condition: 'Sanrio DLC' },
          { id: 'uni-little-unimarutchi', name: 'Little Unimarutchi', gender: 'both', condition: 'Sanrio DLC' },
        ],
      },

      // ── DLC: Pets ──────────────────────────────────────
      {
        id: 'uni-pets',
        name: 'DLC Pets',
        emoji: '\u{1F436}',
        characters: [
          { id: 'uni-pet-sanrio', name: 'Sanrio Pet', gender: 'none', condition: 'Add any Sanrio DLC item to garden' },
          { id: 'uni-pet-monster', name: 'Monster Pet', gender: 'none', condition: 'Add any Monster Carnival DLC item to garden' },
          { id: 'uni-pet-angel', name: 'Angel Pet', gender: 'none', condition: 'Add any Angel Festival DLC item to garden' },
        ],
      },
    ],
  },
];

export function getVersion(id: string): DeviceVersion | undefined {
  return VERSIONS.find(v => v.id === id);
}
