function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let pairs = 0;
  let curNum = A.length;
  let zeroNum = 0;
  for (let i = 0; i < A.length; i++) {
    curNum--;
    if (!A[i]) {
      pairs += curNum - zeroNum;
      zeroNum++;
    }
  }
  if (pairs > Math.pow(10, 9)) {
    return -1;
  }
  return pairs;
}
