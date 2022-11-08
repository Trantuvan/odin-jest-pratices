export default function analyzeArray(arr) {
  function average() {
    if (arr.length <= 0) {
      throw new Error("cannot calculate empty arr");
    }
    return arr.reduce((prev, curr) => (prev += curr), 0) / arr.length;
  }

  function sortAscend() {
    const compareFun = (a, b) => a - b;
    return [...arr].sort(compareFun);
  }

  function min() {
    if (arr.length <= 0) {
      throw new Error("cannot calculate empty arr");
    }
    const sortArray = sortAscend();
    return sortArray[0];
  }

  function max() {
    if (arr.length <= 0) {
      throw new Error("cannot calculate empty arr");
    }
    const sortArray = sortAscend();
    return sortArray[sortArray.length - 1];
  }

  return Object.freeze({
    get average() {
      return average();
    },
    get min() {
      return min();
    },
    get max() {
      return max();
    },
    get length() {
      return arr.length;
    },
  });
}
