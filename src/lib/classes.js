const { modifier } = require("./abilities");
const { die } = require("./dice");

const CLASSES = {
  barbarian: {
    unarmoredDefense: [10, "dexterity", "constitution"],
    primary: ["strength"],
    saving: ["strength", "constitution"],
    hitDie: 12,
  },
  bard: {
    primary: ["charisma"],
    saving: ["dexterity", "charisma"],
    hitDie: 8,
  },
  cleric: {
    primary: ["wisdom"],
    saving: ["wisdom", "charisma"],
    hitDie: 8,
  },
  druid: {
    primary: "wisdom",
    saving: ["intelligence", "wisdom"],
    hitDie: 8,
  },
  fighter: {
    primary: ["strength"],
    saving: ["strength", "constitution"],
    hitDie: 10,
  },
  monk: {
    unarmoredDefense: [10, "dexterity", "wisdom"],
    primary: ["strength", "wisdom"],
    saving: ["strength", "dexterity"],
    hitDie: 8,
  },
  paladin: {
    primary: ["strength", "charisma"],
    saving: ["wisdom", "charisma"],
    hitDie: 10,
  },
  ranger: {
    primary: ["dexterity", "wisdom"],
    saving: ["strength", "dexterity"],
    hitDie: 10,
  },
  rouge: {
    primary: ["dexterity"],
    saving: ["dexterity", "intelligence"],
    hitDie: 8,
  },
  sorcerer: {
    primary: ["charisma"],
    saving: ["constitution", "charisma"],
    hitDie: 6,
  },
  warlock: {
    primary: ["charisma"],
    saving: ["wisdom", "charisma"],
    hitDie: 8,
  },
  wizard: {
    primary: ["intelligence"],
    saving: ["intelligence", "wisdom"],
    hitDie: 6,
  },
};

const staticHitDie = (hitDie) => hitDie / 2 + 1;

const unarmoredDefense = (abilities, components) =>
  components.reduce((acc, ability) => acc + modifier(abilities[ability]));

const hitPoints = (hitDie, constitution, previous = 0, static) => (
  (previous = previous || hitDie),
  (static = (static && staticHitDie(hitDie)) || die(hitDie)),
  previous + static + modifier(constitution)
);

module.exports = { CLASSES, hitPoints };
