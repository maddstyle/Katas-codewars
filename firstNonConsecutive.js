// Your task is to find the first element of an array that is not consecutive.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that’s the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!


function firstNonConsecutive (arr) {
  // Initialize default value to increment
  let previous = arr[0];
  // Establish a variable to collect the non consecutive integer
  let first;
  for (let i = 1; i < arr.length; i++) {
    // If prev value is not equal to the next element array val
    if ((previous + 1) !== arr[i]) {
      // You've found your first non consecutive and break
      first = arr[i];
      break;
    }
    previous ++;
  }
  // return null if first is never set
  return first !== undefined ? first : null;
}
