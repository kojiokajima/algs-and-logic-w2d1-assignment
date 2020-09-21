// Write a fucntion that takes an array of integers (positive or negative or both) and return 
// the sum of the absolute value of each element.

const getAbsSum = function (arr) {
  let sum = 0;

  arr.forEach(element => {
    if (element >= 0) {
      sum += element;
    } else {
      sum -= element;
    }
  });

  return sum;
}

let result = getAbsSum([-1]);

console.log(result);


// getAbsSum([2, -1, 4, 8, 10]) 
// ➞ 25

// getAbsSum([-3, -4, -10, -2, -3]) 
// ➞ 22

// getAbsSum([2, 4, 6, 8, 10]) 
// ➞ 30

// getAbsSum([-1]) 
//➞ 1