let inputString = process.argv[2];
const vowelCountFunc = function(inputString) {
  let vowelCount = 0;
  let vowels = "a,e,i,o,u,A,E,I,O,U";
  for(let strIndex = 0;strIndex < inputString.length; strIndex ++) {
    let character = inputString[strIndex];
    for(let vowelIndex = 0;vowelIndex < vowels.length; vowelIndex ++) {
      if(character == vowels[vowelIndex]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}
console.log("Number of vowels in",inputString,"is",vowelCountFunc(inputString));
