// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  searching = [];
  const pairs = { "{": "}", "[": "]", "(": ")" };
  for (let i = 0; i < S.length; i++) {
    let search = pairs[S[i]];
    if (search) {
      searching.push(search);
    } else if (S[i] === searching[searching.length - 1]) {
      searching.pop();
    } else {
      return 0;
    }
  }
  return searching.length ? 0 : 1;
}

module.exports = solution;
