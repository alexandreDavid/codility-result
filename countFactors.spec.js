const solution = require("./countFactors");

const tests = [
  {
    enter: 1,
    expected: 1
  },
  {
    enter: 2,
    expected: 2
  },
  {
    enter: 3,
    expected: 2
  },
  {
    enter: 24,
    expected: 8
  },
  {
    enter: 1948102,
    expected: 16
  },
  {
    enter: 3628800,
    expected: 270
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
