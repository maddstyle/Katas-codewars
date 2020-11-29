function findMissingNumber(sequence){
  if(sequence === ""){
    return 0;
  }
 else if (!/^(\d+ )+\d+$/gi.test(sequence)){
   return 1;
  }
  else{
  let arr = sequence.split(' ').map(x => +x);
  let max = Math.max(...arr);
  for(let i = 1; i < max; ++i)
    if (arr.find(x => x == i) == undefined)
    return i;
  return 0;
  }
}