// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let res = Array(3).fill(-Infinity);
  let negative = [0, 0];

  function newNum(num) {
    if (res[0] < res[1] && res[0] < res[2]) {
      res[0] = num;
    } else if (res[1] < res[2]) {
      res[1] = num;
    } else {
      res[2] = num;
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] < 0) {
      const maxNegative = Math.max(...negative);
      if (A[i] < maxNegative) {
        if (negative[0] < negative[1]) {
          negative[1] = A[i];
        } else {
          negative[0] = A[i];
        }
      }
    }
    const min = Math.min(...res);
    if (A[i] > min) {
      newNum(A[i]);
    }
  }
  return Math.max(res.reduce((x, y) => x * y), negative[0] * negative[1] * Math.max(...res));
}

module.exports = solution;
