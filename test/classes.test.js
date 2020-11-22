const c = require("../src/lib/classes");

describe(c.hitPoints, () => {
  it("without input", () => {
    expect(c.hitPoints()).toEqual(1);
  });

  it("on first level with no modifier", () => {
    expect(c.hitPoints(10)).toEqual(6);
  });

  it("on first level with modifier", () => {
    expect(c.hitPoints(10, 1)).toEqual(7);
  });

  it("on first level with modifier using die", () => {
    expect(c.hitPoints(10, 1, 0, true)).toBeGreaterThan(2);
    expect(c.hitPoints(10, 1, 0, true)).toBeLessThan(12);
  });

  it("with previous hit points and modifier", () => {
    expect(c.hitPoints(10, 1, 7)).toEqual(14);
  });

  it("with previous hit points and modifier using a die", () => {
    expect(c.hitPoints(10, 1, 7)).toBeGreaterThan(8);
    expect(c.hitPoints(10, 1, 7)).toBeLessThan(19);
  });
});

describe(c.calculateValue, () => {
  it("with no inputs at all", () => {
    expect(c.calculateValue()).toEqual(0);
  });

  it("with missing missing modifiers", () => {
    expect(c.calculateValue([1, "strength"])).toEqual(1);
  });

  it("with existing modifiers", () => {
    expect(c.calculateValue([1, "strength"], { strength: 1 })).toEqual(2);
  });

  it("with multiple modifiers", () => {
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

  it("with no inputs", () => {
    expect(c.calculate()).toEqual(0);
  });

  it("with character only", () => {
    expect(c.calculate(character)).toEqual(0);
  });

  it("with character but chain chain", () => {
    expect(c.calculate(character, "groinSmash")).toEqual(0);
  });

  it("with character and chain", () => {
    expect(c.calculate(character, "unarmedStrike")).toEqual(2);
  });
});
