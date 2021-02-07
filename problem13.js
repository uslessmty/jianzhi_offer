const m = [[0, 0, 0, 0], [0, 0, 0, 0]];
const x = m.length;
const y = m[0].length;
const visited = new Array(x * y);
const k = 2;
let count = 0;
const compute = function(row, col) {
  let res = 0;
  while (row > 0) {
    res += row % 10;
    row = Math.floor(row / 10);
  }
  while (col > 0) {
    res += col % 10;
    col = Math.floor(col / 10);
  }
  return res;
};
const countCell = function(row, col) {
  if (row >= x || row < 0 || col >= y || col < 0 || visited[row * y + col]) {
    return;
  }
  
  visited[row * y + col] = 1;
  if (compute(row, col) > k) {
    return;
  }
  count++;
  countCell(row + 1, col);
  countCell(row, col + 1);
  countCell(row - 1, col);
  countCell(row, col - 1);
};
countCell(0, 0);
console.log(count);
