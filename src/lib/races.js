const { ABILITIES } = require("./abilities");

const RACES = {
  dwarf: {
    constitution: 2,
    wisdom: 1,
  },
  elf: {
    dexterity: 2,
    intelligence: 1,
  },
  halfling: {
    dexterity: 2,
    charisma: 1,
  },
  human: {
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  },
  dragonborn: {
    strength: 2,
    charisma: 1,
  },
  gnome: {
    intelligence: 2,
  },
  halfElf: {
    charisma: 2,
    custom: [1, 1],
  },
  halfOrk: {
    strength: 2,
    constitution: 1,
  },
  tiefling: {
    intelligence: 1,
    charisma: 2,
  },
};

// TODO: Find out if this is useful at all or not.
const applyRacialModifiers = (abilities, race) =>
  abilities.reduce(
    (acc, ability, modifier_) => (
      (modifier_ = race[ability]),
      (!modifier_ && acc) || { ...acc, [ability]: acc[ability] + modifier_ }
    ),
    abilities
  );

module.exports = {
  RACES,
};
