// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let res = {};
  const dominatorValue = Math.floor(A.length / 2) + 1;
  let dominator = false;
  for (let i = 0; i < A.length; i++) {
    res[A[i]] = res[A[i]] || [];
    res[A[i]].push(i);
    if (res[A[i]].length >= dominatorValue) {
      dominator = A[i];
    }
  }
  if (dominator === false) {
    return 0;
  }
  const allVal = res[dominator].length;
  let valFirst = 0;
  let counter = 0;
  for (let i = 1; i < A.length; i++) {
    // Check first part dominator
    if (A[i - 1] === dominator) {
      valFirst++;
    }
    if (valFirst / i <= 0.5) {
      continue;
    }
    // Check second part dominator
    if ((allVal - valFirst) / (A.length - i) <= 0.5) {
      continue;
    }
    counter++;
  }
  return counter;
}
