// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // Don't need to do more than 3 numbers for the average
  let startIdx = 0;
  let curVal = (A[0] + A[1]) / 2;

  for (let i = 2; i < A.length; i++) {
    // If the current value is higher than the current average,
    // it means it's not included in the result
    if (curVal > A[i]) {
      const avgLastTwo = (A[i - 1] + A[i]) / 2
      const avgLastThree = (A[i - 2] + A[i - 1] + A[i]) / 3

      // Compare avg of the 3, 2 and the current
      if (avgLastTwo < curVal && avgLastTwo < avgLastThree) {
        startIdx = i - 1;
        curVal = avgLastTwo
      } else if (avgLastThree < curVal && avgLastThree < avgLastTwo) {
        startIdx = i - 2;
        curVal = avgLastThree
      }
    }
  }
  return startIdx;
}

module.exports = solution;
