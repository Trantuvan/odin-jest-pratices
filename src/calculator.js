export const add = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
  return "args contain a non-number";
};
export const subtract = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a - b;
  }
  return "args contain a non-number";
};
export const multiply = (a, b) => {
  if (isNumber(a) && isNumber(b)) {
    return a * b;
  }
  return "args contain a non-number";
};
export const divide = (a, b) => {
  if (b === 0) {
    return "divide by zero";
  }

  if (isNumber(a) && isNumber(b)) {
    return a / b;
  }

  return "args contain a non-number";
};

const isNumber = (num) => (typeof num === "number" ? true : false);
