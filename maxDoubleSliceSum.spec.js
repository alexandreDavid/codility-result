const solution = require("./maxDoubleSliceSum");

const tests = [
  {
    enter: [3, 2, -6, 4, 0],
    expected: 6
  },
  {
    enter: [3, 2, -4, 5, 0],
    expected: 7
  },
  {
    enter: [-2, 3],
    expected: 0
  },
  {
    enter: [-3, -2, -1],
    expected: 0
  },
  {
    enter: [-2, 1, 1],
    expected: 0
  },
  {
    enter: [-2],
    expected: 0
  },
  {
    enter: [],
    expected: 0
  },
  {
    enter: [3, 2, 6, -1, 4, 5, -1, 2],
    expected: 17
  },
  {
    enter: [5, 5, 5],
    expected: 0
  },
  {
    enter: [3, 2, 6, -1, 4, 5, -1, 3, 1],
    expected: 19
  },
  {
    enter: [5, 17, 0, 3],
    expected: 17
  },
  {
    enter: [6, 1, 5, 6, 4, 2, 9, 4],
    expected: 26
  },
  randomZeros(100000, 6),
  {
    enter: [6, -1, 5, 6, -4, 2, 9, 4],
    expected: 22
  }, 
  {
    enter: [-4, -5, -1, -5, -7, -19, -11],
    expected: 0
  },
  {
    enter: randomOnes(100000),
    expected: 1
  }
];

tests.forEach(test => {
  const startTime = new Date().getTime();
  const sol = solution(test.enter);
  if (sol !== test.expected) {
    console.error(`Error: expected ${test.expected} but return ${sol}`);
  } else {
    console.log("OK");
  }
  console.log(`${(new Date().getTime() - startTime) * 0.001}s`);
});

function randomZeros (L, expected) {
  let enter = [1, expected]
  for (let i = 0 ; i < L ; i++) {
    enter.push(0)
  }
  return { enter, expected }
}

function randomOnes (L) {
  let enter = []
  for (let i = 0 ; i < L ; i++) {
    enter.push(Math.random() * 2 - 1)
  }
  return enter
}
