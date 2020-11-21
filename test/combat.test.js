const c = require("../src/lib/combat");

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
