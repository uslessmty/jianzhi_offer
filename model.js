//单例
let Single = (() =>{
  let _instance = null;
  let _clazz = function(name) {
    this.name = name;
  }
  return {
    getInstance(name) {
      if (!_instance) {
        _instance = new _clazz(name);
      }
      return _instance;
    }
  }
})();