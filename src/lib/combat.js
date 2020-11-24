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

const attack = (modifier, defenderArmorClass, roll_) => (
  (roll_ = roll_ || d.d20()),
  (roll_ === 1 && "failure") ||
    (roll_ === 20 && "critical") ||
    (roll_ + modifier >= defenderArmorClass && "hit") ||
    "miss"
);

const fight = (characters = [], ordered_ = false, ended_ = false) => (
  ordered_ || fight(initiative(characters), true),
  ordered_ &&
    ((ended_ && characters) ||
      ((characters = characters.reduce(
        ([first, ...rest], next_, others_, attack_, damage_) => (
          ([next_, ...others_] = rest),
          console.log(`${first.name} attacks ${next_.name}`),
          (attack_ = attack(first.strength, next_.armorClass)),
          ((damage_ = cl.calculateChain(first, "unarmedStrike")),
          console.log(`it's a ${attack_}`),
          attack_ === "critical" || "hit",
          (console.log(
            `${first.name} injures ${next_.name} (${
              next_.hitPoints - (next_.damage || 0)
            }/${next_.hitPoints} HP) (-${damage_} HP)`
          ),
          (next_ = {
            ...next_,
            damage: (next_.damage || 0) + damage_,
          }))) ||
            (attack_ === "failure" &&
              (consol.log(`${first.name} injures self (-${damage_})`),
              (first = {
                ...first,
                damage: (first.damage || 0) + damage_,
              }))),
          [next_, ...others_, first]
        ),
        characters
      )),
      (ended_ = characters.reduce(
        (acc, curr) =>
          acc ||
          (curr.damage >= curr.hitPoints &&
            !console.log(`${curr.name} is knocked out`)),
        false
      )),
      fight(characters, true, ended_)))
);

module.exports = { attack, fight };
