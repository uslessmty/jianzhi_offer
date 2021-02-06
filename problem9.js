const queue = {
  stack0: [],
  stack1: [],
  appendTail(val) {
    this.stack0.push(val);
  },
  deleteHead() {
    if (this.stack1.length === 0){
      while (this.stack0.length)
      {
        this.stack1.push(this.stack1.pop());
      }
    }
    return this.stack1.pop();
  }
}
const stack = {
  queue0: [],
  queue1: [],
  push(val) {
    this.queue0.push(val);
    while(this.queue1.length) {
      this.queue0.push(this.queue1.shift());
    }
    let tmp = this.queue0;
    this.queue0 = this.queue1;
    this.queue1 = tmp;
  },
  pop() {
    return this.queue1.shift();
  }
}
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop(), stack.pop(), stack.pop());
