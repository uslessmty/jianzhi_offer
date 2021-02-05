const f0 = function(arr){
  let hash = new Array(arr.length);
  for (let val of arr) {
    if (hash[val] === 1)
    {
      return val;
    }else if (hash[val] === undefined)
    {
      hash[val] = 1;
    }
  }
}
console.log(f0([3,2,3,4,5]));
