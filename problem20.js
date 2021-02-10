const sort = function(arr) {
  if (!arr || arr.length <= 1) {
      return;
  }
  let head = 0;
  let end = arr.length - 1;
  while (end > head) {
      while (head < arr.length && arr[head] % 2 === 1) {
          head++;
      }
      while (end >= 0 && arr[end] % 2 === 0) {
          end--;
      }
      if (end > head) {
          let tmp = arr[end];
          arr[end] = arr[head];
          arr[head] = tmp;
      }
  }
};