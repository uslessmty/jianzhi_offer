import { Tree } from './Tree.js';

const jundge = function(leftT, rightT) {
  if (!((leftT === null && rightT === null) || (leftT !== null && rightT !== null && leftT.val === rightT.val))) {
    return false;
  }
  if (leftT === null && rightT === null) {
    return true;
  }
  let j0 = jundge(leftT.left, rightT.right);
  let j1 = jundge(leftT.right, rightT.left);
  if (j0 && j1) {
    return true;
  }
  return false;
};
let root = new Tree(1, new Tree(2), new Tree(2));
console.log(jundge(root.left, root.right));