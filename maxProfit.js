// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 2) {
    return 0;
  }

  let maxProfit = 0;
  let valueStart = A[0];
  for (let i = 1; i < A.length; i++) {
    const diff = A[i] - valueStart;
    if (diff < 0) {
      valueStart = A[i];
    } else if (maxProfit < diff) {
      maxProfit = diff;
    }
  }

  return maxProfit;
}
