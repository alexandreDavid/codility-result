// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counter = 0;
  let tmpHeight = [];

  for (let i = 0 ; i < H.length; i++) {
    for (let j = tmpHeight.length - 1; j >= 0; j--) {
      if (tmpHeight[j] < H[i]) {
        tmpHeight.push(H[i]);
        counter++;
        break;
      } else if (tmpHeight[j] === H[i]) {
        break;
      } else {
        tmpHeight.pop();
      }
    }
    if (!tmpHeight.length) {
      tmpHeight.push(H[i]);
      counter++;
    }
  }
  return counter;
}

module.exports = solution;
