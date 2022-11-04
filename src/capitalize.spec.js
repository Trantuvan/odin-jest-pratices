import capitalize from "./capitalize";

describe("capitalize", () => {
  it("test should become Test", () => {
    expect(capitalize("test")).toMatch(/Test/);
  });

  it("TEST should become TEST", () => {
    expect(capitalize("TEST")).toMatch(/TEST/);
  });

  it("three words should be become Three Words", () => {
    expect(capitalize("three words")).toMatch(/Three Words/);
  });

  it("should only capitalized string 12@# abcd@#34 -> 12@# Abcd@#34", () => {
    expect(capitalize("12@# abcd@#34")).toMatch(/12@# Abcd@#34/);
  });

  it("should only capitalized string 12@#abcd @#34 -> 12@#abcd @#34", () => {
    expect(capitalize("12@#abcd @#34")).toMatch(/12@#abcd @#34/);
  });

  it("should only capitalized string 123", () => {
    expect(capitalize(123)).toMatch(/not valid characters/);
  });
});
