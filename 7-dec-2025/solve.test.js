const solve = require("./7-Dec-2025");

describe("solve() word compression", () => {
  test("compresses consecutive duplicate words", () => {
    expect(solve("hi hi hi there there you")).toBe("hi(3) there(2) you");
  });

  test("returns original words when no duplicates exist", () => {
    expect(solve("one two three")).toBe("one two three");
  });

  test("handles a single word", () => {
    expect(solve("hello")).toBe("hello");
  });

  test("handles two identical words", () => {
    expect(solve("yes yes")).toBe("yes(2)");
  });

  test("handles mixed duplicates", () => {
    expect(solve("a a b b b c c d")).toBe("a(2) b(3) c(2) d");
  });

//   test("handles multiple spaces between words", () => {
//     expect(solve("hi   hi   hi   there")).toBe("hi(3) there");
//   });

//   test("trims leading/trailing spaces", () => {
//     expect(solve("   hi hi   hi   ")).toBe("hi(3)");
//   });

//   test("returns 'No result' for empty string", () => {
//     expect(solve("")).toBe("No result");
//   });

  test("returns 'No result' for whitespace-only string", () => {
    expect(solve("          ")).toBe("No result");
  });

  test("treats different-case words as different", () => {
    expect(solve("hi Hi hi")).toBe("hi Hi hi");
  });

  test("handles long sequences properly", () => {
    const input = "x ".repeat(50).trim();
    expect(solve(input)).toBe("x(50)");
  });

  test("handles no spaces between identical words (edge case)", () => {
    // This case shouldn't be merged since they're not space-separated
    expect(solve("hihi hi")).toBe("hihi hi");
  });
});
