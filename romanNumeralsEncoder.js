// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
//Solution 1:
/*
function solution(number){
  var thousand={"1":"M","2":"MM","3":"MMM","4":"MMMM","5":"MMMMM","6":"MMMMMM","7":"MMMMMMM","8":"MMMMMMMM","9":"MMMMMMMMM"};
  var hundred={"1": "C","2":"CC","3":"CCC","4":"CD","5":"D","6":"DC","7":"DCC","8":"DCCC","9":"CM"};
  var ten={"1": "X","2":"XX","3":"XXX","4":"XL","5":"L","6":"LX","7":"LXX","8":"LXXX","9":"XC"};
  var single={"1":"I","2":"II","3":"III","4":"IV","5":"V","6":"VI","7":"VII","8":"VIII","9":"IX"};
  var numArr=[single,ten,hundred,thousand];
  return   number.toString().split("").reverse().map(function(ele,index){
            return numArr[index][ele];
         }).reverse().join("");
}
*/
//Solution 2: use array of object not an object in this case
// because properties of an object in JavaScript do not have an order. There may appear to be an order in some browsers but the ECMAScript specification defines object property enumeration order as being implementation-specific so you should not assume one browser's behaviour will be the same as another's. Chrome, for example, does not use the same ordering as some other browsers: see this lengthy bug report for at least as much discussion of this issue as you could possibly want.

// If you need a specific order, use an array, or two arrays (one for keys and one for values).

function solution(number){
  var value = 0;
  var romanStr = "";
  var  roman = [{M:1000},{CM:900}, {D:500},{CD:400},{C:100},{XC:90},{L:50},{XL:40},{X:10},{IX:9},{V:5},{IV:4},{I:1} ];
  for(var i = 0; i < roman.length; i++){
    for(var key in roman[i]){
      while(value + roman[i][key] <= number){
         value += roman[i][key];
         romanStr += key;
      }
    }
   }
  return romanStr;
 }