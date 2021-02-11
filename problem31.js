let push_str = '12345';
let pop_str = '43512';
let stack = [];
let idx_push = 0;
let idx_pop = 0;
while (idx_push < push_str.length) {
  if (push_str[idx_push] === pop_str[idx_pop]) {
    idx_push++;
    idx_pop++;
  } else if (stack.length > 0 && stack[stack.length - 1] === pop_str[idx_pop]) {
    stack.pop();
    idx_pop++;
  } else {
    stack.push(push_str[idx_push])
    idx_push++;
  }
}
while (stack.length > 0 && stack[stack.length - 1] === pop_str[idx_pop]) {
  stack.pop();
  idx_pop++;
}
if (stack.length === 0) {
  console.log(true);
} else {
  console.log(false);
}