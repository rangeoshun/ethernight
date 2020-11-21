const a = require("./abilities");
const c = require("./classes");
const r = require("./races");

const generate = (race, klass, abilities_, modifiers_) => (
  (race = r.RACES[race]),
  (klass = c.CLASSES[klass])(
    (abilities_ = a.generate(race, c.abilityPriority(klass)))
  ),
  (modifiers_ = a.modifiers(abilities_)),
  {
    ...abilities_,
    modifiers: modifiers_,
    armorClass: c.unarmoredDefense(modifiers_, klass_.unarmoredDefense),
    hitPoints: c.hitPoints(klass_.hitDie, attributes_.constitution),
  }
);

module.exports = {
  generate,
};
