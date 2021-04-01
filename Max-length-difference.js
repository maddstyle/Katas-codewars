

function mxdiflg(a1, a2) {
	if (a1.length === 0 || a2.length === 0) {
		return -1;
	}
	var a1len = a1.map(function(word) {return word.length});
	var a2len = a2.map(function(word) {return word.length});
	
	return Math.max(Math.max(...a1len) - Math.min(...a2len) , Math.max(...a2len) - Math.min(...a1len));
}



