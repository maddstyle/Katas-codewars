/*

Money Money, Money

Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'

Note that the principal is not taxed but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
  
Thus Mr. Scrooge has to wait for 3 years for the initial pricipal to ammount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumptions : Assume that Desired Principal 'D' is always greater than the initial principal, however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.


*/

function calculateYears(principal, interest, tax, desired){
  debugger;
  //console.log(principal + (principal*interest) - ((principal*interest)*tax));
  var years = 0;
  if(principal === desired){
    years = 0;
  }
  var start = principal;
  while(start < desired){
    var calcInt = start * interest;
    var calcTax = calcInt * tax
    var sum = start + calcInt - calcTax;
    start === sum;
    start += calcInt - calcTax;
    years++;
  
    }
  return years;
}

calculateYears(1000, 0.05, 0.18, 1100);
// 3
//keep this stuff in mind. i way over complicated my code. keep formulas in mind. simplification.









/*
CODEWARS GOOD SOLUTION

function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

calculateYears(1000, 0.05, 0.18, 1100);
// 3





function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

Test.describe("calculateYears",function() {
Test.it("Basic tests",function() { 
    testing(calculateYears(1000, 0.05, 0.18, 1100), 3)
    testing(calculateYears(1000,0.01625,0.18,1200), 14)
    testing(calculateYears(1000,0.05,0.18,1000), 0)
})})
*/