//original long solution
function reverse(str) {
  const arr = str.split("");
  arr.reverse();
  arr.join("");
  return arr.join("");
}
//cleaned up code
function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
//solution 2
function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
//solution 3
function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}
//solution 3 ES6 way
function reverse(str) {
  debugger;
  str.split("").reduce((rev, char) => char + rev, "");
}
reverse('asdf')


module.exports = reverse;
