// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let peakIdxs = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      peakIdxs.push(i);
    }
  }

  for (let i = A.length; i > 0; i--) {
    if (A.length % i == 0) {
      let curBlockIdx = 0;
      let blockLength = A.length / i;
      for (let j in peakIdxs) {
        const peakIdx = peakIdxs[j];
        if (
          curBlockIdx * blockLength <= peakIdx &&
          peakIdx < (curBlockIdx + 1) * blockLength
        ) {
          curBlockIdx++;
        }
      }
      if (curBlockIdx === i) {
        return i;
      }
    }
  }

  return 0;
}

module.exports = solution;
