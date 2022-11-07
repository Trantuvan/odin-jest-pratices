import caesar from "./caesarCipher";

describe("caesar with key = 1", () => {
  describe("encipher", () => {
    it("should encrypt a -> b", () => {
      const cipherKey1 = caesar(1);
      const encrypt = cipherKey1.encipher("a");

      expect(encrypt).toMatch("b");
    });

    it("should encrypt a word ab -> bc", () => {
      const cipherKey1 = caesar(1);
      const encrypt = cipherKey1.encipher("ab");

      expect(encrypt).toMatch("bc");
    });

    it("should encrypt punctuation whitespace ab c -> bc d", () => {
      const cipherKey1 = caesar(1);
      const encrypt = cipherKey1.encipher("ab c");

      expect(encrypt).toMatch("bc d");
    });
  });
});
