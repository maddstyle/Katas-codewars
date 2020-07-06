function printerError(s) {
  const l = s.length;   // calculates length of string
  let count = 0;   // defines variable count
  for (i = 0; i < l; i++ ){   // for loop is used to go through each character of string
  const regexp = new RegExp('[^a-m]');   // define a regular expression object which checks if the character is not a-m
     if(regexp.test(s[i])==true) {   // tests if the character is a-m
       count = count + 1;   // if the test runs as true, increase count by 1
     }
    }
    return(count+'/'+l);   // returns the number of times character was not a-m / total characters
};