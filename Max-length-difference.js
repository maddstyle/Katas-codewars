/* You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 or a2 are empty return -1 in each language except in Haskell where you will return Nothing.
 */
// var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
// var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

function mxdiflg(a1, a2) {
	if (a1.length === 0 || a2.length === 0) {
		return -1;
	}
	var a1len = a1.map(function(word) {return word.length});
	var a2len = a2.map(function(word) {return word.length});
	
	return Math.max(Math.max(...a1len) - Math.min(...a2len) , Math.max(...a2len) - Math.min(...a1len));
}


// console.log(mxdiflg(s1, s2));
