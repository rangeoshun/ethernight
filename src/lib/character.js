const a = require("./abilities");
const c = require("./classes");
const r = require("./races");
const d = require("./dice");

const generate = (race, klassName, abilities_, modifiers_, klass_) => (
  (race = r.RACES[race]),
  (klass_ = c.CLASSES[klassName]),
  (abilities_ = a.generate(race, c.abilityPriority(klass_))),
  (modifiers_ = a.modifiers(abilities_)),
  {
    ...abilities_,
    modifiers: modifiers_,
    armorClass: c.calculateValue(modifiers_, klass_.unarmoredDefense),
    hitPoints: c.hitPoints(klass_.hitDie, abilities_.constitution),
    class: klassName,
  }
);

const check = (ability, character) => d.d20() + character.modifiers[ability];

module.exports = {
  generate,
  check,
};
