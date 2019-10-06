let inputString = process.argv[2];
const reverseString = function(inputString) {
  let reverseStr = "";
  for(let index = inputString.length-1;index >= 0; index--) {
    reverseStr = reverseStr+inputStr[index];
  }
  return reverseStr;
}
console.log("Reverse of String is",reverseString(inputString));
