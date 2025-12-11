const parseBold = require("./10-dec-2025");

describe("parseBold", () => {
  test("correct with **", () => {
    expect(parseBold("**This is bold**")).toBe("<b>This is bold</b>");
  });

  test("correct with __", () => {
    expect(parseBold("__This is also bold__")).toBe("<b>This is also bold</b>");
  });

  test("space in the end", () => {
    expect(parseBold("**This is not bold **")).toBe("**This is not bold **");
  });
  test("space in the beginning", () => {
    expect(parseBold("__ This is also not bold__")).toBe(
      "__ This is also not bold__"
    );
  });
  test("mixed correct string", () => {
    expect(
      parseBold("The **quick** brown fox __jumps__ over the **lazy** dog.")
    ).toBe("The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.");
  });
});
