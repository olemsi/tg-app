import type { DeviceVersion } from '../types/index.ts';

const S = 'https://static.wikia.nocookie.net/tamagotchi/images';

export const ON: DeviceVersion = {
  id: 'on',
  name: 'Tamagotchi On',
  categories: [
    {
      id: 'on-adult-m',
      name: 'Adult \u2642',
      emoji: '\u{1F9D1}',
      characters: [
        { id: 'on-mametchi', name: 'Mametchi', gender: 'male', condition: '0\u20131 CM, OR 2\u20133 CM + VR Set 5\u00D7', sprite: `${S}/c/c7/Mametchimix.png` },
        { id: 'on-kuromametchi', name: 'KuroMametchi', gender: 'male', condition: '2\u20133 CM, OR 4\u20135 CM + Rice Omelet 3\u00D7', sprite: `${S}/2/24/Kuromametchim%21x.png` },
        { id: 'on-kuchipatchi', name: 'Kuchipatchi', gender: 'male', condition: '4\u20135 CM, OR Chow Mein 5\u00D7', sprite: `${S}/5/58/Kuchipatchim%21x.png` },
        { id: 'on-kikitchi', name: 'Kikitchi', gender: 'male', condition: '6 CM, OR Scooter 10\u00D7', sprite: `${S}/c/c2/Kikitchimix.png` },
        { id: 'on-gozarutchi', name: 'Gozarutchi', gender: 'male', condition: '7+ care mistakes', sprite: `${S}/6/60/Gozarutchimix.png` },
      ],
    },
    {
      id: 'on-adult-f',
      name: 'Adult \u2640',
      emoji: '\u{1F9D1}',
      characters: [
        { id: 'on-lovelitchi', name: 'Lovelitchi', gender: 'female', condition: '0\u20131 CM, OR 2\u20133 CM + Pancakes 3\u00D7', sprite: `${S}/4/44/Lovelitchimix.png` },
        { id: 'on-memetchi', name: 'Memetchi', gender: 'female', condition: '2\u20133 CM, OR 4\u20135 CM + Donuts 3\u00D7', sprite: `${S}/8/87/Memetchimix.png` },
        { id: 'on-nijifuwatchi', name: 'Nijifuwatchi', gender: 'female', condition: '4\u20135 CM, OR Cream Puffs 5\u00D7', sprite: `${S}/3/35/Nijifuwatchim%21x.png` },
        { id: 'on-pompomtchi', name: 'Pompomtchi', gender: 'female', condition: '6 CM, OR Lemon Pie 5\u00D7 (all except Sanrio)', sprite: `${S}/b/ba/Pompomtchi.png` },
        { id: 'on-violetchi', name: 'Violetchi', gender: 'female', condition: '6 CM, OR Chiffon Cake 5\u00D7 (Sanrio only)', sprite: `${S}/6/65/Violetchi_sprite_On.png` },
        { id: 'on-watawatatchi', name: 'Watawatatchi', gender: 'female', condition: '7+ care mistakes', sprite: `${S}/0/0a/Watawatatchimix.png` },
      ],
    },
    {
      id: 'on-pets',
      name: 'Tama Pets',
      emoji: '\u{1F43E}',
      characters: [
        { id: 'on-marinmaritchi', name: 'Marinmaritchi', gender: 'none', condition: 'Leave Flying Disc, Binoculars, or Chick Nesting Doll outside', sprite: `${S}/7/79/Harappatachi.PNG` },
        { id: 'on-monamomotchi', name: 'Monamomotchi', gender: 'none', condition: 'Leave Coin Purse, Art Canvas, or DIY Soba outside', sprite: `${S}/d/d8/MonatototchiSprite.PNG` },
        { id: 'on-shinobikentchi', name: 'Shinobikentchi', gender: 'none', condition: 'Leave Treadmill, Unicycle, or Flower Swing outside', sprite: `${S}/7/74/ShurikentchiSprite.PNG` },
        { id: 'on-shampootchi', name: 'Shampootchi', gender: 'none', condition: 'Leave Hair Dryer or Vanity outside', sprite: `${S}/f/fb/RinsetchiSprite.PNG` },
        { id: 'on-amichaktchi', name: 'Amichaktchi', gender: 'none', condition: 'Leave Fly Carpet, Music Box, or Pastel Brush outside', sprite: `${S}/0/07/AmipoketchiSprite.PNG` },
        { id: 'on-blueberrytchi', name: 'Blueberrytchi', gender: 'none', condition: 'Leave Oven, Plant Tools, or Honey Pot outside', sprite: `${S}/0/0f/PuchiberitchiSprite.PNG` },
        { id: 'on-niyakentchi', name: 'Niyakentchi', gender: 'none', condition: 'Leave Scooter or Magic Set outside', sprite: `${S}/9/99/DoyakentchiSprite.PNG` },
        { id: 'on-curltchi', name: 'Curltchi', gender: 'none', condition: 'Leave VR Set, Balloons, Racket, or Flower Cracker outside', sprite: `${S}/4/44/Chapitchi.PNG` },
        { id: 'on-kuritchi', name: 'Kuritchi', gender: 'none', condition: 'Leave Train Set, Ball, or Harmonica outside', sprite: `${S}/8/80/Chitchi.png` },
        { id: 'on-pinkrubytchi', name: 'PinkRubytchi', gender: 'none', condition: 'Leave Fortune, No G Kit, or Star Room outside (rare)', sprite: `${S}/8/83/RubytchiSprite.PNG` },
        { id: 'on-hoshimakitchi', name: 'Hoshimakitchi', gender: 'none', condition: 'Leave Magazine, Garden Kit, or Trunk outside (Fairy/Magic/Pastel/WG)', sprite: `${S}/6/6d/MakimotchiSprite.png` },
      ],
    },
  ],
};
