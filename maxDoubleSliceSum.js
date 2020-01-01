// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 4) {
    return 0;
  }
  let allSub = [A[1]];
  let minValue = A[1];
  let maxValue = A[1];
  A.pop();
  A.slice(1).reduce((x, y) => {
    if (minValue > y) {
      minValue = y;
    }
    if (maxValue < y) {
      maxValue = y;
    }
    if (x < 0 || y < 0) {
      allSub.push(y);
      return y;
    }
    allSub[allSub.length - 1] += y;
    return x + y;
  });
  if (allSub.length === 1) {
    return allSub[0] - minValue;
  }
  if (allSub.length === 2) {
    return Math.max(...allSub);
  }
  if (maxValue <= 0) {
    return 0;
  }
  if (minValue >= 0) {
    return allSub.reduce((x, y) => x + y) - minValue;
  }

  let max = -Infinity;
  for (let i = 0; i < allSub.length - 1; i++) {
    let min = allSub[i];
    let sum = allSub[i];
    for (let j = i + 1; j < allSub.length; j++) {
      if (allSub[j] < min) {
        min = allSub[j];
      }
      sum += allSub[j];
      if (max < sum - min) {
        max = sum - min;
      }
      if (sum - min < 0) {
        break;
      }
    }
  }
  return max;
}

module.exports = solution;
