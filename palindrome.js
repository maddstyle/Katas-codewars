function palindrome(str) {
  str.split('').every((char, i) => {
     return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
