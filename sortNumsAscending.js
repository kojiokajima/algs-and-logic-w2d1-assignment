// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.

const sortNumsAscending = function (arr) {

  let newArr = [];

  if (arr) {
    newArr = arr.sort((a, b) => a - b);
    return newArr;
  } else {
    return newArr;
  }

}

console.log(sortNumsAscending([]));

//sortNumsAscending([1, 2, 10, 50, 5]) 
//➞ [1, 2, 5, 10, 50]

//sortNumsAscending([80, 29, 4, -95, -24, 85]) 
//➞ [-95, -24, 4, 29, 80, 85]

//sortNumsAscending(null) 
//➞ []

//sortNumsAscending([]) 
//➞ []
