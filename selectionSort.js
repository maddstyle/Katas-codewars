function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[j] < arr[indexOfMin]) {
      indexOfMin = j;
    }
  }

  if (indexOfMin !== i ) {
    let lesser = arr[indexOfMin];
    arr[indexOfMin] = arr[i];
    arr[i] = lesser;
  } 

  return arr;
 }
 

 module.exports = selectionSort;