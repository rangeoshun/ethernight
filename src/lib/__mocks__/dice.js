const die = (sides) => () => sides / 2;

module.exports = {
  die,
  roll: (sides) => die(sides)(),
  d6: die(6),
  d20: die(20),
};
