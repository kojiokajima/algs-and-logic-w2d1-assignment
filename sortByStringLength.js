// Create a function that returns an array of strings 
// sorted by length in ascending order.

//all string lengths in an array will be different (dont worry about two of the same length)

const sortByLength = function(arr) {

  arr.sort((a, b) => a.length - b.length);

  return arr;
  
}

console.log(sortByLength([]));

// sortByLength(["a", "ccc", "dddd", "bb"]) 
//➞ ["a", "bb", "ccc", "dddd"]

//sortByLength(["apple", "pie", "shortcake"]) 
//➞ ["pie", "apple", "shortcake"]

//sortByLength(["may", "april", "september", "august"]) 
//➞ ["may", "april", "august", "september"]

//sortByLength([]) 
//➞ []