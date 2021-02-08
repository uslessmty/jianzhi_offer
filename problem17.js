const addition = function(str0, str1) {
  let length = Math.max(str0.length, str1.length);
  let short = Math.min(str0.length, str1.length);
  let res = new Array(length);
  let left = Array.prototype.slice.apply(str0, [0, str0.length]).reverse();
  let right = Array.prototype.slice.apply(str1, [0, str1.length]).reverse();
  let idx = 0;
  while (idx < short) {
    res[idx] = parseInt(left[idx]) + parseInt(right[idx]);
    idx++;
  }
  while (idx < str0.length) {
    res[idx] = parseInt(left[idx]);
    idx++;
  }
  while (idx < str1.length) {
    res[idx] = parseInt(right[idx]);
    idx++;
  }
  idx = 0;
  while (idx < res.length - 1) {
    if (res[idx] > 9) {
      res[idx] = res[idx] % 10;
      res[idx + 1]++;
    }
    idx++;
  }
  if (res[res.length - 1] > 9) {
    res[res.length - 1] = res[res.length - 1] % 10;
    res.push(1);
  }
  let ans = '';
  for (let c of res.reverse()) {
    ans += c;
  }
  return ans;
}


console.log(addition('200', '1800'));