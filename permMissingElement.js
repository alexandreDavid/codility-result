// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let s = 0
  let f = 0
  let i = 0
  for (; i < A.length; i++) {
      s += A[i];
      f += i + 1;
  }
  f += i + 1
  
  return (f - s)
}
