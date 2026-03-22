import type { DeviceVersion } from '../types/index.ts';

const S = 'https://static.wikia.nocookie.net/tamagotchi/images';

export const PIX: DeviceVersion = {
  id: 'pix',
  name: 'Tamagotchi Pix',
  categories: [
    // ── SMART GROUP ───────────────────────────────────
    {
      id: 'pix-smart',
      name: 'Smart Group',
      emoji: '\u{1F539}',
      characters: [
        { id: 'pix-mametchi', name: 'Mametchi', gender: 'male', condition: '0\u20131 CM, OR 2\u20133 CM + Science Project 3\u00D7', sprite: `${S}/c/c7/Mametchimix.png` },
        { id: 'pix-himetchi', name: 'Himetchi', gender: 'female', condition: '0\u20131 CM, OR 2\u20133 CM + Gummies 3\u00D7', sprite: `${S}/3/3e/Himetchi_Pix_Sprite.png` },
        { id: 'pix-kuromametchi', name: 'KuroMametchi', gender: 'male', condition: '2\u20133 CM, OR 4\u20135 CM + Black Burger 3\u00D7', sprite: `${S}/b/b1/Kuromametchi_Pix_Sprite.png` },
        { id: 'pix-mimitchi', name: 'Mimitchi', gender: 'female', condition: '2\u20133 CM, OR 4\u20135 CM + Cupcake 3\u00D7', sprite: `${S}/3/30/Mimitchi_Pix_sprite.png` },
        { id: 'pix-kikitchi', name: 'Kikitchi', gender: 'male', condition: '4\u20135 CM, OR 6+ CM + Skateboard 5\u00D7', sprite: `${S}/c/c2/Kikitchimix.png` },
        { id: 'pix-awamokotchi', name: 'Awamokotchi', gender: 'female', condition: 'Original: 4\u20135 CM, OR 6+ CM + Fluffy Cloud 3\u00D7', sprite: `${S}/5/51/Awamokotchi_sprite.png` },
        { id: 'pix-chamametchi', name: 'Chamametchi', gender: 'female', condition: 'Party: 4\u20135 CM, OR 6+ CM + Strawberry Crepe 3\u00D7', sprite: `${S}/6/6e/Chamametchi_pix_sprite.png` },
        { id: 'pix-gozarutchi', name: 'Gozarutchi', gender: 'male', condition: '6+ care mistakes', sprite: `${S}/9/98/Gozarutchi_Pix_Sprite.png` },
        { id: 'pix-ninjanyatchi', name: 'Ninjanyatchi', gender: 'female', condition: '6+ care mistakes', sprite: `${S}/c/ce/Shinobinyatchimix.png` },
      ],
    },

    // ── CREATIVE GROUP ────────────────────────────────
    {
      id: 'pix-creative',
      name: 'Creative Group',
      emoji: '\u{1F7E2}',
      characters: [
        { id: 'pix-weeptchi', name: 'Weeptchi', gender: 'male', condition: 'Original: 0\u20131 CM, OR 2\u20133 CM + Flower Bread 3\u00D7', sprite: `${S}/e/e5/Weeptchi_sprite.png` },
        { id: 'pix-shimagurutchi', name: 'Shimagurutchi', gender: 'male', condition: 'Original: 2\u20133 CM; Party: 0\u20131 CM + Spiral Lollipop 3\u00D7', sprite: `${S}/7/77/Shimagurutchimix.png` },
        { id: 'pix-neliatchi', name: 'Neliatchi', gender: 'female', condition: '0\u20131 CM, OR 2\u20133 CM + Floral Cake 3\u00D7', sprite: `${S}/7/7a/Neliatchi_pix_sprite.png` },
        { id: 'pix-paintotchi', name: 'Paintotchi', gender: 'male', condition: '4\u20135 CM, OR 6+ CM + Sketchbook 5\u00D7', sprite: `${S}/4/40/Paintotchi_Pix_Sprite.png` },
        { id: 'pix-memetchi', name: 'Memetchi', gender: 'female', condition: '2\u20133 CM, OR 4\u20135 CM + Donuts 3\u00D7', sprite: `${S}/8/87/Memetchimix.png` },
        { id: 'pix-wawatchi', name: 'Wawatchi', gender: 'male', condition: 'Party only: 4\u20135 CM, OR 6+ CM + Donuts 3\u00D7', sprite: `${S}/a/ab/Wawatchi_sprite.png` },
        { id: 'pix-coffretchi', name: 'Coffretchi', gender: 'female', condition: '4\u20135 CM, OR 6+ CM + Sponge Cake 3\u00D7', sprite: `${S}/f/fe/CofretPix.png` },
        { id: 'pix-murachakitchi', name: 'Murachakitchi', gender: 'male', condition: '6+ care mistakes', sprite: `${S}/7/7d/Murachakitchi_Pix_Sprite.png` },
        { id: 'pix-violetchi', name: 'Violetchi', gender: 'female', condition: '6+ care mistakes', sprite: `${S}/a/aa/Violetchi_Pix_Sprite.png` },
      ],
    },

    // ── CHARMING GROUP ────────────────────────────────
    {
      id: 'pix-charming',
      name: 'Charming Group',
      emoji: '\u{1F7E3}',
      characters: [
        { id: 'pix-ginjirotchi', name: 'Ginjirotchi', gender: 'male', condition: '0\u20131 CM, OR 2\u20133 CM + Ramen Noodles 3\u00D7', sprite: `${S}/8/8c/Ginjirotchi_color_sprite.png` },
        { id: 'pix-lovelitchi', name: 'Lovelitchi', gender: 'female', condition: '0\u20131 CM, OR 2\u20133 CM + Dessert Platter 3\u00D7', sprite: `${S}/4/44/Lovelitchimix.png` },
        { id: 'pix-charatchi', name: 'Charatchi', gender: 'male', condition: '2\u20133 CM, OR 4\u20135 CM + Badminton Set 5\u00D7', sprite: `${S}/0/03/Charatchi_Pix_Sprite.png` },
        { id: 'pix-chamametchi-charm', name: 'Chamametchi', gender: 'female', condition: 'Original: 2\u20133 CM, OR 4\u20135 CM + Strawberry Crepe 3\u00D7', sprite: `${S}/6/6e/Chamametchi_pix_sprite.png` },
        { id: 'pix-milktchi', name: 'Milktchi', gender: 'female', condition: 'Party only: 2\u20133 CM, OR 4\u20135 CM + Dreamy Cotton Candy 3\u00D7', sprite: `${S}/5/55/Milktchi_sprite.png` },
        { id: 'pix-kuchipatchi', name: 'Kuchipatchi', gender: 'male', condition: '4\u20135 CM, OR 6+ CM + Tower Burger 3\u00D7', sprite: `${S}/5/58/Kuchipatchim%21x.png` },
        { id: 'pix-momotchi', name: 'Momotchi', gender: 'female', condition: '4\u20135 CM, OR 6+ CM + Peach 3\u00D7', sprite: `${S}/2/2c/Momotchimix.png` },
        { id: 'pix-orenetchi', name: 'Orenetchi', gender: 'male', condition: '6+ care mistakes', sprite: `${S}/a/ab/Orenetchi_color_sprite.png` },
        { id: 'pix-sebiretchi', name: 'Sebiretchi', gender: 'female', condition: '6+ care mistakes', sprite: `${S}/b/b6/Sebiretchi_Pix_Sprite.png` },
      ],
    },
  ],
};
