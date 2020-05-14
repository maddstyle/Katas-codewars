function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

   for (let char in charMap) {
     if (charMap[char] > max) {
       max = charMap[char];
       maxChar = char;
     }
   }

  return maxChar;
  // console.log(charMap);
}
  
module.exports = maxChar;
