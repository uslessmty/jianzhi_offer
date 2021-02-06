import  { Tree }  from './Tree.js'
const makeTree = function (pre, mid, p_left, p_right, m_left, m_right) {
  if (p_left >p_right) {
    return null;
  }
  if (p_left === p_right)
  {
    return new Tree(pre[p_left])
  }

  let target_val = pre[p_left];
  let mid_index = m_left;
  while (mid_index <= m_right && mid[mid_index] != target_val) {
    mid_index++;
  }
  let target = new Tree(target_val);
  target.left = makeTree(pre, mid, p_left + 1, p_left + mid_index - m_left, m_left, mid_index - 1);
  target.right = makeTree(pre, mid,p_left + mid_index - m_left + 1, p_right,mid_index + 1, m_right);
  return target;
};
const t = makeTree([1, 2, 3, 4], [2, 1, 3, 4], 0, 3, 0, 3);
console.log(t);
