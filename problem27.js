import { Tree } from './Tree.js';
const reverseTree = function(root) {
  if (root === null) {
     return null;
  }
  let tmp = root.right;
  root.right = root.left;
  root.left = tmp;
  root.right = reverseTree(root.right);
  root.left = reverseTree(root.left);
  return root;
}
let root = new Tree(1, new Tree(2), new Tree(3));
console.log(reverseTree(root));
