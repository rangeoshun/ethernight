const die = (sides) => () => Math.ceil(Math.random() * sides);

module.exports = {
  die,
  roll: (sides) => die(sides)(),
  d6: die(6),
  d20: die(20),
};
