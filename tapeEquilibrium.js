// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const tot = Math.abs(A.reduce((x, y) => x + y))

  let sum = A[0]
  let best = Infinity
  for (let i = 1 ; i < A.length ; i++) {
    let curCalc = Math.abs(tot - 2 * Math.abs(sum))
    if (curCalc < best) {
      best = curCalc
    }
    sum += A[i]
  }
  return best
}

module.exports = solution
