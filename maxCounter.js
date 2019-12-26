// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let res = Array(N).fill(0);
  let max = 0;
  let nextMax = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      if (res[A[i] - 1] < nextMax) {
        res[A[i] - 1] = nextMax;
      }
      res[A[i] - 1]++;

      if (res[A[i] - 1] > max) {
        max = res[A[i] - 1];
      }
    } else {
      nextMax = max;
    }
  }

  return res.map(val => (val > nextMax ? val : nextMax))
}

module.exports = solution;
