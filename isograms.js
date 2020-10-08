// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.



function isIsogram(str) {
  str = str.toLowerCase().split("").sort().join();

  for (let i = 0; i < str.length -1; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  } return true;
};


//Testing
isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case