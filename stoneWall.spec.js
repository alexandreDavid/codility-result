const solution = require("./stoneWall");

const tests = [
  {
    enter: [8, 8, 5, 7, 9, 8, 7, 4, 8],
    expected: 7
  },
  {
    enter: pyramid(100000),
    expected: 100000
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
