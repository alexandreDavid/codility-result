const solution = require("./peaks");

const tests = [
  {
    enter: [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2],
    expected: 3
  },
  {
    enter: [5],
    expected: 0
  },
  {
    enter: [ 0, 1000000000, 0 ],
    expected: 1
  },
  {
    enter: [ 1, 2, 3, 4, 5, 6 ],
    expected: 0
  },
  {
    enter: [ 0, 0, 0, 0, 0, 0, 0 ],
    expected: 0
  },
  {
    enter: [ 0, 1, 0, 0, 0 ],
    expected: 1
  },
  {
    enter: [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
    expected: 1
  },
  {
    enter: [ 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0 ],
    expected: 7
  },
  {
    enter: [ 1, 2, 3, 4, 5, 6, 5, 5, 5, 6, 5, 6 ],
    expected: 2
  },
  {
    enter: [1, 3, 2, 1],
    expected: 1
  },
  {
    enter: [1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 6, 2],
    expected: 2
  },
  {
    enter: getOneFullNum(9240),
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

function getOneFullNum(nbers) {
  let res = []
  for (let i = 0 ; i < nbers / 2 ; i++) {
    res.push(Math.floor(Math.random() * 100))
  }
  while (res.length < nbers) {
    res.push(0)
  }
  return res
}
