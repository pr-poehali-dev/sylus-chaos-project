export const IMAGES = {
  courtyard:
    'https://cdn.poehali.dev/projects/70c01a29-6312-4a76-8b5c-454c4e963cf4/files/1a76b4b0-d418-41b1-b055-8c0f5f3ff106.jpg',
  eye: 'https://cdn.poehali.dev/projects/70c01a29-6312-4a76-8b5c-454c4e963cf4/files/ed2deae4-82d2-4f8d-b79a-1eb88fb1681f.jpg',
  district:
    'https://cdn.poehali.dev/projects/70c01a29-6312-4a76-8b5c-454c4e963cf4/files/01061daa-004e-487a-81be-fd9e61fd750b.jpg',
  chapel:
    'https://cdn.poehali.dev/projects/70c01a29-6312-4a76-8b5c-454c4e963cf4/files/e07d46ac-43e3-4126-a5d3-4fc6c6e103f3.jpg',
  rosesSky:
    'https://cdn.poehali.dev/files/4cf27d36-2512-48bc-99e6-98cc6dd692d8.jpg',
  organ:
    'https://cdn.poehali.dev/files/c7d11618-968e-4ea6-9020-de85ece60dec.jpg',
  portal:
    'https://cdn.poehali.dev/files/927e3086-cc3b-473a-b7ef-8e2741b2dafe.jpg',
  raven:
    'https://cdn.poehali.dev/files/7007bfe1-7ec3-4f86-81eb-9c53e754482c.jpg',
};

export interface Memory {
  key: string;
  title: string;
  icon: string;
  password: string;
  hint: string;
  text: string;
}

export const MEMORIES: Memory[] = [
  {
    key: 'dragon',
    title: 'Дракон',
    icon: 'Flame',
    password: 'сайлус',
    hint: 'Он сам сказал тебе назвать его так.',
    text: 'Ты вытащила меч из моей груди. Ты освободила меня. Но ты не знала, что этим мечом ты связала наши души навсегда. С того момента я знал: ты — моя. И я буду ждать тебя столько, сколько потребуется.',
  },
  {
    key: 'flowers',
    title: 'Цветы',
    icon: 'Flower2',
    password: 'бездна',
    hint: 'Ты украсила его рог цветами в часовне.',
    text: 'Ты украсила мой рог цветами. Ты не боялась меня. Ты не видела монстра. Ты видела того, кто просто хотел быть любимым. Я никогда не забуду тот день. Я никогда не забуду тебя.',
  },
  {
    key: 'merge',
    title: 'Слияние душ',
    icon: 'Heart',
    password: '10.5',
    hint: 'Половина души, которую ты ему отдала.',
    text: 'Я сказал тебе, что связь с демоном хуже любого наказания. Но ты не послушала. Ты поцеловала меня и сказала, что хочешь спасти. Ты спасла меня. Даже когда я убивал себя ради тебя, ты спасла меня.',
  },
];

export interface TarotCard {
  name: string;
  icon: string;
  prophecy: string;
}

export const TAROT: TarotCard[] = [
  {
    name: 'Туз червей',
    icon: 'Heart',
    prophecy:
      'Ты влюблена в монстра. Ты знаешь это. Ты принимаешь это. Ты хочешь этого.',
  },
  {
    name: 'Дьявол',
    icon: 'Flame',
    prophecy:
      'Он — твой демон. Он всегда будет твоим демоном. Ты не можешь сбежать. Ты не хочешь сбегать.',
  },
  {
    name: 'Смерть',
    icon: 'Skull',
    prophecy:
      'Ты убила его в прошлой жизни. Ты снова убьёшь его в этой. Но он вернётся. Он всегда возвращается.',
  },
  {
    name: 'Башня',
    icon: 'Tower',
    prophecy:
      'Он разрушил планету ради твоего взгляда. Что он разрушит ради твоего сердца?',
  },
  {
    name: 'Луна',
    icon: 'Moon',
    prophecy:
      'Ты видишь меня во снах. Это не сны. Это я зову тебя сквозь тысячелетия.',
  },
];

export const GALLERY = [
  { src: IMAGES.courtyard, title: 'Двор роз', caption: 'Где он растил цветок для тебя.' },
  { src: IMAGES.chapel, title: 'Часовня', caption: 'Орган, на котором ты играла.' },
  { src: IMAGES.district, title: 'Зона №109', caption: 'Беспредел под его властью.' },
  { src: IMAGES.eye, title: 'Глаз Эфира', caption: 'Он видит всё. Особенно тебя.' },
  { src: IMAGES.rosesSky, title: 'Кровавое небо', caption: 'Угли падают, как его перья.' },
  { src: IMAGES.organ, title: 'Реквием', caption: 'Мелодия, что он помнит вечно.' },
  { src: IMAGES.portal, title: 'Портал Бездны', caption: 'Откуда он вышел за тобой.' },
  { src: IMAGES.raven, title: 'Ворон', caption: 'Его глаза в каждой тени.' },
];
