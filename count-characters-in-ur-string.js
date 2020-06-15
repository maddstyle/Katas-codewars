// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  const strObj = {};
  const strArr = string.split('');
  strArr.map(function(element) {
    if (strObj.hasOwnProperty(element)) {
      strObj[element] = strObj[element] + 1;
    } else { 
      strObj[element] = 1;
    }
  });
   return strObj;
}