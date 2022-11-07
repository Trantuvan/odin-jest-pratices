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

  function encipher(str) {
    const shiftedAl = shifted();
    let currentNum = 0;
    let currentAlpha = "";

    for (const alpha in shiftedAl) {
      if (alpha === str) {
        currentNum = shiftedAl[alpha];
        break;
      }
    }

    for (const alpha in alphabets) {
      if (alphabets[alpha] === currentNum) {
        currentAlpha = alpha;
        break;
      }
    }
    return currentAlpha;
  }

  function decipher(str) {}

  return Object.freeze({
    encipher,
    decipher,
  });
}
