let inputString = process.argv[2];
const reverseStr = function(inputString) {
  let reverseString = "";
  for(let index = inputString.length-1;index >= 0; index--) {
    reverseString = reverseString+inputString[index];
  }
  return reverseString;
}
console.log("Reverse string is",reverseStr(inputString));
