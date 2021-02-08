const power = function(base, exponent) {
  if (exponent === 1) {
    return base;
  }else if (exponent === 0) {
    return 1;
  }else if (exponent < 0) {
    return power(1 / base, -exponent);
  }
  if (exponent % 2 === 0) {
    let tmp = power(base, exponent / 2);
    return tmp * tmp;
  }else {
    let tmp = power(base, Math.floor(exponent / 2));
    return tmp * tmp * base;
  }
};
console.log(power(2, 5));
