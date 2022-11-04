import reverse from "./reverseString";

describe("reverseString", () => {
  it("abc should become cba", () => {
    expect(reverse("abc")).toMatch(/cba/);
  });

  it("what about spaces becomes secaps tuoba tahw", () => {
    expect(reverse("what about spaces")).toMatch(/secaps tuoba tahw/);
  });

  it("'1234' becomes '4321'", () => {
    expect(reverse("'1234'")).toMatch(/4321/);
  });

  it("not a string", () => {
    expect(reverse(123)).toMatch(/not a string/);
  });
});
