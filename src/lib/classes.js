const { uniq } = require("lodash/fp");
const { die } = require("./dice");

const CLASSES = {
  barbarian: {
    hitDie: 12,
    primary: ["strength"],
    saving: ["strength", "constitution"],
    unarmoredDefense: [10, "dexterity", "constitution"],
  },
  bard: {
    hitDie: 8,
    primary: ["charisma"],
    saving: ["dexterity", "charisma"],
    unarmoredDefense: [10, "dexterity"],
  },
  cleric: {
    hitDie: 8,
    primary: ["wisdom"],
    saving: ["wisdom", "charisma"],
    unarmoredDefense: [10, "dexterity"],
  },
  druid: {
    hitDie: 8,
    primary: "wisdom",
    saving: ["intelligence", "wisdom"],
    unarmoredDefense: [10, "dexterity"],
  },
  fighter: {
    hitDie: 10,
    primary: ["strength"],
    saving: ["strength", "constitution"],
    unarmoredDefense: [10, "dexterity"],
  },
  monk: {
    hitDie: 8,
    primary: ["strength", "wisdom"],
    saving: ["strength", "dexterity"],
    unarmoredDefense: [10, "dexterity", "wisdom"],
  },
  paladin: {
    hitDie: 10,
    primary: ["strength", "charisma"],
    saving: ["wisdom", "charisma"],
    unarmoredDefense: [10, "dexterity"],
  },
  ranger: {
    hitDie: 10,
    primary: ["dexterity", "wisdom"],
    saving: ["strength", "dexterity"],
    unarmoredDefense: [10, "dexterity"],
  },
  rouge: {
    hitDie: 8,
    primary: ["dexterity"],
    saving: ["dexterity", "intelligence"],
    unarmoredDefense: [10, "dexterity"],
  },
  sorcerer: {
    hitDie: 6,
    primary: ["charisma"],
    saving: ["constitution", "charisma"],
    unarmoredDefense: [10, "dexterity"],
  },
  warlock: {
    hitDie: 8,
    primary: ["charisma"],
    saving: ["wisdom", "charisma"],
    unarmoredDefense: [10, "dexterity"],
  },
  wizard: {
    hitDie: 6,
    primary: ["intelligence"],
    saving: ["intelligence", "wisdom"],
    unarmoredDefense: [10, "dexterity"],
  },
};

const staticHitDie = (hitDie) => hitDie / 2 + 1;

const unarmoredDefense = (modifiers, components) =>
  components.reduce((acc, ability) => acc + modifiers[ability]);

const hitPoints = (hitDie, modifier, previous = 0, static = false) => (
  (static =
    (static && staticHitDie(hitDie)) || (previous && die(hitDie)) || hitDie),
  previous + static + modifier
);

const abilityPriority = (klass) => uniq([...klass.primary, ...klass.saving]);

module.exports = {
  abilityPriority,
  CLASSES,
  hitPoints,
  unarmoredDefense,
};
