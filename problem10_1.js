const fib = function(n) {
  let pre = 0;
  let cur = 1;
  if (n === 0) {
    return pre;
  }
  if (n === 1) {
    return cur;
  }
  while (n > 1) {
    let next = pre + cur;
    pre = cur;
    cur = next;
    n--;
  }
  return cur;
}
console.log(fib(10));
