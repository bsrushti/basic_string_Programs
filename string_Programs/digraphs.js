let inputString = process.argv[2];
const diagraphs = function(inputString) {
  let strikeString = "";
  for(let index = 0; index < inputString.length; index++) {
    if(inputString[index] == inputString[index+1]) {
      console.log(inputString[index]+inputString[index]);
    } 
  }
}
diagraphs(inputString);
