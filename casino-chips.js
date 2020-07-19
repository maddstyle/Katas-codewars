// You are given three piles of casino chips: white, green and black chips:

// the first pile contains only white chips
// the second pile contains only green chips
// the third pile contains only black chips
// Each day you take exactly two chips of different colors and head to the casino. You can chose any color, but you are not allowed to take two chips of the same color in a day.

// You will be given an array representing the number of chips of each color and your task is to return the maximum number of days you can pick the chips. Each day you need to take exactly two chips.

// solve([1,1,1]) = 1, because after you pick on day one, there will be only one chip left
// solve([1,2,1]) = 2, you can pick twice; you pick two chips on day one then on day two
// solve([4,1,1]) = 2

function solve(chips, count = 0) {
  chips = chips.sort((a, b) => b - a);
  let sum;
  while (sum != chips[0]) {
    let [first, second, third] = chips;
    if (third) {
      third--;
    } else {
      second--;
    }
    count++;
    first--;

    if (second > first) {
      chips = [second, first, third];
    } else {
      chips = [first, second, third];
    }
    sum = first + second + third;
  }
  return count;
}