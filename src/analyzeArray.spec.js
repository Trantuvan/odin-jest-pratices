import analyzeArray from "./analyzeArray";

describe("analyzeArray", () => {
  describe("average", () => {
    it("should return 2 as average of [1,2,3]", () => {
      const arr = [1, 2, 3];
      const analyze = analyzeArray(arr);
      expect(analyze.average).toBeCloseTo(2);
    });

    it("should throw cannot calculate empty arr", () => {
      const arr = [];
      const analyze = analyzeArray(arr);
      expect(() => analyze.average).toThrow(/cannot calculate empty arr/);
    });
  });

  describe("min", () => {
    it("should return 1 as min of [1,2,3]", () => {
      const arr = [1, 2, 3];
      const analyze = analyzeArray(arr);
      expect(analyze.min).toBe(1);
    });

    it("should return 1 as min of [1,1,3,5]", () => {
      const arr = [1, 1, 3, 5];
      const analyze = analyzeArray(arr);
      expect(analyze.min).toBe(1);
    });

    it("should throw cannot calculate empty arr", () => {
      const arr = [];
      const analyze = analyzeArray(arr);
      expect(() => analyze.min).toThrow(/cannot calculate empty arr/);
    });
  });

  describe("max", () => {
    it("should return 3 as max of [1,2,3]", () => {
      const arr = [1, 2, 3];
      const analyze = analyzeArray(arr);
      expect(analyze.max).toBe(3);
    });

    it("should return 5 as max of [1,1,3,5]", () => {
      const arr = [1, 1, 3, 5];
      const analyze = analyzeArray(arr);
      expect(analyze.max).toBe(5);
    });

    it("should throw cannot calculate empty arr", () => {
      const arr = [];
      const analyze = analyzeArray(arr);
      expect(() => analyze.max).toThrow(/cannot calculate empty arr/);
    });
  });

  describe("object analyze return", () => {
    it("should return object typed {average: number, min: number, max: number, length:number}", () => {
      const arr = [1, 8, 3, 4, 2, 6];
      const analyze = analyzeArray(arr);
      expect(analyze).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
    });
  });
});
