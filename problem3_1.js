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
  return -1;
};

const f1 = function(arr) {
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] !== i)
    {
      if (arr[arr[i]] === arr[i])
      {
        return arr[i];
      }else 
      {
        let tmp = arr[i];
        arr[i] = arr[arr[i]];
        arr[arr[i]] = arr[i];
      }
    }
  }
  return -1;
}


console.log(f1([0, 2, 2, 3, 1]));
