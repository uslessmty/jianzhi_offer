import { Tree } from './Tree.js'
const fn = function(num, root) {
  let res = [];
  let isFind = false;
  const rec = function(tree) {
    if (tree === null && num === 0) {
      isFind = true;
      return;
    } else if (tree === null) {
      return;
    }
    res.push(tree.val);
    num = num - tree.val;
    console.log(num);
    rec(tree.left);
    if (isFind) {
      return;
    }
    rec(tree.right);
    if (!isFind) {
      res.pop();
      num = num + tree.val;
    }
  };
  rec(root);
  return res;
}

let root = new Tree(1, new Tree(2));
console.log(fn(4, root));