// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 2) {
    return A[0] || 0;
  }
  let maxSum = A[0];
  A.reduce((x, y) => {
    if (x < 0) {
      x = 0;
    }
    const sum = x + y;
    if (sum > maxSum) {
      maxSum = sum;
    }
    return sum;
  });
  return maxSum;
}

module.exports = solution;
