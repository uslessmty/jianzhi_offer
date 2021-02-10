import { Tree } from './Tree.js';
const judge = function(root0, root1) {
  if (root1 === null) {
    return true;
  }
  if (root0 === null) {
    return false;
  }
  if (root0.val !== root1.val) {
    return false;
  }
  return judge(root0.left, root1.left) && judge(root0.right, root1.right);
}
const hasSubTree = function(root0, root1) {
  let res = false;
  if (root0 != null && root1 != null) {
    if (root0.val === root1.val) {
      res = judge(root0, root1);
    }
    if (!res) {
      res = hasSubTree(root0.left, root1);
    }
    if (!res) {
      res = hasSubTree(root0.right, root1);
    }
  }
  return res;
}
let root0 = new Tree(1, new Tree(2), new Tree(3));
let root1 = new Tree(2);
console.log(hasSubTree(root0, root1));
