// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  let res = [];
  const letters = { A: 1, C: 2, G: 3, T: 4 };

  for (let i = 0; i < P.length; i++) {
    const part = S.substring(P[i], Q[i] + 1);
    for (let l in letters) {
      if (part.includes(l)) {
        res.push(letters[l]);
        break;
      }
    }
  }
  return res;
}
