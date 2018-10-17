let inputString = process.argv[2];
const countConst = function(inputString) {
  let constCount = 0;
  let constChars = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  for(let strIndex = 0;strIndex < inputString.length; strIndex ++) {
    let letter = inputString[strIndex];
    for(let constIndex = 0;constIndex < constChars.length; constIndex ++) {
      if(letter == constChars[constIndex]) {
        constCount++;
      }
    }
  }
  return constCount;
}

console.log("Number of consonants in",inputString,"is",countConst(inputString));
