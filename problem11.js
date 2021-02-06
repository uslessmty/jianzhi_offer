const reverse = function(arr, start, end) {
  while (start < end) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start++;
    end--;
  }
};
const rotate = function(arr, n) {
  reverse(arr, 0, n);
  reverse(arr, n + 1, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
};
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr);
