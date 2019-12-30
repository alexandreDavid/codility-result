// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let res = {};
  const dominatorValue = Math.floor(A.length / 2) + 1;
  let dominator;
  for (let i = 0; i < A.length; i++) {
    res[A[i]] = res[A[i]] || 0;
    res[A[i]]++;
    if (res[A[i]] >= dominatorValue) {
      return i;
    }
  }
  return -1;
}
