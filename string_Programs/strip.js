let inputString = process.argv[2];
let strip = "";
const stripFunc = function(inputString) {
  for(index = 0; index < inputString.length; index++) {
    if(inputString[index] != ' ') {
      strip = strip+inputString[index];
    }
  }
  return strip;
}
console.log(stripFunc(inputString));
