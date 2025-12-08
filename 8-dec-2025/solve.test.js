const convertToKgs = require('./8-dec-2025'); 

describe("convertToKgs", () => {
  test("1 → singular pound, plural kilograms", () => {
    expect(convertToKgs(1)).toBe("1 pound equals 0.45 kilograms.");
  });

  test("0 → plural pounds, plural kilograms", () => {
    expect(convertToKgs(0)).toBe("0 pounds equals 0.00 kilograms.");
  });

  test("100 → proper conversion and pluralization", () => {
    expect(convertToKgs(100)).toBe("100 pounds equals 45.36 kilograms.");
  });

  test("2.5 → correct decimals and pluralization", () => {
    expect(convertToKgs(2.5)).toBe("2.5 pounds equals 1.13 kilograms.");
  });

  test("2.20462 → rounds to exactly 1.00 → singular kilogram", () => {
    expect(convertToKgs(2.20462)).toBe("2.20462 pounds equals 1.00 kilogram.");
  });

  // Extra edge-case tests you SHOULD include:
  test("Negative numbers (if allowed)", () => {
    expect(convertToKgs(-5)).toBe("-5 pounds equals -2.27 kilograms.");
  });

  test("Large decimal value", () => {
    expect(convertToKgs(0.99999)).toBe("0.99999 pounds equals 0.45 kilograms.");
  });

  test("Very large number", () => {
    expect(convertToKgs(1000)).toBe("1000 pounds equals 453.59 kilograms.");
  });

  test("Check formatting: always two decimals", () => {
    const result = convertToKgs(10);
    expect(result.includes("4.54 kilograms.")).toBe(true);
  });
});
