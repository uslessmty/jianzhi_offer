function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for(let i=0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}
const tree = [ 'a', ['b', 'c'], ['d', 'e'] , [['f']]];
let res = [];
for(let x of iterTree(tree)) {
  res.push(x);
}
console.log(res);