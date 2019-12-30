// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // you can write to stdout for debugging purposes, e.g.
  // console.log('this is a debug message');

  let nbFishes = 0;
  let downstream = [];
  for (let i = 0; i < B.length; i++) {
    if (B[i]) {
      downstream.push(A[i]);
    } else {
      for (let j = downstream.length - 1; j >= 0; j--) {
        if (downstream[j] - A[i] < 0) {
          downstream.pop();
        } else {
          break;
        }
      }
      if (!downstream.length) {
        nbFishes++;
      }
    }
  }
  return nbFishes + downstream.length;
}

module.exports = solution;
