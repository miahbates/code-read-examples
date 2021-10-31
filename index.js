// Problem 1 

function swap(input) {
  let split = input.split(" ");
  for (let i = 0; i < split.length; i++) {
    let splitWord = split[i].split("");
    let firstLetter = splitWord[0];
    let lastLetter = splitWord[splitWord.length -1];
    
    
    splitWord[0] = lastLetter;
    splitWord[splitWord.length -1] = firstLetter;
    
     split[i] = splitWord.join('');
  }
  
  return split.join(' ')
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

// Problem 4
function transform(arg1, callback) {
  const results = [];
  for (let i = 0; i < arg1.length; i++) {
    if (callback(arg1[i])) {
      results.push(arg1[i]);
    }
  }
  return results;
}

function method(x) {
   return x !== 10;
} 

// console.log(transform([10, 20, 30], method));

// Probelem 5
function transform(input, callback) {
  let x = [];
   input.forEach(value => {
     callback(value)
     if (callback(value) === true) {
       x.push(value);
     }
   });
  return x;
}

// console.log(transform([10,3,5], num => num % 5 === 0));

// Problem 6

function transform(input) {
  let firstVariable = input.filter(x => x % 5 !== 0);
  let secondVariable = firstVariable.map(x => x * x);
  let thirdVariable = secondVariable.reduce((sum, x) => sum + x, 0);
  return thirdVariable;
 }


// console.log(transform([10, 2, 35, 4, 5]));

// Problem 7

function transform(input) {
  let variable = input.slice().sort();
  console.log(variable);
  let x = variable.reduce((x, y) => x + '-' + y);
  return x;
}

// console.log(transform([3,10,15,2]));

// Problem 8

function sortByLength(words) {
  words.sort((a, b) => a.length - b.length);
  return words;
}

// console.log(sortByLength(['miah', 'gus','ash', 'hi']));
