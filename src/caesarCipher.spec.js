import caesar from "./caesarCipher";

describe("caesar with key = 1", () => {
  describe("encipher", () => {
    it("should encrypt a -> b", () => {
      const cipherKey1 = caesar(1);
      const encrypt = cipherKey1.encipher("a");

      expect(encrypt).toMatch("b");
    });
  });
});
