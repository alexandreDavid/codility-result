const solution = require("./minAvgTwoSlice")

function generateArray(L, odd) {
  let arr = []
  for (let i = 0 ; i < (L-1)/2 ; i++) {
    const val = Math.floor(Math.random() * L)
    arr.push(val)
    arr.push(val)
  }
  arr.push(odd)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  return shuffleArray(arr)
}

function generateArraySmallInt(L, max) {
  let arr = []
  for (let i = 0 ; i < L; i++) {
    arr.push(Math.floor((Math.random()) * max))
  }
  return arr
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

function generateArrayInt3same(L) {
  let arr = []
  for (let i = 0 ; i < L / 3; i++) {
    arr.push(i, i, i)
  }
  return shuffleArray(arr)
}

const startTime = new Date().getTime()
// const arr = generateArraySmallInt(10)
// const sol = solution([2, 0, 2, 2, 1, 0])
// const sol = solution([5, 5, 0, 5, 5, 5])
// const sol = solution([9, 5, 7, 3, 2, 7, 3, 1, 10, 8])
// const sol = solution(5, [3, 4, 4, 6, 1, 4, 4])
const sol = solution([-3, -5, -8, -4, -10])
console.log(sol)
console.log(`${(new Date().getTime() - startTime)*.001}s`)
