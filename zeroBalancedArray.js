/*
Description:
An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.
*/
function ìsZeroBalanced(n){
  if (n.length === 0) return false
  const positive = [];
  let negative =[];
  const zero = [];
  n.map(v => v > 0 ? positive.push(v) : v === 0 ? zero.push(v) : negative.push(v))
  negative = negative.sort((a, b) => Math.abs(a) - Math.abs(b))
  if(!positive.sort((a, b) => a - b).every((v, i) => Math.abs(negative[i]) === Math.abs(v))) return false
  if (zero.length > 0 && positive.length === negative.length) return true
  if (positive.length !== negative.length) return false
  return n.reduce((a, b) => a + b, 0) === 0
}
