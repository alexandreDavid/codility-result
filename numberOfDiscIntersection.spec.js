const solution = require("./numberOfDiscIntersection")

const tests = [
  {
    enter: [1, 5, 2, 1, 4, 0],
    expected: 11
  }, {
    enter: [1, 1, 1],
    expected: 3
  }, {
    enter: [1, 0, 1, 0, 1],
    expected: 6
  }, {
    enter: new Array(10000).fill(0),
    expected: 0
  }
]

tests.forEach(test => {
  const startTime = new Date().getTime()
  const sol = solution(test.enter)
  if (sol !== test.expected) {
    console.error(`Error: expected ${test.expected} but return ${sol}`)
  } else {
    console.log('OK')
  }
  console.log(`${(new Date().getTime() - startTime)*.001}s`)
})

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
