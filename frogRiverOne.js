// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let fallenLeaves = {}
  let validNumb = X
  for (let i = 0 ; i < A.length ; i++) {
      const posLeaf = A[i]
      if (posLeaf <= X &&  !fallenLeaves[posLeaf]) {
          fallenLeaves[posLeaf] = true
          validNumb--
      }
      if (!validNumb) {
          return i
      }
  }
  
  return -1
}