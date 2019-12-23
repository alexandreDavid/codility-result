// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let existingNums = {}
  const maxExpected = A.length

  for (let i = 0; i < maxExpected; i++){
    if (A[i] > maxExpected){
      return 0
    }

    existingNums[A[i]] = true
  }

  return Object.keys(existingNums).length === maxExpected ? 1 : 0
}

module.exports = solution
