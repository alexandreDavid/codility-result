// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let nbOpen = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      nbOpen++;
    } else {
      nbOpen--;
      if (nbOpen < 0) {
        return 0;
      }
    }
  }
  return nbOpen ? 0 : 1;
}
