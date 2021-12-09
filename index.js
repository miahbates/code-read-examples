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

// Problem 9
function find(arr, callback) {
  let result = arr.findIndex(x => callback(x) === true)
   if (result !== -1 ) {
     return result;
   } else {
     return undefined;
   }
}

// const arr = [1, 2, 6, 4];
// console.log(find(arr, n => n > 5));

// Problem 10 

function transform(input) {
  return input.filter(e => !!e);
}

// console.log(transform([7,"foo", false, "", 0, "miah", {}, 27, [0]]));

// Problem 11


function transform(input) {
  if (input.length <= 1) {
    return input;
  }
  let ans = input.reduceRight((acc, current) => acc.concat(current), []);
  let x = Array.from(ans);
  let y = x.map(Number);
return y;
}

// console.log(transform([1, 2, 3, 4, 5]));

// Problem 12 

function alphabetPosition(text) {
  let arr = [];
  let string = "abcdefghijklmnopqrstuvwxyz";
  
  let textLower = text.toLowerCase();
  
  for (let i = 0; i < textLower.length; i++) {
    let index = string.indexOf(textLower[i]);
    if (index >= 0) {
      arr.push(index + 1);
    }
   }  
  return arr.join(" ");

}

// console.log(alphabetPosition("I'm learning to code"));

// Problem 13 

function transform(arg) {
  let variable1 = [];
  let variable2 = [];
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] !== 4) {
      variable1.push(arg[i]);
    } else if (arg[i] === 4) {
      variable2.push(arg[i]);
    }
  }
  let variable3 = variable1.concat(variable2);
  return variable3;
}

// console.log(transform([false,1,4,1,2,4,1,3,"a","b",4]));

// Problem 14
function types(inputs) {
  return inputs.map(a => typeof a);
}

// console.log(types([
//   'foo',
//   [],
//   undefined,
//   null,
//   40,
//   NaN
// ]));

// Problem 15 

function transform(arg){
  let variable = arg.split(" ");
  for (let i = 1; i < variable.length; i+=2) {
      variable[i] = variable[i].split("").reverse().join("");
    }
  return variable.join(" ").trim();
}

// console.log(transform('Miah is very tired and needs to go to sleep'));

// Problem 16

function transform(arg) {
  let variable1 = arg.toString().split("");
  let variable2 = variable1.map((element) => element * element );
  return parseInt(variable2.join(""));
}

// or 

const transform = (arg) => parseInt(
  arg.toString().split("").reduce((acc, item) => acc + '' + item * item , "")
);

// console.log(transform(9119));

// Problem 17 

const clock = {
  hours: 12,
  minutes: 10,
  seconds: 2,
  get time() { return `${this.hours}:${this.minutes}:${this.seconds}`},
  set time(input) { 
    let split = input.split(":");
    this.hours = parseInt(split[0]);
    this.minutes = parseInt(split[1]);
    this.seconds = parseInt(split[2]);
  },
  get madrid() { return`${this.hours + 1}:${this.minutes}:${this.seconds}` },  
  
}

// set 
// console.log(clock.time = "16:00:00");

// //get 
// console.log(clock.time);

// // get madrid 
// console.log(clock.madrid);

// Problem 18

function transform(input) {
  let variable1 = input.split("");
  let newArr = []
  let variable2 = variable1.filter(element => element !== 'o')
  let reversedArr = variable2.reverse();
  let finalAns = [];
   for (let i = 0; i < variable2.length; i+=2) {
     finalAns.push(variable2[i]);
   }
   return finalAns.join("");
  }
  
  // console.log(transform("ooooo!xo!roatoooyxoooiwohooo"))

  // Problem 19 

  function transform(x) {
    const [one, two, three, four, five="!"] = x.split('');
    return `${four+two+five}`;
  }
  
  // console.log(transform('miah'));
  


