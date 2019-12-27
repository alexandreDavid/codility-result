// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let res = {}
  for (let i = 0 ; i < A.length ; i++) {
      if (A[i] > 0) {
          res[A[i]] = res[A[i]] ? res[A[i]] + 1 : 1;
          if (res[A[i]] === 3) {
              return 1
          }
      }
  }

  let prevKey = -Infinity;
  let valLessThan = -Infinity;
  for (let [key, value] of Object.entries(res)) {
      if (key < valLessThan) {
          return 1;
      }
      valLessThan = parseInt(key) + parseInt(prevKey)
      if (value > 1) {
          if (key < valLessThan) {
              return 1;
          }
          valLessThan = 2 * key
      }
      prevKey = key
  }
  return 0
}
