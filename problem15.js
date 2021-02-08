const countOne = function(target) {
  let num = 0;
  while(target) {
    num++;
    target = (target - 1) & target;
  }
  return num;
};
console.log(countOne(1023));
