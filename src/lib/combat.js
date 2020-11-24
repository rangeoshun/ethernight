const { includes } = require("lodash/fp");
const c = require("./character");
const cl = require("./classes");
const d = require("./dice");

const initiative = (characters) =>
  characters
    .map((char) => ({
      ...char,
      lastDexterityCheck: c.check("dexterity", char),
    }))
    .sort((a, b) => a.lastDexterityCheck - b.lastDexterityCheck);

const hit = (modifier, defenderArmorClass, roll_) => (
  (roll_ = roll_ || d.d20()),
  (roll_ === 1 && "failure") ||
    (roll_ === 20 && "critical") ||
    (roll_ + modifier >= defenderArmorClass && "hit") ||
    "miss"
);

const damageModifiers = {
  critical: 2,
  hit: 1,
  miss: 0,
  failure: -1,
};

const damage = (inflictor, weapon, outcome) =>
  cl.calculateChain(inflictor, weapon) * damageModifiers[outcome];

const attack = ({ inflictor, target, weapon, modifier }, damage_, outcome_) => (
  (outcome_ = hit(inflictor.modifiers[modifier], target.armorClass)),
  (damage_ = damage(inflictor, weapon, outcome_)),
  { inflictor, target, kind: "damage", damage: damage_, outcome: outcome_ }
);

const actions = {
  attack,
};

const actionList = Object.keys(actions);

const turn = ([first, ...rest], output_ = []) =>
  (!first && output_) ||
  (includes(first.kind, actionList) &&
    turn(rest, [...output_, actions[first.kind](first)]));

module.exports = { attack, initiative, turn };
