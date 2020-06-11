function anagrams(word, words) {
	//use map then use a callback function that checks if all of the letters in word exist in words
	//include a check for length
	return words.filter(function(x){
		if (x.length === word.length) {
			if (x.split("").sort().join("").toLowerCase().includes(word.split("").sort().join("").toLowerCase())) {
				return x;
			}
		}
	});
	//return another list with all of the matching words
	//or return an empty list if there are none
}

anagrams(word,words);