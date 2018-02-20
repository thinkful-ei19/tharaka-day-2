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







let numb = [12, 32 , 34, 2, 56, 7];

let maxNum = max(numb);
let minNum = min(numb); 
let aveNum = average(numb);

console.log(maxNum, minNum, aveNum);

