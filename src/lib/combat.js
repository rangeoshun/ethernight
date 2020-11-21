const c = require("./character");
const d = require("./dice");

const initiative = (people) =>
  people
    .map((char) => ({
      ...char,
      lastDexterityCheck: c.check("dexterity", char),
    }))
    .sort((a, b) => a.lastDexterityCheck - b.lastDexterityCheck);

const attack = (modifier, defenderArmorClass, roll_) => (
  (roll_ = roll_ || d.d20()),
  (roll_ === 1 && "failure") ||
    (roll_ === 20 && "critical") ||
    (roll_ + modifier >= defenderArmorClass && "hit") ||
    "miss"
);

module.exports = { initiative, attack };
