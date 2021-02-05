const Singleton = function(data) {
  this.data = data;
};
Singleton.getInstance = (function() {
  let instance = null;
  return function() {
    if (instance === null)
    {
      instance = new Singleton('hi');
    }
    return instance;
  }
})();


const getSingle = function(fn) {
  let instance = null;
  const tmp = new fn; 
  return function() {
    if (instance === null) {
      fn.apply(tmp, arguments);
      instance = tmp;
    }
    return instance;
  }
};
let f = getSingle(Object);


let obj0 = Singleton.getInstance();
let obj1 = Singleton.getInstance();

let obj2 = f();
let obj3 = f();

console.log(obj1 === obj0, obj2 === obj3);
