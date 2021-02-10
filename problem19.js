var isMatch = function(s, p) {
  let n = s.length;
  let m = p.length;
  let f = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
      f[i] = new Array(m + 1);
      f[i].fill(false);
  }
  for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= m; j++) {
          if (j === 0) {
              f[i][j] = i == 0;
          } else {
              if (p[j - 1] != '*') {
                  if (i > 0 && (s[i - 1] === p[j - 1] || p[j - 1] === '.')) {
                      f[i][j] = f[i - 1][j - 1];
                  }
              } else {
                  if (j >= 2) {
                      f[i][j] = (f[i][j] || f[i][j - 2]) ? true : false;
                  }
                  if (i >= 1 && j >= 2 && (s[i - 1] === p[j - 2] || p[j - 2] === '.')) {
                      f[i][j] = (f[i][j] || f[i - 1][j]) ? true : false;
                  }
              }
          }
      }
  }
  return f[n][m];
};