const solution = require("./brackets")

const tests = [
  {
    enter: '{[()()]}',
    expected: 1
  }, {
    enter: '([)()]',
    expected: 0
  }, {
    enter: '',
    expected: 1
  }, {
    enter: '())(()',
    expected: 0
  }, {
    enter: generateLongValid(100000),
    expected: 1
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

function generateLongValid(L) {
  let S = ''
  for (let i = 0 ; i < L ; i++) {
    S += '('
  }
  for (let i = 0 ; i < L ; i++) {
    S += ')'
  }
  return S
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
