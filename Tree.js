export const Tree = function(val, left, right, parent) {
  this.val = val || -1;
  this.left = left || null;
  this.right = right || null;
  this.parent = parent || null;
}
