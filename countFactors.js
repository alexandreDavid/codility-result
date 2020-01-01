// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counter = 0;
  let sqrt = Math.sqrt(N);
  for (let i = 1; i <= sqrt; i++) {
    if (N % i == 0) {
      counter += N / i === i ? 1 : 2;
    }
  }
  return counter;
}

module.exports = solution;
