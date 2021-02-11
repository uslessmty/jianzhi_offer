const min_stack = {
  stack: [],
  min: [],
  push(val) {
    if (this.stack.length === 0 || val < this.stack[this.stack.length - 1]) {
      this.min.push(val);
    } else {
      this.min.push(this.min[this.min.length - 1])
    }
    this.stack.push(val);
    return this;
  },
  pop() {
    this.min.pop();
    return this.stack.pop();
  },
  min_val() {
    return this.min[this.min.length - 1];
  }
};
min_stack.push(1).push(2).push(3);
console.log(min_stack.min_val());
