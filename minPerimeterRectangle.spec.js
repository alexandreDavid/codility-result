const solution = require("./minPerimeterRectangle");

const tests = [
  {
    enter: 30,
    expected: 22
  },
  {
    enter: 100000000,
    expected: 40000
  },
  {
    enter: 982451653,
    expected: 1964903308
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
