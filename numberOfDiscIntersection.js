// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let intersects = 0;
  let maxIntersects = Math.pow(10, 7)
  let maxBorder = []
  if (A.length <= 1) {
      return 0
  }
  let maxRadius = A.reduce((x,y) => Math.max(x, y))
  if (!maxRadius) {
      return 0
  }
  for (let i = 0 ; i < A.length ; i++) {
    for (let j = 0 ; j < maxBorder.length ; j++) {
        if (maxBorder[j] >= i - A[i]) {
            intersects++
            if (intersects > maxIntersects) {
                return -1
            }
        }
    }
    maxBorder.push(A[i] + i)
  }
  return intersects;
}

module.exports = solution;
