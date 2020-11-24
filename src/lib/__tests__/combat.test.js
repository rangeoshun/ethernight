const ch = require("../character");
const c = require("../combat");

describe(c.attack, () => {});

describe(c.combat, () => {
  const ben = ch.generate("halfling", "monk");
  ben.name = "ben the monk";
  const bob = ch.generate("halfOrk", "wizard");
  bob.name = "bob the wizard";
  const action = {
    inflictor: ben,
    kind: "attack",
    weapon: "unarmedStrike",
    modifier: "strength",
    target: bob,
  };

  it("ben vs bob", () =>
    expect(c.turn([action])).toEqual([
      expect.objectContaining({
        inflictor: expect.objectContaining(ben),
        target: expect.objectContaining(bob),
        outcome: expect.stringMatching(/critical|hit|miss|failure/),
      }),
    ]));
});
