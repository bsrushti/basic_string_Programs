let inputString = process.argv[2];
let inputSubStr = process.argv[3];
const subStrFreq = function(inputString,inputSubStr) {
  let charCount = 0;
  let subStrCount = 0;
  let tokenSubStr = 0;
  for(let inptStrIndx = 0; inptStrIndx < inputString.length; inptStrIndx++) {
    if(inputString[inptStrIndx] == inputSubStr[tokenSubStr]) {
      tokenSubStr ++;
      charCount ++;
    } else {
      charCount = 0;
      tokenSubStr = 0;
    }
    if(charCount == inputSubStr.length) {
      subStrCount++;
    }
  }
  return subStrCount;
}
console.log(subStrFreq(inputString,inputSubStr));
