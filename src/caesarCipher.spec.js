import caesar from "./caesarCipher";

describe("caesar with key = 1", () => {
  describe("encipher", () => {
    it("should encrypt a -> b", () => {
      const cipherKey1 = caesar(1);
      const encrypt = cipherKey1.encipher("a");

      expect(encrypt).toMatch("b");
    });

    it("should encrypt z -> a", () => {
      const cipherKey1 = caesar(1);
      const encrypt = cipherKey1.encipher("z");

      expect(encrypt).toMatch("a");
    });

    it("should encrypt a word ab -> bc", () => {
      const cipherKey1 = caesar(1);
      const encrypt = cipherKey1.encipher("ab");

      expect(encrypt).toMatch("bc");
    });

    it("should encrypt punctuation whitespace attack at dawn -> buubdl bu ebxo", () => {
      const cipherKey1 = caesar(1);
      const encrypt = cipherKey1.encipher("attack at dawn");

      expect(encrypt).toMatch("buubdl bu ebxo");
    });
  });

  describe("decipher", () => {
    it("should decrypt a -> z", () => {
      const cipherKey1 = caesar(1);
      const decrypt = cipherKey1.decipher("a");

      expect(decrypt).toMatch("z");
    });

    it("should decrypt b -> a", () => {
      const cipherKey1 = caesar(1);
      const decrypt = cipherKey1.decipher("b");

      expect(decrypt).toMatch("a");
    });

    it("should encrypt a word ab -> za", () => {
      const cipherKey1 = caesar(1);
      const decrypt = cipherKey1.decipher("ab");

      expect(decrypt).toMatch("za");
    });

    it("should encrypt punctuation whitespace buubdl bu ebxo -> attack at dawn", () => {
      const cipherKey1 = caesar(1);
      const decrypt = cipherKey1.decipher("buubdl bu ebxo");

      expect(decrypt).toMatch("attack at dawn");
    });
  });
});
