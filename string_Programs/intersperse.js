let inputString = process.argv[2];
const interSperse = function(inputString) {
  let intersperse = "";
  let delimeter = "";
  for(let index = 0; index < inputString.length; index++) {
    intersperse = intersperse + delimeter + inputString[index];
    delimeter = ",";
  }
  return intersperse;
}
console.log(interSperse(inputString));
