//Max and min
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


//Average
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
function fizzBuzz(countTo) {

  let list = [];
  
  for(let i = 1; i <= countTo; i++) {
    
    
    if((i % 3 === 0) && (i % 5 === 0)) 
    {
      list.push("fizzbuzz")
    } 
    
    else if((i % 3 === 0) && (i % 5 !== 0)) 
    {
      list.push("fizz");
    }
    
    else if((i % 3 !== 0) && (i % 5 === 0)){
      list.push("buzz");
    }
    
    else 
    {
      list.push(i);
    }
  }
  
  return list;
}






let numb = [12, 32 , 34, 2, 56, 7];

let maxNum = max(numb);
let minNum = min(numb); 
let aveNum = average(numb);
let fizBuz = fizzBuzz(15);

console.log(maxNum, minNum, aveNum);
console.log(fizBuz);

