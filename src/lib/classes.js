const { uniq } = require("lodash/fp");
const { die, roll } = require("./dice");

const CLASSES = {
  barbarian: {
    hitDie: 12,
    primary: ["strength"],
    saving: ["strength", "constitution"],
    unarmoredDefense: [10, "dexterity", "constitution"],
    unarmedSrike: [1, "strength"],
  },
  bard: {
    hitDie: 8,
    primary: ["charisma"],
    saving: ["dexterity", "charisma"],
    unarmoredDefense: [10, "dexterity"],
    unarmedSrike: [1, "strength"],
  },
  cleric: {
    hitDie: 8,
    primary: ["wisdom"],
    saving: ["wisdom", "charisma"],
    unarmoredDefense: [10, "dexterity"],
    unarmedSrike: [1, "strength"],
  },
  druid: {
    hitDie: 8,
    primary: "wisdom",
    saving: ["intelligence", "wisdom"],
    unarmoredDefense: [10, "dexterity"],
    unarmedSrike: [1, "strength"],
  },
  fighter: {
    hitDie: 10,
    primary: ["strength"],
    saving: ["strength", "constitution"],
    unarmoredDefense: [10, "dexterity"],
    unarmedSrike: [1, "strength"],
  },
  monk: {
    hitDie: 8,
    primary: ["strength", "wisdom"],
    saving: ["strength", "dexterity"],
    unarmoredDefense: [10, "dexterity", "wisdom"],
    unarmedSrike: [1, "strength"],
    martialArts: [
      die(4),
      (monk) => (monk.strength > monk.dexterity && "strength") || "dexterity",
    ],
  },
  paladin: {
    hitDie: 10,
    primary: ["strength", "charisma"],
    saving: ["wisdom", "charisma"],
    unarmoredDefense: [10, "dexterity"],
    unarmedSrike: [1, "strength"],
  },
  ranger: {
    hitDie: 10,
    primary: ["dexterity", "wisdom"],
    saving: ["strength", "dexterity"],
    unarmoredDefense: [10, "dexterity"],
    unarmedSrike: [1, "strength"],
  },
  rouge: {
    hitDie: 8,
    primary: ["dexterity"],
    saving: ["dexterity", "intelligence"],
    unarmoredDefense: [10, "dexterity"],
    unarmedSrike: [1, "strength"],
  },
  sorcerer: {
    hitDie: 6,
    primary: ["charisma"],
    saving: ["constitution", "charisma"],
    unarmoredDefense: [10, "dexterity"],
    unarmedSrike: [1, "strength"],
  },
  warlock: {
    hitDie: 8,
    primary: ["charisma"],
    saving: ["wisdom", "charisma"],
    unarmoredDefense: [10, "dexterity"],
    unarmedSrike: [1, "strength"],
  },
  wizard: {
    hitDie: 6,
    primary: ["intelligence"],
    saving: ["intelligence", "wisdom"],
    unarmoredDefense: [10, "dexterity"],
    unarmedSrike: [1, "strength"],
  },
};

const staticHitDie = (hitDie) => hitDie / 2 + 1;

const unarmoredDefense = (modifiers, components) =>
  components.reduce((acc, ability) => acc + modifiers[ability]);

const hitPoints = (hitDie, modifier, previous = 0, useDice = false, value_) => (
  (value_ =
    (useDice && staticHitDie(hitDie)) || (previous && roll(hitDie)) || hitDie),
  previous + value_ + modifier
);

const abilityPriority = (klass) => uniq([...klass.primary, ...klass.saving]);

module.exports = {
  abilityPriority,
  CLASSES,
  hitPoints,
  unarmoredDefense,
};
