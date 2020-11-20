const dice = (sides) => () => Math.ceil(Math.random() * sides);

module.exports = {
  d6: dice(6),
  d20: dice(20),
};
