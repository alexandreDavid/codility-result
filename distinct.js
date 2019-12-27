// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let res = {};
  
  for (let i = 0 ; i < A.length ; i++) {
      res[A[i]] = true;
  }
  return Object.keys(res).length;
}
