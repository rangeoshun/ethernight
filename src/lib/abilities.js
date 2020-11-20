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

module.exports = {
  ABILITIES,
  STATIC_VALUES,
  value,
  values,
  modifier,
};
