// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let min = Infinity;
  // The best thing is the square so
  for (let i = Math.ceil(Math.sqrt(N)); i >= 1; i--) {
    if (N % i == 0) {
      return 2 * (N / i + i);
    }
  }
}

module.exports = solution;
