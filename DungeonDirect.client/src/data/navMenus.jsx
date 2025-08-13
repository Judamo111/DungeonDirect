
const navMenus = [
    {
    title: 'All Products',
    path: '/catalogue/all-products',
  },
  {
    title: 'Warrior Wares',
    path: '/catalogue/warrior',
    items: [
      { label: 'Armor', path: '/catalogue/warrior/armor' },
      { label: 'Weapons', path: '/catalogue/warrior/weapons' },
      { label: 'Shields', path: '/catalogue/warrior/shields' }
    ]
  },
  {
    title: 'Mystic Market',
    path: '/catalogue/wizard',
    items: [
      { label: 'Potions', path: '/catalogue/wizard/potions' },
      { label: 'Robes', path: '/catalogue/wizard/robes' },
      { label: 'Foci', path: '/catalogue/wizard/foci' }
    ]
  },
  {
    title: 'Bard Botique',
    path: '/catalogue/bard',
    items: [
      { label: 'Instruments', path: '/catalogue/bard/instruments' },
      { label: 'Attire', path: '/catalogue/bard/attire' },
      { label: 'Sheet Music', path: '/catalogue/bard/sheet-music' }
    ]
  },
  {
    title: "Thieves' Den",
    path: '/catalogue/thief',
    items: [
      { label: 'Tools', path: '/catalogue/thief/tools' },
      { label: 'Poisons', path: '/catalogue/thief/poisons' },
      { label: 'Lockpicks', path: '/catalogue/thief/lockpicks' }
    ]
  },
  {
    title: "Ranger's Rack",
    path: '/catalogue/ranger',
    items: [
      { label: 'Ranged Weapons', path: '/catalogue/ranger/ranged-weapons' },
      { label: 'Traps', path: '/catalogue/ranger/traps' },
      { label: 'Gear', path: '/catalogue/ranger/gear' }
    ]
  },
  {
    title: 'Divine Depot',
    path: '/catalogue/cleric',
    items: [
      { label: 'Vestments', path: '/catalogue/cleric/vestments' },
      { label: 'Holy Water', path: '/catalogue/cleric/holy-water' },
      { label: 'Iconography', path: '/catalogue/cleric/iconography' }
    ]
  }
];

export default navMenus;
