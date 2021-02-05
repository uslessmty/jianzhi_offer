const f0 = function(s) {
  return s.replace(' ', '%20');
};
const f1 = function(s) {
  let tmp = [];
  let part = '';
  for (let c of s)
  {
    if (c === ' ')
    {
      tmp.push(part);
      part = '';
    }else
    {
      part = part + c;
    }
  }
  if (part !== '')
  {
    tmp.push(part);
  }
  let res = '';
  for (let v of tmp)
  {
    res = res + v + '%20';
  }
  return res;
};

console.log(f1('hello world'));