/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
    return arr[0]; // complete this statement
}

function last(arr) {
    return arr[arr.length - 1]; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];
var numbers2 = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));
console.log(last(numbers2));
/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/