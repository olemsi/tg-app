import type { DeviceVersion } from '../types/index.ts';

const S = 'https://static.wikia.nocookie.net/tamagotchi/images';

export const PLUS_COLOR: DeviceVersion = {
  id: 'pluscolor',
  name: 'Tamagotchi Plus Color',
  categories: [
    {
      id: 'pc-adult',
      name: 'Adult',
      emoji: '\u{1F9D1}',
      characters: [
        { id: 'pc-mametchi', name: 'Mametchi', gender: 'male', condition: 'Odd gen, 0 CM', sprite: `${S}/9/93/Mametchi_%2BC_sprite.png` },
        { id: 'pc-memetchi', name: 'Memetchi', gender: 'female', condition: 'Odd gen, 0 CM', sprite: `${S}/4/46/Memetchi_id_sprite.png` },
        { id: 'pc-kuchipatchi', name: 'Kuchipatchi', gender: 'male', condition: 'Odd gen, 1\u20133 CM', sprite: `${S}/6/69/Kuchipatchi_%2BC_sprite.png` },
        { id: 'pc-lovezukintchi', name: 'LoveZukintchi', gender: 'female', condition: 'Odd gen, 1\u20133 CM', sprite: `${S}/c/c1/LoveZukintchi_%2BC_sprite.png` },
        { id: 'pc-gozarutchi', name: 'Gozarutchi', gender: 'male', condition: 'Odd gen, 4+ CM', sprite: `${S}/b/b4/ID_Gozarutchi.PNG` },
        { id: 'pc-marotchi', name: 'Marotchi', gender: 'female', condition: 'Odd gen, 4+ CM', sprite: `${S}/b/ba/Marotchi_%2BC_sprite.png` },
        { id: 'pc-kuromametchi', name: 'KuroMametchi', gender: 'male', condition: 'Even gen, 0 CM', sprite: `${S}/9/9d/ID_Kuromametchi.PNG` },
        { id: 'pc-flowertchi', name: 'Flowertchi', gender: 'female', condition: 'Even gen, 0 CM', sprite: `${S}/2/23/Violetchi_id_sprite.png` },
        { id: 'pc-shimasimatchi', name: 'ShimaShimatchi', gender: 'male', condition: 'Even gen, 1\u20133 CM', sprite: `${S}/e/e5/Shimashimatchi_%2BC_sprite.png` },
        { id: 'pc-maidtchi', name: 'Maidtchi', gender: 'female', condition: 'Even gen, 1\u20133 CM', sprite: `${S}/2/2d/Maidtchi%2BC.png` },
        { id: 'pc-nemutchi', name: 'Nemutchi', gender: 'male', condition: 'Even gen, 4+ CM', sprite: `${S}/8/8f/Nemutchi_plus_color_sprite.png` },
        { id: 'pc-makiko', name: 'Makiko', gender: 'female', condition: 'Even gen, 4+ CM', sprite: `${S}/5/51/Makiko_%2BC_sprite.png` },
      ],
    },
    {
      id: 'pc-special',
      name: 'Special',
      emoji: '\u2728',
      characters: [
        { id: 'pc-ojitchi', name: 'Ojitchi', gender: 'male', condition: 'Adult does not marry after 7 days', sprite: `${S}/b/bf/Ojitchi_%2BC_sprite.png` },
        { id: 'pc-otokitchi', name: 'Otokitchi', gender: 'female', condition: 'Adult does not marry after 7 days', sprite: `${S}/8/88/Otokitchi_%2BC_sprite.png` },
        { id: 'pc-oyajitchi', name: 'Oyajitchi', gender: 'male', condition: 'Marry Ojitchi and Otokitchi', sprite: `${S}/3/33/Oyajitchi_plus_color.png` },
        { id: 'pc-grippatchi', name: 'Grippatchi', gender: 'female', condition: 'Marry Ojitchi and Otokitchi', sprite: `${S}/8/86/Grippatchi_sprite_pluscolor.png` },
        { id: 'pc-patchiman', name: 'Patchiman', gender: 'male', condition: 'Use Hero Set on Kuchipatchi', sprite: `${S}/5/5a/Patchiman_%2BC_sprite.png` },
      ],
    },
  ],
};
