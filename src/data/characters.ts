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
          { id: 'uni-momotchi', name: 'Momotchi', gender: 'female', stage: 'adult', condition: 'From Labilatchi: 4+ care mistakes', sprite: `${W}/6/63/MomotchiUniSprite.png` },
          { id: 'uni-woopatchi', name: 'Woopatchi', gender: 'female', stage: 'adult', condition: 'From Teftetchi: 0\u20131 CM, OR 2\u20135 CM + Tama Delivery \u226510', sprite: `${W}/7/79/WoopatchiUniSprite.png` },
          { id: 'uni-memetchi', name: 'Memetchi', gender: 'female', stage: 'adult', condition: 'From Teftetchi: 2\u20135 care mistakes', sprite: `${W}/0/04/MemetchiUniSprite.png` },
          { id: 'uni-picochutchi', name: 'Picochutchi', gender: 'female', stage: 'adult', condition: 'From Teftetchi: 6+ care mistakes', sprite: `${W}/3/38/PicochutchiUniSprite.png` },
          { id: 'uni-mimitchi', name: 'Mimitchi', gender: 'female', stage: 'adult', condition: 'From Tustustchi: 0\u20131 CM, OR 2\u20135 CM + perfect arcade \u226520', sprite: `${W}/1/1d/MimitchiUniSprite.png` },
          { id: 'uni-unimarutchi-f', name: 'Unimarutchi', gender: 'female', stage: 'adult', condition: 'From Tustustchi: 2\u20135 care mistakes', sprite: `${W}/2/26/UnimarutchiUniSprite.png` },
          { id: 'uni-sebiretchi', name: 'Sebiretchi', gender: 'female', stage: 'adult', condition: 'From Tustustchi: 6+ care mistakes', sprite: `${W}/3/37/SebiretchiUniSprite.png` },
        ],
      },
      {
        id: 'uni-special',
        name: 'Special',
        emoji: '\u2728',
        characters: [
          { id: 'uni-hypertchi', name: 'Hypertchi', gender: 'male', stage: 'special', condition: 'Gen multiple of 5, Tamaverse marriage, Tama Travel \u22653\u00D7', sprite: `${W}/5/51/HypertchiUniSprite.png` },
          { id: 'uni-bubbletchi', name: 'Bubbletchi', gender: 'female', stage: 'special', condition: 'Gen multiple of 5, Tamaverse marriage, Tama Fashion \u22653 outfits', sprite: `${W}/1/10/BubbletchiUniSprite.png` },
          { id: 'uni-shimasimatchi', name: 'ShimaShimatchi', gender: 'male', stage: 'special', condition: 'Uni\u00D7Uni marriage, craft \u22651 DIY', sprite: `${W}/a/a8/Simasimatchi_Uni_Sprite.png` },
          { id: 'uni-yattatchi', name: 'Yattatchi', gender: 'female', stage: 'special', condition: 'Uni\u00D7Uni marriage, craft \u22651 DIY', sprite: `${W}/d/dd/YattatchiUniSprite.png` },
        ],
      },
      {
        id: 'uni-tamapet',
        name: 'Tamapets',
        emoji: '\u{1F43E}',
        characters: [
          { id: 'uni-harapparatchi', name: 'Harapparatchi', gender: 'none', stage: 'tamapet', condition: 'Place Pumpkin Trio, Potted Flowers, Tropical Palm or Tent', sprite: `${W}/8/8c/HarapparatchiUniSprite.png` },
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
          { id: 'uni-ichigotchi', name: 'Ichigotchi', gender: 'female' },
          { id: 'uni-ringotchi', name: 'Ringotchi', gender: 'female' },
          { id: 'uni-patitchi', name: 'Patitchi', gender: 'female' },
          { id: 'uni-cornetchi', name: 'Cornetchi', gender: 'female' },
          { id: 'uni-tanghulutchi', name: 'Tanghulutchi', gender: 'female' },
          { id: 'uni-hotcaketchi', name: 'Hotcaketchi', gender: 'female' },
        ],
      },

      // ── DLC: LoveMelo\u266AConcert ─────────────────────────
      {
        id: 'uni-lmc',
        name: 'LoveMelo\u266AConcert',
        emoji: '\u{1F3B5}',
        characters: [
          { id: 'uni-lovelitchi', name: 'Lovelitchi', gender: 'female' },
          { id: 'uni-melodytchi', name: 'Melodytchi', gender: 'female' },
          { id: 'uni-pianitchi', name: 'Pianitchi', gender: 'female' },
          { id: 'uni-rhythristchi', name: 'Rhythristchi', gender: 'female' },
          { id: 'uni-chekeratchi', name: 'Chekeratchi', gender: 'female' },
          { id: 'uni-drumcrubitchi', name: 'Drumcrubitchi', gender: 'female' },
        ],
      },

      // ── DLC: Tamamori Fashion Show \u2606 ──────────────────
      {
        id: 'uni-tfs',
        name: 'Tamamori Fashion Show \u2606',
        emoji: '\u{1F457}',
        characters: [
          { id: 'uni-coffretchi', name: 'Coffretchi', gender: 'female' },
          { id: 'uni-mystartchi', name: 'Mystartchi', gender: 'female' },
          { id: 'uni-moriritchi', name: 'Moriritchi', gender: 'female' },
          { id: 'uni-spacytchi', name: 'Spacytchi', gender: 'male' },
          { id: 'uni-dresstchi', name: 'Dresstchi', gender: 'female' },
          { id: 'uni-boots-brothers', name: 'Boots Brothers', gender: 'male' },
        ],
      },

      // ── DLC: Sanrio Characters ─────────────────────────
      {
        id: 'uni-sanrio',
        name: 'Sanrio Characters',
        emoji: '\u{1F380}',
        characters: [
          { id: 'uni-mame-kitty', name: 'Mame Kitty', gender: 'female' },
          { id: 'uni-mymelo-lovelitchi', name: 'MyMelo Lovelitchi', gender: 'female' },
          { id: 'uni-kuromi-melodytchi', name: 'Kuromi Melodytchi', gender: 'female' },
          { id: 'uni-cinnamon-moriritchi', name: 'Cinnamon Moriritchi', gender: 'female' },
          { id: 'uni-patchi-purin', name: 'Patchi Purin', gender: 'male' },
          { id: 'uni-pochacco-mimitchi', name: 'Pochacco Mimitchi', gender: 'female' },
          { id: 'uni-usahana-memetchi', name: 'Usahana Memetchi', gender: 'female' },
          { id: 'uni-hangyodon-sebiretchi', name: 'Hangyodon Sebiretchi', gender: 'female' },
          { id: 'uni-cogimyun-woopatchi', name: 'Cogimyun Woopatchi', gender: 'female' },
          { id: 'uni-little-unimarutchi', name: 'Little Unimarutchi', gender: 'both' },
        ],
      },

      // ── DLC: Angel Festival ────────────────────────────
      {
        id: 'uni-af',
        name: 'Angel Festival',
        emoji: '\u{1F47C}',
        characters: [
          { id: 'uni-flowerdite', name: 'Flowerdite', gender: 'female' },
          { id: 'uni-sebirecupid', name: 'Sebirecupid', gender: 'female' },
          { id: 'uni-yumemittie', name: 'Yumemittie', gender: 'female' },
          { id: 'uni-mame-el', name: 'Mame-El', gender: 'male' },
          { id: 'uni-pegasustchi', name: 'Pegasustchi', gender: 'male' },
          { id: 'uni-unimarucorn', name: 'Unimarucorn', gender: 'both' },
        ],
      },

      // ── DLC: Monster Carnival ──────────────────────────
      {
        id: 'uni-mc',
        name: 'Monster Carnival',
        emoji: '\u{1F47E}',
        characters: [
          { id: 'uni-meduupa', name: 'Meduupa', gender: 'female' },
          { id: 'uni-gobpypon', name: 'Gobpypon', gender: 'male' },
          { id: 'uni-giveuptchi', name: 'Giveuptchi', gender: 'female' },
          { id: 'uni-slimypatchi', name: 'Slimypatchi', gender: 'male' },
          { id: 'uni-mamegon', name: 'Mamegon', gender: 'male' },
          { id: 'uni-onimarutchi', name: 'Onimarutchi', gender: 'both' },
        ],
      },

      // ── DLC: Fairy Tale Library ────────────────────────
      {
        id: 'uni-ftl',
        name: 'Fairy Tale Library',
        emoji: '\u{1F4D6}',
        characters: [
          { id: 'uni-mamecchio', name: 'Mamecchio', gender: 'male' },
          { id: 'uni-piggypatchis', name: 'Piggypatchis', gender: 'male' },
          { id: 'uni-kikigoku', name: 'Kikigoku', gender: 'male' },
          { id: 'uni-pyonderella', name: 'Pyonderella', gender: 'female' },
          { id: 'uni-milkyukihime', name: 'Milkyukihime', gender: 'female' },
          { id: 'uni-neliakaguya', name: 'Neliakaguya', gender: 'female' },
        ],
      },

      // ── DLC: PokoPea Land ──────────────────────────────
      {
        id: 'uni-pokopea',
        name: 'PokoPea Land',
        emoji: '\u{1F95C}',
        characters: [
          { id: 'uni-peanuts-kun', name: 'Peanuts-kun', gender: 'male' },
          { id: 'uni-chancho', name: 'Chancho', gender: 'male' },
          { id: 'uni-peanuts-soup', name: 'Peanuts Soup', gender: 'male' },
          { id: 'uni-ponpoko', name: 'Ponpoko', gender: 'male' },
          { id: 'uni-gachikoi-ponpoko', name: 'Gachikoi Ponpoko', gender: 'male' },
          { id: 'uni-banana-hairtchi', name: 'Banana-hairtchi', gender: 'female' },
          { id: 'uni-tanuki-ninja', name: 'Tanuki Ninja', gender: 'male' },
        ],
      },

      // ── DLC: DoriTama School ───────────────────────────
      {
        id: 'uni-doritama',
        name: 'DoriTama School',
        emoji: '\u{1F3EB}',
        characters: [
          { id: 'uni-yumemitchi', name: 'Yumemitchi', gender: 'female' },
          { id: 'uni-kiraritchi', name: 'Kiraritchi', gender: 'female' },
          { id: 'uni-miraitchi', name: 'Miraitchi', gender: 'female' },
          { id: 'uni-clulutchi', name: 'Clulutchi', gender: 'female' },
          { id: 'uni-kuromametchi', name: 'KuroMametchi', gender: 'male' },
          { id: 'uni-tapepentchi', name: 'Tapepentchi', gender: 'male' },
          { id: 'uni-octpasketchi', name: 'Octpasketchi', gender: 'male' },
        ],
      },

      // ── DLC: KAWAISOUNI! Land ──────────────────────────
      {
        id: 'uni-kawaisouni',
        name: 'KAWAISOUNI! Land',
        emoji: '\u{1F430}',
        characters: [
          { id: 'uni-opanchu-usagi', name: 'Opanchu Usagi', gender: 'male' },
          { id: 'uni-npocham', name: 'Npocham', gender: 'male' },
          { id: 'uni-kimimaro', name: 'Kimimaro', gender: 'male' },
          { id: 'uni-kawaisouni-mametchi', name: 'Kawaisouni Mametchi', gender: 'male' },
          { id: 'uni-kawaisouni-mimitchi', name: 'Kawaisouni Mimitchi', gender: 'female' },
          { id: 'uni-kawaisouni-kuchipatchi', name: 'Kawaisouni Kuchipatchi', gender: 'male' },
        ],
      },

      // ── DLC: Esther Bunny World ────────────────────────
      {
        id: 'uni-esther',
        name: 'Esther Bunny World',
        emoji: '\u{1F407}',
        characters: [
          { id: 'uni-ribbon-bunny', name: 'Ribbon Bunny', gender: 'female' },
          { id: 'uni-cream-bunny', name: 'Cream Bunny', gender: 'female' },
          { id: 'uni-lavender-bunny', name: 'Lavender Bunny', gender: 'female' },
          { id: 'uni-happy-bunny', name: 'Happy Bunny', gender: 'female' },
          { id: 'uni-blue-bunny', name: 'Blue Bunny', gender: 'male' },
        ],
      },

      // ── DLC: Tamazon Jungle Tour ──────────────────────
      {
        id: 'uni-tamazon',
        name: 'Tamazon Jungle Tour',
        emoji: '\u{1F334}',
        characters: [
          { id: 'uni-ginjirotchi', name: 'Ginjirotchi', gender: 'male' },
          { id: 'uni-goripatchi', name: 'Goripatchi', gender: 'female' },
        ],
      },

      // ── DLC: Pets ──────────────────────────────────────
      {
        id: 'uni-pets',
        name: 'DLC Pets',
        emoji: '\u{1F436}',
        characters: [
          { id: 'uni-pet-sanrio', name: 'Sanrio Pet', gender: 'none', condition: 'Add any Sanrio DLC item to garden' },
          { id: 'uni-pet-monster', name: 'Monster Pet', gender: 'none', condition: 'Add any Monster Carnival item to garden' },
          { id: 'uni-pet-angel', name: 'Angel Pet', gender: 'none', condition: 'Add any Angel Festival item to garden' },
        ],
      },
    ],
  },
];

export function getVersion(id: string): DeviceVersion | undefined {
  return VERSIONS.find(v => v.id === id);
}
