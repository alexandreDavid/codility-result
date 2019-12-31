const solution = require("./maxSliceSum");

const tests = [
  {
    enter: [3, 2, -6, 4, 0],
    expected: 5
  },
  {
    enter: [3, 2, -4, 5, 0],
    expected: 6
  },
  {
    enter: [-2, 3],
    expected: 3
  },
  {
    enter: [-3, -2, -1],
    expected: -1
  },
  {
    enter: [-2, 1, 1],
    expected: 2
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

function pyramid(L) {
  let pyramid = []
  for (let i = 1 ; i < L ; i++) {
    pyramid.push(i)
  }
  for (let i = L ; i > 0 ; i--) {
    pyramid.push(i)
  }
  return pyramid
}
