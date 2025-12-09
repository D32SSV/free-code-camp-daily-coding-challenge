const mostFrequent = require("./9-dec-2025");

describe("mostFrequent", () => {
  
  test("returns most frequent string", () => {
    expect(mostFrequent(["a", "b", "a", "c"])).toBe("a");
  });

  test("returns most frequent number", () => {
    expect(mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9])).toBe(2);
  });

  test("handles booleans and mixed types", () => {
    expect(mostFrequent([true, false, "false", "true", false])).toBe(false);
  });

});
