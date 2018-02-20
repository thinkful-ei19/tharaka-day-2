const max = function(numbers) {
  // we set `currentMax` to the value
  // of first item in `numbers`,
  // then we loop through `numbers`,
  // comparing each item to `currentMax`.
  // if the item is greater than `currentMax`,
  // we set `currentMax` to that number.
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
  // we set `currentMin` to the value
  // of first item in `numbers`,
  // then we loop through `numbers`,
  // comparing each item to `currentMin`.
  // if the item is less than `currentMin`,
  // we set `currentMin` to that number.
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


let numb = [12, 32 , 34, 2, 56, 7];

maxNum = max(numb);
minNum = min(numb); 
console.log(maxNum, minNum);

