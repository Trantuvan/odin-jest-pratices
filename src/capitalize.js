export default function capitalize(str) {
  if (typeof str !== "string") {
    return "not valid characters";
  }
  const strArrayWithWhiteSpaceAsSeparators = str.split(" ");
  const strArrayWith1stLetterUppercase = strArrayWithWhiteSpaceAsSeparators.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  console.log(strArrayWith1stLetterUppercase.join(" "));
  return strArrayWith1stLetterUppercase.join(" ");
}
