const findNum = function(arr, target) {
  let row = arr.length;
  let col = arr[0].length;
  let i = row - 1;
  let j = 0;
  while (i >= 0 && j < col)
  {
    if (arr[i][j] > target)
    {
      i--;
    }else if (arr[i][j] < target)
    {
      j++;
    }else
    {
      return true;
    }
  }
  return false;
}

let arr = [[1, 2], [3, 4]];
console.log(findNum(arr, 5));