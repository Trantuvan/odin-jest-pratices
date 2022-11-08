export default function caesar(mod) {
  const alphabets = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  function shifted() {
    const shifted = {};

    for (const key in alphabets) {
      shifted[key] = alphabets[key] + mod;
    }

    const reverseShiftKeys = Object.keys(shifted).reverse();

    for (let i = 0; i < mod; i++) {
      shifted[reverseShiftKeys[i]] = i;
    }

    return shifted;
  }

  function mapAlphaToNum(char, mapObj) {
    for (const alpha in mapObj) {
      if (alpha === char) {
        return mapObj[alpha];
      }
    }
  }

  function mapNumToAlpha(num, mapObj) {
    for (const alpha in mapObj) {
      if (mapObj[alpha] === num) {
        return alpha;
      }
    }
  }

  function encipher(str) {
    const shiftedAl = shifted();
    const strArr = str.split("");

    const mapNumArr = strArr.map((char) => mapAlphaToNum(char, shiftedAl));
    const mapAlphaArr = mapNumArr.map((num) => mapNumToAlpha(num, alphabets));
    const mapAlphaWithWhiteSpace = mapAlphaArr.map((val) => val ?? " ");
    const result = mapAlphaWithWhiteSpace.join("");

    return result;
  }

  function decipher(str) {
    const shiftedAl = shifted();
    const strArr = str.split("");

    const mapNumArr = strArr.map((char) => mapAlphaToNum(char, alphabets));
    const mapAlphaArr = mapNumArr.map((num) => mapNumToAlpha(num, shiftedAl));
    const mapAlphaWithWhiteSpace = mapAlphaArr.map((val) => val ?? " ");
    const result = mapAlphaWithWhiteSpace.join("");

    return result;
  }
  return Object.freeze({
    encipher,
    decipher,
  });
}
