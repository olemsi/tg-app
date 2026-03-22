import type { DeviceVersion } from '../types/index.ts';

const S = 'https://static.wikia.nocookie.net/tamagotchi/images';

export const MIX: DeviceVersion = {
  id: 'mix',
  name: 'Tamagotchi m!x',
  categories: [
    {
      id: 'mix-adult-m',
      name: 'Adult \u2642',
      emoji: '\u{1F9D1}',
      characters: [
        { id: 'mix-mametchi', name: 'Mametchi', gender: 'male', condition: '0\u20132 care misses', sprite: `${S}/c/c7/Mametchimix.png` },
        { id: 'mix-kuchipatchi', name: 'Kuchipatchi', gender: 'male', condition: '3\u20134 CM, OR forest theme', sprite: `${S}/5/58/Kuchipatchim%21x.png` },
        { id: 'mix-yotsubatchi', name: 'Yotsubatchi', gender: 'male', condition: 'Floral theme', sprite: `${S}/e/ee/Yotsubatchimix.png` },
        { id: 'mix-gozarutchi', name: 'Gozarutchi', gender: 'male', condition: '5\u20136 CM, OR ninja theme', sprite: `${S}/6/60/Gozarutchimix.png` },
        { id: 'mix-shimagurutchi', name: 'Shimagurutchi', gender: 'male', condition: 'Melody/Spacy/Sanrio: 7+ CM', sprite: `${S}/7/77/Shimagurutchimix.png` },
        { id: 'mix-spacytchi', name: 'Spacytchi', gender: 'male', condition: 'Dream: 7+ CM', sprite: `${S}/f/f1/Spacytchi_m%21x.png` },
        { id: 'mix-shimasimatchi', name: 'ShimaShimatchi', gender: 'male', condition: '20th Anniversary/Gift: 7+ CM', sprite: `${S}/f/f3/Shimashimatchim%21x.png` },
      ],
    },
    {
      id: 'mix-adult-f',
      name: 'Adult \u2640',
      emoji: '\u{1F9D1}',
      characters: [
        { id: 'mix-lovelitchi', name: 'Lovelitchi', gender: 'female', condition: '0\u20132 CM (Dream: 3\u20134 CM)', sprite: `${S}/4/44/Lovelitchimix.png` },
        { id: 'mix-memetchi', name: 'Memetchi', gender: 'female', condition: '3\u20134 CM (Dream: 0\u20132 CM)', sprite: `${S}/8/87/Memetchimix.png` },
        { id: 'mix-nijifuwatchi', name: 'Nijifuwatchi', gender: 'female', condition: 'Sky theme', sprite: `${S}/3/35/Nijifuwatchim%21x.png` },
        { id: 'mix-flowertchi', name: 'Flowertchi', gender: 'female', condition: '5\u20136 CM, OR floral theme', sprite: `${S}/c/cc/Flowertchimix.png` },
        { id: 'mix-momotchi', name: 'Momotchi', gender: 'female', condition: 'Melody/Spacy/Dream/Sanrio: 7+ CM', sprite: `${S}/2/2c/Momotchimix.png` },
        { id: 'mix-makiko', name: 'Makiko', gender: 'female', condition: '20th Anniversary/Gift: 7+ CM', sprite: `${S}/8/84/Makikom%21x.png` },
      ],
    },
  ],
};
