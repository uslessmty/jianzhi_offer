//手写new
function my_new(fn) {
  let o = {};
  Object.setPrototypeOf(o, fn.prototype);
  var tmp = fn.apply(o, Array.from(arguments).slice(1));
  if ((typeof tmp === 'object' || typeof tmp === 'function') && tmp != null)
  return o;
}
//手写call
Function.prototype.my_call = function(obj = window) {
  obj.fn = this;
  let res = obj.fn(...(Array.from(arguments).slice(1)));
  delete obj.fn;
  return res;
}
//手写apply
Function.prototype.my_apply = function(obj = window, args) {
  obj.fn = this;
  let res;
  if (args !== undefined)
    res = obj.fn(...args);
  else 
    res = obj.fn();
  delete obj.fn;
  return res;
}
//手写bind
Function.prototype.my_bind = function(content = window) {
  let fn = this;
  let args = [...arguments].slice(1);
  return function() {

    if (new.target) {
      let o = new fn(...args, ...arguments);
      return o;
    }
    return fn.apply(content, args.concat(...arguments));
  }
}
//手写柯里化
const curry = (fn, arr=[]) => (...args) => (
  arg => arg.length === fn.length 
    ? fn(...arg) 
    : curry(fn, arg)  
)([...arr, ...args]);
//手写防抖
function debounce(fn, wait = 50, immediate) {
  let timer;
  return function() {
    let res;
    clearTimeout(timer);
    if (immediate) {
      let callnow = !timer;
      timer = setTimeout(() => timer = null, wait);
      if (callnow) 
          res = fn.apply(this, arguments);
    } else {
        timer = setTimeout(() => res = fn.apply(this, arguments), wait);
    }
    return res;
  }
}
//手写节流
function throttle (fn, wait) {
  let pre = 0;
  return function() {
    let now = +new Date();
    if (now - pre > wait) {
      let res = fn.apply(this, arguments);
      pre = now
      return res;
    }
  }
}
//手写深拷贝
function deepCopy(obj) {
  if (typeof obj === 'object') {
    let tmp = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      tmp[key] = deepCopy(obj[key]);
    }
    return tmp;
  } else {
    return obj;
  }
}
//手写instancof
function myintanceof(obj, fn) {
  let sup = fn.prototype;
  while (obj.__proto__) {
    if (obj.__proto__ === sup) {
      return true;
    }
    obj = obj.__proto__;
  }
  return false;
}
//手写Promise.all
Promise.myAll = function(args) {
  return new Promise(function(resolve, reject) {
    let len = args.length;
    let res = [];
    let count = 0;
    if (len === 0) resolve(res);
    for (let [i, p] of args.entries()) {
      p.then(function(data) {
        res[i] = data;
        count++;
        if (count === len) resolve(res);
      }, function(err) {
        reject(err);
      })
    }
  });
}
