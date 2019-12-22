const solution = require("./tapeEquilibrium")

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

function generateArraySmallInt(L) {
  let arr = []
  for (let i = 0 ; i < L; i++) {
    arr.push(Math.floor((Math.random() - 0.5) * 20))
  }
  return arr
}

const startTime = new Date().getTime()
const arr = generateArraySmallInt(10)
const sol = solution(arr)
console.log(sol)
console.log(`${(new Date().getTime() - startTime)*.001}s`)
