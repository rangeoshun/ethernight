jest.mock("../dice");
const c = require("../classes");

describe("classes", () => {
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
      expect(c.hitPoints(10, 1, 0, true)).toEqual(11);
    });

    it("with previous hit points and modifier", () => {
      expect(c.hitPoints(10, 1, 7)).toEqual(14);
    });

    it("with previous hit points and modifier using a die", () => {
      expect(c.hitPoints(10, 1, 11, true)).toEqual(17);
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

  describe(c.calculateChain, () => {
    const character = { class: "wizard", modifiers: { strength: 1 } };

    it("with no inputs", () => {
      expect(c.calculateChain()).toEqual(0);
    });

    it("with character only", () => {
      expect(c.calculateChain(character)).toEqual(0);
    });

    it("with character but chain chain", () => {
      expect(c.calculateChain(character, "groinSmash")).toEqual(0);
    });

    it("with character and chain", () => {
      expect(c.calculateChain(character, "unarmedStrike")).toEqual(2);
    });
  });
});
