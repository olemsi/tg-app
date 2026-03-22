import type { DeviceVersion } from '../types/index.ts';

const S = 'https://static.wikia.nocookie.net/tamagotchi/images';

export const PS: DeviceVersion = {
  id: 'ps',
  name: "Tamagotchi P's",
  categories: [
    {
      id: 'ps-adult-m',
      name: 'Adult \u2642',
      emoji: '\u{1F9D1}',
      characters: [
        { id: 'ps-mametchi', name: 'Mametchi', gender: 'male', condition: 'Cosmotchi: 0\u20132 CM + Intelligence/Strength', sprite: `${S}/8/8c/01Mametchi.PNG` },
        { id: 'ps-knightchi', name: 'Knightchi', gender: 'male', condition: 'Cosmotchi: 0\u20132 CM + Style/Charisma/Gourmet', sprite: `${S}/f/f8/Naitotchi-sprite.png` },
        { id: 'ps-gotchimotchi', name: 'Gotchimotchi', gender: 'male', condition: 'Cosmotchi: 3\u20137 CM + Intelligence', sprite: `${S}/5/51/Gotchimotchi.png` },
        { id: 'ps-tacttchi', name: 'Tacttchi', gender: 'male', condition: 'Cosmotchi: 3\u20137 CM + Style/Charisma', sprite: `${S}/a/a2/Takutotchi-sprite.png` },
        { id: 'ps-karakutchi', name: 'Karakutchi', gender: 'male', condition: 'Cosmotchi: 3\u20137 CM + Gourmet/Strength', sprite: `${S}/e/e7/Karakutchi_Sprite_%28Tamagotchi_P%27s%29.png` },
        { id: 'ps-righttchi', name: 'Righttchi', gender: 'male', condition: 'Maimaitchi: 0\u20132 CM + Intelligence/Style/Charisma', sprite: `${S}/0/08/Raitotchi-sprite.png` },
        { id: 'ps-kuchipatchi', name: 'Kuchipatchi', gender: 'male', condition: 'Maimaitchi: 0\u20132 CM + Gourmet/Strength', sprite: `${S}/e/e9/02_Kuchipatchi.PNG` },
        { id: 'ps-nandetchi', name: 'Nandetchi', gender: 'male', condition: 'Maimaitchi: 3\u20137 CM + Intelligence', sprite: `${S}/7/7e/Nandetchi-sprite.png` },
        { id: 'ps-mogumogutchi', name: 'Mogumogutchi', gender: 'male', condition: 'Maimaitchi: 3\u20137 CM + Style/Gourmet', sprite: `${S}/a/a8/Mogumogutchi_p%27s_sprite.png` },
        { id: 'ps-monakatchi', name: 'Monakatchi', gender: 'male', condition: 'Maimaitchi: 3\u20137 CM + Charisma/Strength', sprite: `${S}/6/63/Monakatchi_sprite.gif` },
        { id: 'ps-spacytchi', name: 'Spacytchi', gender: 'male', condition: '8+ CM + Charisma', sprite: `${S}/b/b6/ID-L_Spacytchi.PNG` },
        { id: 'ps-doyatchi', name: 'Doyatchi', gender: 'male', condition: '8+ CM + Style', sprite: `${S}/0/01/Doyatchi_Sprite_%28Tamagotchi_P%27s%29.png` },
        { id: 'ps-atchitchi', name: 'Atchitchi', gender: 'male', condition: '8+ CM + Intelligence/Gourmet/Strength', sprite: `${S}/3/38/Acchitchi_blueline.png` },
        { id: 'ps-shirimotchi', name: 'Shirimotchi', gender: 'male', condition: 'Secret: connect 2+ P\u2019s 5\u00D7 + Strength', sprite: `${S}/3/3b/Shirimotchi-blueline.png` },
        { id: 'ps-charatchi', name: 'Charatchi', gender: 'male', condition: 'Secret: connect 4+ different females + Style', sprite: `${S}/e/eb/Charitchi-sprite.png` },
      ],
    },
    {
      id: 'ps-adult-f',
      name: 'Adult \u2640',
      emoji: '\u{1F9D1}',
      characters: [
        { id: 'ps-yumemitchi', name: 'Yumemitchi', gender: 'female', condition: 'Neotchi: 0\u20132 CM + Intelligence/Charisma', sprite: `${S}/5/5c/P%27s_Yumemitchi.PNG` },
        { id: 'ps-kiramotchi', name: 'Kiramotchi', gender: 'female', condition: 'Neotchi: 0\u20132 CM + Style/Gourmet/Strength', sprite: `${S}/5/5d/Kiramotchi-sprite.png` },
        { id: 'ps-furifuritchi', name: 'Furifuritchi', gender: 'female', condition: 'Neotchi: 3\u20137 CM + Charisma', sprite: `${S}/5/55/Furifuritchi.png` },
        { id: 'ps-patitchi', name: 'Patitchi', gender: 'female', condition: 'Neotchi: 3\u20137 CM + Gourmet', sprite: `${S}/c/c8/Patitchi-sprite.png` },
        { id: 'ps-waltztchi', name: 'Waltztchi', gender: 'female', condition: 'Neotchi: 3\u20137 CM + Style', sprite: `${S}/f/f5/Warutsutchi.gif` },
        { id: 'ps-chokomakatchi', name: 'Chokomakatchi', gender: 'female', condition: 'Neotchi: 3\u20137 CM + Intelligence/Strength', sprite: `${S}/4/44/ChokomakatchiP%27sGuide.png` },
        { id: 'ps-kiraritchi', name: 'Kiraritchi', gender: 'female', condition: 'Nokobotchi: 0\u20132 CM + Style/Charisma', sprite: `${S}/5/53/P%27s_Kiraritchi.PNG` },
        { id: 'ps-himespetchi', name: 'Himespetchi', gender: 'female', condition: 'Nokobotchi: 0\u20132 CM + Intelligence/Gourmet/Strength', sprite: `${S}/d/d2/ID-L-ps_himespetchi.png` },
        { id: 'ps-memetchi', name: 'Memetchi', gender: 'female', condition: 'Nokobotchi: 3\u20137 CM + Style', sprite: `${S}/f/fe/Memetchi_iDL_Ps_4U_Sprite.png` },
        { id: 'ps-julietchi', name: 'Julietchi', gender: 'female', condition: 'Nokobotchi: 3\u20137 CM + Charisma', sprite: `${S}/a/a8/Jurietchi_Sprite_%28Tamagotchi_P%27s%29.png` },
        { id: 'ps-butterflytchi', name: 'Butterflytchi', gender: 'female', condition: 'Nokobotchi: 3\u20137 CM + Intelligence', sprite: `${S}/2/23/Chouchoutchi.gif` },
        { id: 'ps-pekopekotchi', name: 'Pekopekotchi', gender: 'female', condition: 'Nokobotchi: 3\u20137 CM + Gourmet/Strength', sprite: `${S}/c/c8/Pekopekotchi-sprite.png` },
        { id: 'ps-amakutchi', name: 'Amakutchi', gender: 'female', condition: '8+ CM + Charisma/Gourmet', sprite: `${S}/5/56/Amakutchi.gif` },
        { id: 'ps-yukinkotchi', name: 'Yukinkotchi', gender: 'female', condition: '8+ CM + Intelligence/Strength', sprite: `${S}/b/bf/Yukinkotchi_Sprite_%28Tamagotchi_P%27s%29.png` },
        { id: 'ps-amiamitchi', name: 'Amiamitchi', gender: 'female', condition: '8+ CM + Style', sprite: `${S}/2/2d/Amiamitchi_Sprite_%28Tamagotchi_P%27s%29.png` },
        { id: 'ps-harptchi', name: 'Harptchi', gender: 'female', condition: 'Secret: connect 2+ P\u2019s 5\u00D7 + Charisma', sprite: `${S}/4/47/Haputchi-sprite.png` },
        { id: 'ps-hoshigirltchi', name: 'Hoshigirltchi', gender: 'female', condition: 'Secret: connect 4+ different males + Intelligence', sprite: `${S}/d/d1/Hoshigarutchi-sprite.png` },
      ],
    },
    {
      id: 'ps-pets',
      name: 'Tama Pets',
      emoji: '\u{1F43E}',
      characters: [
        { id: 'ps-furilovetchi', name: 'Furilovetchi', gender: 'none', condition: 'Flower Bud Park 10 AM\u201312 PM', sprite: `${S}/a/a3/PsFruilovetchi.png` },
        { id: 'ps-yumecantchi', name: 'Yumecantchi', gender: 'none', condition: 'Flower Bud Park 1\u20134 PM', sprite: `${S}/c/c9/P%27s_yumecantchi.png` },
        { id: 'ps-monatototchi', name: 'Monatototchi', gender: 'none', condition: 'Flower Bud Park 4\u20137 PM', sprite: `${S}/4/49/PsMonatototchi.png` },
        { id: 'ps-rinsetchi', name: 'Rinsetchi', gender: 'none', condition: 'Flower Bud Park 4\u20137 PM', sprite: `${S}/0/00/PsRinsetchi.png` },
        { id: 'ps-chapitchi', name: 'Chapitchi', gender: 'none', condition: 'Flower Bud Park 7\u201310 PM', sprite: `${S}/a/a5/PsChapitchi.png` },
      ],
    },

    // ── TAMA DECO PIERCE EXCLUSIVES ───────────────────
    {
      id: 'ps-love-melody',
      name: 'Love & Melody Pierce',
      emoji: '\u{1F49C}',
      characters: [
        { id: 'ps-kuromametchi', name: 'KuroMametchi', gender: 'male', condition: 'Win TV Catch game 3\u00D7', sprite: `${S}/2/27/Kuromametchi_sprite_p%27s_4u.png` },
        { id: 'ps-lovelitchi', name: 'Lovelitchi', gender: 'female', condition: 'Play with Stage Mic 3\u00D7', sprite: `${S}/0/09/ID-L-15_lovelitchi.png` },
        { id: 'ps-melodytchi', name: 'Melodytchi', gender: 'female', condition: 'Play with New Violin 3\u00D7', sprite: `${S}/4/4c/ID-L-PS_melodytchi.png` },
      ],
    },
    {
      id: 'ps-circus',
      name: 'Tama Star Circus',
      emoji: '\u{1F3AA}',
      characters: [
        { id: 'ps-pierotchi', name: 'Pierotchi', gender: 'male', condition: 'Play with Juggle Set 3\u00D7', sprite: `${S}/8/81/Pierotchi-p.png` },
        { id: 'ps-acrobatchi', name: 'Acrobatchi', gender: 'female', condition: 'Win Acrobatics game 3\u00D7', sprite: `${S}/4/45/Acrobatchi-p.png` },
        { id: 'ps-majokkotchi', name: 'Majokkotchi', gender: 'female', condition: 'Eat Circus Hotdog 3\u00D7', sprite: `${S}/0/0c/Majokkotchi-p.png` },
      ],
    },
    {
      id: 'ps-melodyland',
      name: 'Melody Land',
      emoji: '\u{1F3B9}',
      characters: [
        { id: 'ps-rinkurutchi', name: 'Rinkurutchi', gender: 'male', condition: 'Win Rhythm Cymbal game 3\u00D7', sprite: `${S}/c/c1/Rinkurutchi-sprite.png` },
        { id: 'ps-pianitchi', name: 'Pianitchi', gender: 'female', condition: 'Play with Smapi 3\u00D7', sprite: `${S}/2/2a/P%27s-MelodyLand-Pierce_Pianitchi.png` },
        { id: 'ps-taikotchi', name: 'Taikotchi', gender: 'female', condition: 'Eat Taiko Gratin 3\u00D7', sprite: `${S}/8/83/Taikotchi-sprite.png` },
      ],
    },
    {
      id: 'ps-sweets',
      name: 'Berry Sweets',
      emoji: '\u{1F353}',
      characters: [
        { id: 'ps-decoratchi', name: 'Decoratchi', gender: 'female', condition: 'Play with Deco Cake Set 3\u00D7', sprite: `${S}/5/51/Decoratchi-sprite.png` },
        { id: 'ps-crepetchi', name: 'Crepetchi', gender: 'female', condition: 'Eat Upside Down Crepe 3\u00D7', sprite: `${S}/3/3e/Kureputchi-sprite.png` },
        { id: 'ps-wagassiertchi', name: 'Wagassiertchi', gender: 'male', condition: 'Eat Chocolate Manju 3\u00D7', sprite: `${S}/d/de/Wagashietchi-sprite.png` },
      ],
    },
    {
      id: 'ps-aikatsu',
      name: 'Aikatsu!',
      emoji: '\u{2B50}',
      characters: [
        { id: 'ps-ichigochantchi', name: 'Ichigo-chan-tchi', gender: 'female', condition: 'Eat Nori Bento 3\u00D7', sprite: `${S}/a/a6/Ichigo-chan-tchi_P%27s_Sprite.png` },
        { id: 'ps-aoichantchi', name: 'Aoi-chan-tchi', gender: 'female', condition: 'Use Aikatsu Phone 3\u00D7', sprite: `${S}/e/e4/Aoi.png` },
        { id: 'ps-ranchantchi', name: 'Ran-chan-tchi', gender: 'female', condition: 'Win Appeal Chance game 3\u00D7', sprite: `${S}/6/64/Ran.png` },
      ],
    },
    {
      id: 'ps-coffret',
      name: 'Dream Coffret',
      emoji: '\u{1F48E}',
      characters: [
        { id: 'ps-coffretchi', name: 'Coffretchi', gender: 'female', condition: 'Play with Coffret Palette 3\u00D7', sprite: `${S}/7/72/Coffretchi-sprite.png` },
        { id: 'ps-benitchi', name: 'Benitchi', gender: 'female', condition: 'Eat Sexy Porridge 3\u00D7', sprite: `${S}/7/76/Benitchi-sprite-only.png` },
        { id: 'ps-startchi', name: 'Startchi', gender: 'male', condition: 'Win TV Shuffle game 3\u00D7', sprite: `${S}/d/dd/Startchi-sprite-only.png` },
      ],
    },
    {
      id: 'ps-miracrise',
      name: 'Miracrise',
      emoji: '\u{1FA84}',
      characters: [
        { id: 'ps-miraitchi', name: 'Miraitchi', gender: 'female', condition: 'Win Miracle Coordination game 3\u00D7', sprite: `${S}/6/63/Miraitchi_P%27s_sprite.png` },
        { id: 'ps-clulutchi', name: 'Clulutchi', gender: 'female', condition: 'Eat Rainbow-Colored Donut 3\u00D7', sprite: `${S}/6/65/Clulutchi_%28Tamagotchi_P%27s%29.png` },
        { id: 'ps-smartchi', name: 'Smartchi', gender: 'male', condition: 'Play with X-Kamen Mask 3\u00D7', sprite: `${S}/5/56/Smartotchi_sprite.png` },
      ],
    },
    {
      id: 'ps-aikatsu2',
      name: 'Aikatsu! Dream Academy',
      emoji: '\u{1F31F}',
      characters: [
        { id: 'ps-seirachantchi', name: 'Seira-chan-tchi', gender: 'female', condition: 'Use Rock Guitar 3\u00D7', sprite: `${S}/1/14/Seira.png` },
        { id: 'ps-kiichantchi', name: 'Ki-chan-tchi', gender: 'female', condition: 'Eat Pom Pom Crepe 3\u00D7', sprite: `${S}/d/d8/Tamasprite_Kii-chan-tchi.png` },
        { id: 'ps-sorachantchi', name: 'Sora-chan-tchi', gender: 'female', condition: 'Use Ethnic Bag 3\u00D7', sprite: `${S}/9/99/Sora.png` },
      ],
    },
    {
      id: 'ps-nameko',
      name: 'Nameko Nnf Nnf',
      emoji: '\u{1F344}',
      characters: [
        { id: 'ps-namekotchi', name: 'Namekotchi', gender: 'female', condition: 'Eat Mushroom Food 3\u00D7', sprite: `${S}/e/e7/Namekotchi.png` },
        { id: 'ps-mamenamekotchi', name: 'Mamenamekotchi', gender: 'male', condition: 'Use Cultivation Kit 3\u00D7', sprite: `${S}/f/fb/Mamenameko.png` },
        { id: 'ps-patchinamekotchi', name: 'Patchinamekotchi', gender: 'male', condition: 'Win Counting Mushrooms game 3\u00D7', sprite: `${S}/1/1b/PatchinamekotchiSprite.png` },
      ],
    },
  ],
};
