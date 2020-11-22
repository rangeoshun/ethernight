const { uniq, flow } = require("lodash/fp");
const { die, roll } = require("./dice");

const CLASSES = {
  barbarian: {
    hitDie: 12,
    primary: ["strength"],
    saving: ["strength", "constitution"],
    unarmoredDefense: [10, "dexterity", "constitution"],
    unarmedStrike: [[1, "strength"]],
  },
  bard: {
    hitDie: 8,
    primary: ["charisma"],
    saving: ["dexterity", "charisma"],
    unarmoredDefense: [10, "dexterity"],
    unarmedStrike: [[1, "strength"]],
  },
  cleric: {
    hitDie: 8,
    primary: ["wisdom"],
    saving: ["wisdom", "charisma"],
    unarmoredDefense: [10, "dexterity"],
    unarmedStrike: [[1, "strength"]],
  },
  druid: {
    hitDie: 8,
    primary: "wisdom",
    saving: ["intelligence", "wisdom"],
    unarmoredDefense: [10, "dexterity"],
    unarmedStrike: [[1, "strength"]],
  },
  fighter: {
    hitDie: 10,
    primary: ["strength"],
    saving: ["strength", "constitution"],
    unarmoredDefense: [10, "dexterity"],
    unarmedStrike: [[1, "strength"]],
  },
  monk: {
    hitDie: 8,
    primary: ["strength", "wisdom"],
    saving: ["strength", "dexterity"],
    unarmoredDefense: [10, "dexterity", "wisdom"],
    unarmedStrike: [[1, "strength"], "martialArts"],
    martialArts: [
      die(4),
      (monk) => [(monk.strength > monk.dexterity && "strength") || "dexterity"],
    ],
  },
  paladin: {
    hitDie: 10,
    primary: ["strength", "charisma"],
    saving: ["wisdom", "charisma"],
    unarmoredDefense: [10, "dexterity"],
    unarmedStrike: [[1, "strength"]],
  },
  ranger: {
    hitDie: 10,
    primary: ["dexterity", "wisdom"],
    saving: ["strength", "dexterity"],
    unarmoredDefense: [10, "dexterity"],
    unarmedStrike: [[1, "strength"]],
  },
  rouge: {
    hitDie: 8,
    primary: ["dexterity"],
    saving: ["dexterity", "intelligence"],
    unarmoredDefense: [10, "dexterity"],
    unarmedStrike: [[1, "strength"]],
  },
  sorcerer: {
    hitDie: 6,
    primary: ["charisma"],
    saving: ["constitution", "charisma"],
    unarmoredDefense: [10, "dexterity"],
    unarmedStrike: [[1, "strength"]],
  },
  warlock: {
    hitDie: 8,
    primary: ["charisma"],
    saving: ["wisdom", "charisma"],
    unarmoredDefense: [10, "dexterity"],
    unarmedStrike: [[1, "strength"]],
  },
  wizard: {
    hitDie: 6,
    primary: ["intelligence"],
    saving: ["intelligence", "wisdom"],
    unarmoredDefense: [10, "dexterity"],
    unarmedStrike: [[1, "strength"]],
  },
};

const staticHitDie = (hitDie = 0) => hitDie / 2 + 1;

const calculateFeature = (char, [valueFn, modifierFn]) => (
  console.log(char, valueFn, modifierFn),
  ([basic, ...modifiers]) => [
    valueFn(char, basic),
    ...modifierFn(char, modifiers),
  ]
);

const calculateValue = (components = [0], modifiers = {}) =>
  components.reduce((acc, ability) => acc + (modifiers[ability] || 0));

const calculate = (
  char = {},
  chain,
  basic_,
  features_,
  klass_,
  resolver_,
  calc_
) => (
  (klass_ = CLASSES[char.class] || {}),
  ([basic_, ...features_] = klass_[chain] || []),
  (resolver_ = (feat) => calculateFeature(char, klass_[feat])),
  (calc_ = (components) => calculateValue(components, char.modifiers)),
  flow(...features_.map(resolver_), calc_)(basic_)
);

const hitPoints = (
  hitDie = 0,
  modifier = 0,
  previous = 0,
  useDie = false,
  value_
) => (
  (value_ =
    (!useDie && staticHitDie(hitDie)) || (previous && roll(hitDie)) || hitDie),
  previous + value_ + modifier
);

const abilityPriority = (klass) => uniq([...klass.primary, ...klass.saving]);

module.exports = {
  abilityPriority,
  CLASSES,
  hitPoints,
  calculate,
  calculateValue,
};
