const { parseInputText, exampleSword } = require("../../src/poe/dps");

describe("Dps calculator", () => {
  it("should calculate example sword dps", () => {
    const info = parseInputText(exampleSword);
    const { physicalDps, elementalDps, totalDps } = info.overallStats;
    expect(physicalDps).toBe(285.75);
    expect(elementalDps).toBe(104.25);
    expect(totalDps).toBe(physicalDps + elementalDps);
  });

  it("should return an error if bad data is passed in", () => {
    const info = parseInputText("bad format");
    expect(info.error).not.toBeNull();
  });
});
