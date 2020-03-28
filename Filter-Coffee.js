function search(budget, prices) {
  let budgetArray = [];
  for(let i of prices) {
    if(i <= budget) {
      budgetArray.push(i)
  }
 }
  return budgetArray.sort((a, b) => a - b).join()
}