import { add, subtract, multiply, divide } from "./calculator";

describe("calculator", () => {
  describe("add", () => {
    it("2 + 2 = 4", () => {
      expect(add(2, 2)).toBe(4);
    });

    it("-2 + 2 = 0", () => {
      expect(add(2, -2)).toBe(0);
    });

    it("'2' + 3, args contain a non-number", () => {
      expect(add("2", 3)).toMatch(/args contain a non-number/);
    });
  });

  describe("subtract", () => {
    it("2 - 2 = 0", () => {
      expect(subtract(2, 2)).toBe(0);
    });

    it("-2 - 2 = -4", () => {
      expect(subtract(-2, 2)).toBe(-4);
    });

    it("-2 - -2 = 0", () => {
      expect(subtract(-2, -2)).toBe(0);
    });

    it("'2' - 3, args contain a non-number", () => {
      expect(subtract("2", 3)).toMatch(/args contain a non-number/);
    });
  });

  describe("multiply", () => {
    it("2 * 2 = 4", () => {
      expect(multiply(2, 2)).toBe(4);
    });

    it("2 * -2 = -4", () => {
      expect(multiply(2, -2)).toBe(-4);
    });

    it("-2 * -2 = 4", () => {
      expect(multiply(-2, -2)).toBe(4);
    });

    it("'2' * 3, args contain a non-number", () => {
      expect(multiply("2", 3)).toMatch(/args contain a non-number/);
    });
  });

  describe("divide", () => {
    it("2 / 2 = 1", () => {
      expect(divide(2, 2)).toBe(1);
    });

    it("2 / -2 = -1", () => {
      expect(divide(2, -2)).toBe(-1);
    });

    it("2 / 3 = 0.67", () => {
      expect(divide(2, 3)).toBeCloseTo(0.67);
    });

    it("0 / 3 = 0", () => {
      expect(divide(0, 3)).toBeCloseTo(0);
    });

    it("3 / 0, divide by zero", () => {
      expect(divide(3, 0)).toMatch(/divide by zero/);
    });
  });
});
