const c = require("../src/lib/classes");

describe(c.calculateValue, () => {
  it("works with no inputs at all", () => {
    expect(c.calculateValue()).toEqual(0);
  });

  it("works with missing missing modifiers", () => {
    expect(c.calculateValue([1, "strength"])).toEqual(1);
  });

  it("works with existing modifiers", () => {
    expect(c.calculateValue([1, "strength"], { strength: 1 })).toEqual(2);
  });

  it("works with multiple modifiers", () => {
    expect(
      c.calculateValue([1, "strength", "dexterity"], {
        strength: 1,
        dexterity: 2,
      })
    ).toEqual(4);
  });
});

describe(c.calculate, () => {
  const character = { class: "wizard", modifiers: { strength: 1 } };

  it("works with no inputs", () => {
    expect(c.calculate()).toEqual(0);
  });

  it("works with character only", () => {
    expect(c.calculate(character)).toEqual(0);
  });

  it("works with character but chain chain", () => {
    expect(c.calculate(character, "groinSmash")).toEqual(0);
  });

  it("works with character and chain", () => {
    expect(c.calculate(character, "unarmedStrike")).toEqual(2);
  });
});
