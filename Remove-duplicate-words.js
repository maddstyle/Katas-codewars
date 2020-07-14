// Your task is to remove all duplicate words from string, leaving only single words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


function removeDuplicateWords(s) {
  let arr = s.split(' ')
 arr = arr.filter(function(elem,index){
     return arr.indexOf(elem) == index
 })
return arr.join(' ')

}

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') // 'alpha beta gamma delta'
