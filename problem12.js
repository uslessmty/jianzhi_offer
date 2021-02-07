const m = [['a', 'b', 'c'], ['a', 'b', 'c'], ['a', 'b', 'c']];
const target = 'aaa';
const x = m.length;
const y = m[0].length;
const visited = new Array(x * y);
visited.fill(0);
const findPath = function(row, col, index) {
  if (index === target.length) {
    return true;
  }
  if (row >= x || row < 0 || col >= y || col < 0 || visited[row * y + col] || m[row][col] !== target[index]) {
    return false;
  }
  visited[row * y + col] = 1;
  if (findPath(row + 1, col, index + 1) || findPath(row, col + 1, index + 1) || findPath(row - 1, col, index + 1) || findPath(row, col - 1, index + 1)) {
    return true
  }
  return false;
};
console.log(findPath(0, 0, 0));