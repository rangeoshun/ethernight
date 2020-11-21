const a = require("./abilities");
const c = require("./classes");
const r = require("./races");
const d = require("./dice");

const generate = (race, klass, abilities_, modifiers_) => (
  (race = r.RACES[race]),
  (klass = c.CLASSES[klass]),
  (abilities_ = a.generate(race, c.abilityPriority(klass))),
  (modifiers_ = a.modifiers(abilities_)),
  {
    ...abilities_,
    modifiers: modifiers_,
    armorClass: c.unarmoredDefense(modifiers_, klass.unarmoredDefense),
    hitPoints: c.hitPoints(klass.hitDie, abilities_.constitution),
  }
);

const check = (ability, character) => d.d20() + character.modifiers[ability];

module.exports = {
  generate,
  check,
};
