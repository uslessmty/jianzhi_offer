const maxLength = function(n) {
  let memo = [-1, 0, 1];
  if (n < 3) {
    return memo[n];
  }
  let index = 3;
  while (index <= n) {
    let max = -1;
    let end = Math.floor(index / 2);
    for (let i = 1; i <= end; i++) {
      max = Math.max(memo[i] * memo[index - i], 
        i * (index - i), 
        i * memo[index - i], 
        memo[i] * (index - i), 
        max);
      memo.push(max);
      //console.log(max);
    }
    index++;
  }
  return memo.pop();
};
console.log(maxLength(4));