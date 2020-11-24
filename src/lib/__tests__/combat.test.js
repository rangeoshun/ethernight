const ch = require("../character");
const c = require("../combat");

describe(c.attack, () => {
  [
    ["critical", 1, 2, 20],
    ["hit", 1, 3, 2],
    ["miss", 1, 21, 19],
    ["failure", 1, 0, 1],
  ].forEach(([expected, ...args]) =>
    it(`${expected} when modifier is ${args[0]} against AC ${args[1]} with roll ${args[2]}`, () =>
      expect(c.attack(...args)).toEqual(expected))
  );
});

describe(c.combat, () => {
  ben = ch.generate("halfling", "monk");
  ben.name = "ben the monk";
  bob = ch.generate("halfOrk", "wizard");
  bob.name = "bob the wizard";
  it("ben vs bob", () => expect(c.fight([bob, ben])).toBeTruthy());
});
