// Problem 1 

function swap(input) {
  let splitStr = string.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    let splitWord = splitStr[i].split("");
    let firstLetter = splitWord[0];
    let lastLetter = splitWord[splitWord.length -1];
    
    
    splitWord[0] = lastLetter;
    splitWord[splitWord.length -1] = firstLetter;
    
     splitStr[i] = splitWord.join('');
  }
  
  return splitStr.join(' ')
}

// console.log(swap("Miah is very tired"));





// Problem 2

function transform(input) {
  return input.reduce((a, b) =>  a + b, 10); 
}

// console.log(transform([1,2,4,5]));





// Problem 3
function transform(input) {
  let newArr = []
  let split = input.toLowerCase().split("");
  for (let i = 0; i < split.length; i++) {
    if ((split[i] !== "a") &&
        (split[i] !== "e") &&
        (split[i] !== "i") &&
        (split[i] !== "o") &&
        (split[i] !== "u")) {
         newArr.push(split[i]);
       } 
  }
  return newArr.join("");
  
}

// console.log(transform("Miah is very tired"));
