// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)

  // find the first modulus num after A
  let firstVal = -1;
  let lastVal = -1;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      firstVal = i;
      break;
    }
  }
  if (firstVal === -1) {
    return 0;
  }

  return Math.floor((B - firstVal) / K) + 1;
}

module.exports = solution;
