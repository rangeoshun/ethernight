const c = require("../src/lib/character");

describe(c.generate, () => {
  const character = c.generate("dwarf", "barbarian");

  [
    "armorClass",
    "charisma",
    "constitution",
    "dexterity",
    "hitPoints",
    "intelligence",
    "strength",
    "wisdom",
  ].forEach((prop) =>
    it(`should have none zero ${prop}`, () => {
      expect(character[prop]).toBeGreaterThan(0);
    })
  );
});
