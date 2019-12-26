function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let res = Array(A.length).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] <= A.length) {
      res[A[i] - 1]++;
    }
  }

  const idx = res.findIndex(x => x === 0);
  return (idx > -1 ? idx : A.length) + 1;
}
