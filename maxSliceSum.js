// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 2) {
    return A[0] || 0;
  }
  let maxSum = A[0];
  if (A[0] < 0) {
    A[0] = 0
  }
  A.reduce((x, y) => {
    const sum = x + y;
    if (y > maxSum) {
      maxSum = y;
    }
    if (sum < 0) {
      return 0;
    } else if (sum > maxSum) {
      maxSum = sum;
    }
    return sum;
  });
  return maxSum;
}

module.exports = solution;
