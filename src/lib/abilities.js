const { uniq } = require("lodash/fp");
const { d6 } = require("./dice.js");

const ABILITIES = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
];

const STATIC_VALUES = [15, 14, 13, 12, 10, 8];

const value = () =>
  Array(4)
    .fill()
    .map(d6)
    .sort((a, b) => a - b)
    .slice(1)
    .reduce((acc, n) => acc + n);

const values = () =>
  Array(6)
    .fill()
    .map(value)
    .sort((a, b) => b - a);

const modifier = (value) => Math.floor((value - 10) / 2);

const generate = (baseline = {}, priorities = [], values_) => (
  (values_ = values()),
  uniq([...priorities, ...ABILITIES]).reduce(
    (acc, ability, index) => ({
      ...acc,
      [ability]: values_[index] + (baseline[ability] || 0),
    }),
    {}
  )
);

const modifiers = (abilities) =>
  ABILITIES.reduce(
    (acc, ability) => ({
      ...acc,
      [ability]: modifier(abilities[ability]),
    }),
    {}
  );

module.exports = {
  ABILITIES,
  STATIC_VALUES,
  value,
  values,
  modifier,
  modifiers,
  generate,
};
