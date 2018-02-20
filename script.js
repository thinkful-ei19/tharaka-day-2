//Finds the max value of an array of numbers
const max = function(numbers) {

  let currentMax = numbers[0];
  let i = 0;

  while(i < numbers.length) {

    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }    

    i++;
  }

  return currentMax;
}

//Finds the min value of an array of numbers
const min = function(numbers) {

  let currentMin = numbers[0];
  let j = 0;

  while(j < numbers.length) {

    if (numbers[j] < currentMin) {
      currentMin = numbers[j];
    }    
    
    j++;
  }

  return currentMin;
}


//Finds the average of an array of numbers
const average = function(numbers) {
  // your code goes here
  let average = 0;
  let sum = 0;
  
  numbers.forEach(function(num){
    sum += num;
  })

  average = sum / numbers.length;
  
  return average;
  
}


//FizzBuzz
const fizzBuzz = function(countTo) {

  let list = [];
  
  for(let i = 1; i <= countTo; i++) {
    
    
    if((i % 3 === 0) && (i % 5 === 0)) 
    {
      list.push('fizzbuzz')
    } 
    
    else if((i % 3 === 0) && (i % 5 !== 0)) 
    {
      list.push('fizz');
    }
    
    else if((i % 3 !== 0) && (i % 5 === 0)){
      list.push('buzz');
    }
    
    else 
    {
      list.push(i);
    }
  }
  
  return list;
}


//Repeat function repeats given function n times
const repeat = function(fn, n) {
  for(let i = 0; i < n; i++) {
    fn();
  }
}

const hello = function() {
  console.log('Hello world');
}

const goodbye = function() {
  console.log('Goodbye world');
}


// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let newArray = [];

  arr.forEach(function(elem){
    if(fn(elem)){
      newArray.push(elem);
    }
  });

  return newArray;
}

//Extra Credit Attempt

const filteredNames2 = console.log(filter(myNames, (name) => (name[0] === 'R')));

//Extra Credit Attempt


//
const hazardWarningCreator = function(typeOfWarning) {

  let warningCounter = 0;
  

  return function(location) {
    let times = '';
    warningCounter++;

    //Extra Credit Attempt
    if(warningCounter >= 2 || warningCounter === 0) {
      times = 'times';
    } else if(warningCounter === 1) {
      times = 'time';
    } 

    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`);

  }
}


const rocksWarning = hazardWarningCreator('Rocks on the Road');
const zombieWarning = hazardWarningCreator('Unusual amount of zombies');
const diamondStorm = hazardWarningCreator('Diamond hurricane on the way');

rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

rocksWarning('Centinela Ave and Olympic Blvd');
// => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// => The Rocks on the Road hazard has triggered 2 time(s) today!

zombieWarning('Central hospital');//1
zombieWarning('Lied Library')//2

diamondStorm('Uranus')//1
diamondStorm('Neptune')//2

let numb = [12, 32 , 34, 2, 56, 7];

let maxNum = max(numb);
let minNum = min(numb); 
let aveNum = average(numb);
let fizBuz = fizzBuzz(15);

console.log(maxNum, minNum, aveNum);
console.log(fizBuz);
repeat(hello, 5);
repeat(goodbye, 5);

