jest.mock("../dice");
const c = require("../character");

describe(c.generate, () => {
  const character = c.generate("dwarf", "barbarian");

  [
    ["charisma", 9],
    ["constitution", 11],
    ["dexterity", 9],
    ["intelligence", 9],
    ["strength", 9],
    ["wisdom", 10],
    ["armorClass", 9],
    ["hitPoints", 18],
  ].forEach(([prop, value]) =>
    it(`has a ${prop} with value ${value}`, () => {
      expect(character[prop]).toEqual(value);
    })
  );

  [
    ["charisma", -1],
    ["constitution", 0],
    ["dexterity", -1],
    ["intelligence", -1],
    ["strength", -1],
    ["wisdom", 0],
  ].forEach(([prop, value]) =>
    it(`has a ${prop} modifier with value ${value}`, () => {
      expect(character.modifiers[prop]).toEqual(value);
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
