let inputString = process.argv[2];
let character =  process.argv[3];
const strikeOut = function(inputString,character) {
  let strikeString = "";
  for(let index = 0; index < inputString.length; index++) {
    if(inputString[index] != character) {
      strikeString = strikeString+inputString[index];
    } else {
      strikeString = strikeString+'-';
    }
  }
  return strikeString;
}
console.log(strikeOut(inputString,character));
