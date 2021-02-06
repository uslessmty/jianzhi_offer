import  { Tree }  from './Tree.js'
const nextNode = function(node) {
  let next = null;
  if (node.right)
  {
    next = node.right;
    while (next.left) {
      next = next.left;
    }
  } else {
    let pre_node = node;
    let parent = node.parent;
    while (parent != null && parent.right === pre_node)
    {
      pre_node = parent;
      parent = parent.parent;
    }
    next = parent;
  }
  return next;
}
const root = new Tree(1);
const left = new Tree(2, null, null, root)
const right = new Tree(3, null, null, root)
root.left = left;
root.right = right;

console.log(nextNode(left));

