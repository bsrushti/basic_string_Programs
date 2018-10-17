let inputString = process.argv[2];
const checkPallindrome = function(inputString) {
  let reverseString = "";
  let message = "pallindrome";
  for(let index = inputString.length-1;index >= 0; index--) {
    reverseString = reverseString+inputString[index];
  }
  if(reverseString != inputString) {
    message = "not pallindrome";
  }
  return message;
}
console.log(inputString,"is",checkPallindrome(inputString));

