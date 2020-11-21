const RACES = {
  dwarf: {
    abilities: {
      constitution: 2,
      wisdom: 1,
    },
  },
  elf: {
    abilities: {
      dexterity: 2,
      intelligence: 1,
    },
  },
  halfling: {
    abilities: {
      dexterity: 2,
      charisma: 1,
    },
  },
  human: {
    abilities: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
    },
  },
  dragonborn: {
    abilities: {
      strength: 2,
      charisma: 1,
    },
  },
  gnome: {
    abilities: {
      intelligence: 2,
    },
  },
  halfElf: {
    abilities: {
      charisma: 2,
      custom: [1, 1],
    },
  },
  halfOrk: {
    abilities: {
      strength: 2,
      constitution: 1,
    },
  },
  tiefling: {
    intelligence: 1,
    charisma: 2,
  },
};

module.exports = {
  RACES,
};
