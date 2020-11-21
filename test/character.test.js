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
    it(`has a none zero ${prop}`, () => {
      expect(character[prop]).toBeGreaterThan(0);
    })
  );
});

describe(c.check, () => {
  it("is greater than 0", () => {
    expect(
      c.check("dexterity", { modifiers: { dexterity: 0 } })
    ).toBeGreaterThan(0);
  });

  it("is less than 21", () => {
    expect(c.check("dexterity", { modifiers: { dexterity: 0 } })).toBeLessThan(
      21
    );
  });
});
