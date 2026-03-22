import type { DeviceVersion } from '../types/index.ts';

const S = 'https://static.wikia.nocookie.net/tamagotchi/images';

export const IDL: DeviceVersion = {
  id: 'idl',
  name: 'Tamagotchi iD L',
  categories: [
    // ── iD L (standard) ───────────────────────────────
    {
      id: 'idl-adult-m',
      name: 'iD L \u2642',
      emoji: '\u{1F535}',
      characters: [
        { id: 'idl-mametchi', name: 'Mametchi', gender: 'male', condition: 'From Hanikamitchi: 0\u20131 CM', sprite: `${S}/8/8c/01Mametchi.PNG` },
        { id: 'idl-kuromametchi', name: 'KuroMametchi', gender: 'male', condition: 'From Hanikamitchi: 2\u20133 CM', sprite: `${S}/2/27/Kuromametchi_sprite_p%27s_4u.png` },
        { id: 'idl-shinshitchi', name: 'Shinshitchi', gender: 'male', condition: 'From Hanikamitchi: 4\u20135 CM', sprite: `${S}/2/2a/ShinshitchiIDLSprite.png` },
        { id: 'idl-paintotchi', name: 'Paintotchi', gender: 'male', condition: 'From Hanikamitchi: 6+ CM', sprite: `${S}/7/7b/Paintotchi-idl.png` },
        { id: 'idl-kuishinbotchi', name: 'Kuishinbotchi', gender: 'male', condition: 'From Bokuhositchi: 0\u20131 CM', sprite: `${S}/4/49/Kuishinbotchi_id_l_sprite.png` },
        { id: 'idl-kuchipatchi', name: 'Kuchipatchi', gender: 'male', condition: 'From Bokuhositchi: 2\u20133 CM', sprite: `${S}/e/e9/02_Kuchipatchi.PNG` },
        { id: 'idl-shoototchi', name: 'Shoototchi', gender: 'male', condition: 'From Bokuhositchi: 4\u20135 CM', sprite: `${S}/8/8f/ShoototchiIDLSprite.png` },
        { id: 'idl-gozarutchi', name: 'Gozarutchi', gender: 'male', condition: 'From Bokuhositchi: 6+ CM', sprite: `${S}/6/64/ID-L_Gozarutchi.png` },
        { id: 'idl-sunopotchi', name: 'Sunopotchi', gender: 'male', condition: 'From Happabouyatchi: 0\u20131 CM', sprite: `${S}/a/a2/SunopotchiIDLSprite.png` },
        { id: 'idl-kikitchi', name: 'Kikitchi', gender: 'male', condition: 'From Happabouyatchi: 2\u20133 CM', sprite: `${S}/0/09/05Kikitchi.PNG` },
        { id: 'idl-bokutchi', name: 'Bokutchi', gender: 'male', condition: 'From Happabouyatchi: 4 CM', sprite: `${S}/f/f1/Bokutchi_id_l_sprite.png` },
        { id: 'idl-guriguritchi', name: 'Guriguritchi', gender: 'male', condition: 'From Happabouyatchi: 5 CM', sprite: `${S}/7/75/GuriguritchiIDLSprite.png` },
        { id: 'idl-spacytchi', name: 'Spacytchi', gender: 'male', condition: 'From Happabouyatchi: 6+ CM', sprite: `${S}/9/9d/13Spaceytchi.PNG` },
        { id: 'idl-herotchi', name: 'Herotchi', gender: 'male', condition: 'Connect 6+ different units', sprite: `${S}/0/09/HerotchiIDLSprite.png` },
        { id: 'idl-maisutatchi', name: 'Maisutatchi', gender: 'male', condition: 'Connect same unit 30\u00D7', sprite: `${S}/5/5d/15Maisutaatchi.PNG` },
      ],
    },
    {
      id: 'idl-adult-f',
      name: 'iD L \u2640',
      emoji: '\u{1F535}',
      characters: [
        { id: 'idl-lovelitchi', name: 'Lovelitchi', gender: 'female', condition: 'From Painaputchi: 0\u20131 CM', sprite: `${S}/e/ed/16Lovelitchi.PNG` },
        { id: 'idl-melodytchi', name: 'Melodytchi', gender: 'female', condition: 'From Painaputchi: 2\u20133 CM', sprite: `${S}/9/95/ID-L_Melodytchi.PNG` },
        { id: 'idl-moriritchi', name: 'Moriritchi', gender: 'female', condition: 'From Painaputchi: 4 CM', sprite: `${S}/8/8c/ID-L_Moriritchi.PNG` },
        { id: 'idl-chamametchi', name: 'Chamametchi', gender: 'female', condition: 'From Painaputchi: 5 CM', sprite: `${S}/a/a9/19ChaMametchi.PNG` },
        { id: 'idl-memetchi', name: 'Memetchi', gender: 'female', condition: 'From Painaputchi: 6+ CM', sprite: `${S}/f/fe/Memetchi_iDL_Ps_4U_Sprite.png` },
        { id: 'idl-perotchi', name: 'Perotchi', gender: 'female', condition: 'From Sabosabotchi: 0\u20131 CM', sprite: `${S}/8/88/Perotchi_id_l_sprite.png` },
        { id: 'idl-shigurehimetchi', name: 'Shigurehimetchi', gender: 'female', condition: 'From Sabosabotchi: 2\u20133 CM', sprite: `${S}/0/07/ID-L-15_shigurehimetchi.png` },
        { id: 'idl-makiko', name: 'Makiko', gender: 'female', condition: 'From Sabosabotchi: 4 CM', sprite: `${S}/e/e3/MakikoiDL.png` },
        { id: 'idl-pichipitchi', name: 'Pichipitchi', gender: 'female', condition: 'From Sabosabotchi: 5 CM', sprite: `${S}/f/fc/Pichipitchi_idl_sprite.png` },
        { id: 'idl-flowertchi', name: 'Flowertchi', gender: 'female', condition: 'From Sabosabotchi: 6+ CM', sprite: `${S}/c/c1/17Flowertchi.PNG` },
        { id: 'idl-pompomtchi', name: 'Pompomtchi', gender: 'female', condition: 'From Hineonetchi: 0\u20131 CM', sprite: `${S}/b/b5/Pompomtchi_idl_sprite.png` },
        { id: 'idl-agetchi', name: 'Agetchi', gender: 'female', condition: 'From Hineonetchi: 2\u20133 CM', sprite: `${S}/d/db/Agetchi_iDL.png` },
        { id: 'idl-watawatatchi', name: 'Watawatatchi', gender: 'female', condition: 'From Hineonetchi: 4 CM', sprite: `${S}/6/6b/ID-L-15_watawatatchi.png` },
        { id: 'idl-nachuratchi', name: 'Nachuratchi', gender: 'female', condition: 'From Hineonetchi: 5 CM', sprite: `${S}/8/8e/Nachuratchi_iDL.png` },
        { id: 'idl-uwasatchi', name: 'Uwasatchi', gender: 'female', condition: 'From Hineonetchi: 6+ CM', sprite: `${S}/6/63/ID-L_Uwasatchi.PNG` },
        { id: 'idl-madonnatchi', name: 'Madonnatchi', gender: 'female', condition: 'Connect 6+ different units', sprite: `${S}/9/9e/ID-L_Madonnatchi.PNG` },
        { id: 'idl-giragiratchi', name: 'Giragiratchi', gender: 'female', condition: 'Connect same unit 30\u00D7', sprite: `${S}/4/42/Giragiratchi_iDL_Sprite.png` },
      ],
    },

    // ── 15th Anniversary exclusive ────────────────────
    {
      id: 'idl-15th',
      name: '15th Anniversary',
      emoji: '\u{1F382}',
      characters: [
        { id: 'idl-otogitchi', name: 'Otogitchi', gender: 'male', condition: 'From Kujakutchi: 2\u20133 CM', sprite: `${S}/3/32/Otogitchi15th.png` },
        { id: 'idl-nonopotchi', name: 'Nonopotchi', gender: 'male', condition: 'From Sunnytchi: 4\u20135 CM', sprite: `${S}/d/d7/ID-L-15_nonopotchi.png` },
        { id: 'idl-oyajitchi', name: 'Oyajitchi', gender: 'male', condition: 'From Young Oyajitchi: 6+ CM', sprite: `${S}/5/50/Oyajitchi15th.png` },
        { id: 'idl-rednosetchi', name: 'Rednosetchi', gender: 'male', condition: 'Connect 6+ different units', sprite: `${S}/b/b6/Rednosetchi15th.png` },
        { id: 'idl-prince-tamahiko', name: 'Prince Tamahiko', gender: 'male', condition: 'Connect same unit 30\u00D7', sprite: `${S}/f/fe/Prince_Tamahiko15th.png` },
        { id: 'idl-himetchi', name: 'Himetchi', gender: 'female', condition: 'From Morutchi: 2\u20133 CM', sprite: `${S}/f/fd/Himetchi15th.png` },
        { id: 'idl-antoinetchi', name: 'Antoinetchi', gender: 'female', condition: 'From Morutchi: 4 CM', sprite: `${S}/1/1a/Antoinetchi15th.png` },
        { id: 'idl-mimitchi', name: 'Mimitchi', gender: 'female', condition: 'From Mikazukitchi: 2\u20133 CM', sprite: `${S}/1/18/Mimitchi15th.png` },
        { id: 'idl-momotchi', name: 'Momotchi', gender: 'female', condition: 'From Puddingtchi: 5 CM', sprite: `${S}/b/bd/ID-L-15_momotchi.png` },
        { id: 'idl-dazzilitchi', name: 'Dazzilitchi', gender: 'female', condition: 'Connect 6+ different units', sprite: `${S}/4/4e/Dazzilitchi15th.png` },
        { id: 'idl-princess-tamako', name: 'Princess Tamako', gender: 'female', condition: 'Connect same unit 30\u00D7', sprite: `${S}/2/21/Princess_Tamako15th.png` },
      ],
    },

    // ── Princess Spacy exclusive ──────────────────────
    {
      id: 'idl-ps',
      name: 'Princess Spacy',
      emoji: '\u{1F680}',
      characters: [
        { id: 'idl-akaspetchi', name: 'Akaspetchi', gender: 'male', condition: 'From Bokuhositchi: 6 CM (replaces Shoototchi)', sprite: `${S}/4/42/ID-L-ps_akaspetchi.png` },
        { id: 'idl-pipospetchi', name: 'Pipospetchi', gender: 'male', condition: 'From Happabouyatchi: 6+ CM (replaces Bokutchi)', sprite: `${S}/b/b3/ID-L-ps_pipospetchi.png` },
        { id: 'idl-himespetchi', name: 'Himespetchi', gender: 'female', condition: 'From Sabosabotchi: 0\u20131 CM (replaces Pompomtchi)', sprite: `${S}/d/d2/ID-L-ps_himespetchi.png` },
      ],
    },

    // ── Tama Pets ─────────────────────────────────────
    {
      id: 'idl-pets',
      name: 'Tama Pets',
      emoji: '\u{1F43E}',
      characters: [
        { id: 'idl-bagubagutchi', name: 'Bagubagutchi', gender: 'none', condition: 'Donut Park 10 AM\u201312 PM', sprite: `${S}/9/9f/BagubagutchiIDLSprite.png` },
        { id: 'idl-doremitchi', name: 'Doremitchi', gender: 'none', condition: 'Donut Park 10 AM\u201312 PM', sprite: `${S}/e/eb/DoremitchiIDLSprite.png` },
        { id: 'idl-puchiberitchi', name: 'Puchiberitchi', gender: 'none', condition: 'Donut Park 10 AM\u201312 PM', sprite: `${S}/2/28/PuchiberitchiIDLSprite.png` },
        { id: 'idl-sopratchi', name: 'Sopratchi', gender: 'none', condition: 'Donut Park 12\u20133 PM', sprite: `${S}/c/cd/SopratchiIDLSprite.png` },
        { id: 'idl-hapihapitchi', name: 'Hapihapitchi', gender: 'none', condition: 'Donut Park 12\u20133 PM', sprite: `${S}/a/ac/Hapihapitchi_iDL.png` },
        { id: 'idl-chitchi', name: 'Chitchi', gender: 'none', condition: 'Donut Park 5\u20137 PM', sprite: `${S}/a/a4/ChichitchiIDLSprite.png` },
        { id: 'idl-harapparatchi', name: 'Harapparatchi', gender: 'none', condition: 'Donut Park 5\u20137 PM', sprite: `${S}/c/c6/HarapparatchiIDLSprite.png` },
        { id: 'idl-rubytchi', name: 'Rubytchi', gender: 'none', condition: 'Donut Park 7\u201310 PM (iD L / 15th)', sprite: `${S}/7/7e/RubytchiIDLSprite.png` },
        { id: 'idl-kizunatchi', name: 'Kizunatchi', gender: 'none', condition: 'Donut Park 7\u201310 PM (Princess Spacy)', sprite: `${S}/a/af/ID-L-PS_kizunatchi.PNG` },
        { id: 'idl-shurikentchi', name: 'Shurikentchi', gender: 'none', condition: 'Donut Park 7\u201310 PM', sprite: `${S}/6/69/ShurikentchiIDLSprite.png` },
        { id: 'idl-onsenmoguratchi', name: 'Onsenmoguratchi', gender: 'none', condition: 'Donut Park 7\u201310 PM', sprite: `${S}/e/e6/OnsenmoguratchiMixSprite.png` },
      ],
    },
  ],
};
