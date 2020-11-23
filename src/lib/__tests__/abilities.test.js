const a = require("../abilities");

describe(a.generate, () => {
  const abilities = a.generate();

  a.ABILITIES.forEach((ability) =>
    it("has the correct shape", () => {
      expect(abilities[ability]).toBeGreaterThan(0);
    })
  );
});
