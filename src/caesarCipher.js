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
  let isShifted = false;

  function shifted() {
    const shifted = {};
    isShifted = true;

    for (const key in alphabets) {
      shifted[key] = alphabets[key] + mod;
    }
    return shifted;
  }

  function unShifted() {
    const unShifted = {};

    if (isShifted === true) {
      const shiftedAl = shifted();

      for (const key in shiftedAl) {
        unShifted[key] = shiftedAl[key] - mod;
      }
    }
    return unShifted;
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
      if (alphabets[alpha] === num) {
        return alpha;
      }
    }
  }

  function encipher(str) {
    const shiftedAl = shifted();
    const strArr = str.split("");

    const mapNumArr = strArr.map((char) => mapAlphaToNum(char, shiftedAl));
    const mapAlphaArr = mapNumArr.map((num) => mapNumToAlpha(num, alphabets));
    const result = mapAlphaArr.join("");

    return result;
  }

  function decipher(str) {}

  return Object.freeze({
    encipher,
    decipher,
  });
}
