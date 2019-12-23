function solution(T) {
  // write your code in JavaScript (Node.js 8.9.4)

  function getLink (origin, link, cur) {
    // [2, 0, 2, 2, 1, 0]
    // {0: 0, 1: 0, 2: 0, 3: -1, 4: -1, 5: 0}
    // {0: 0, 1: 0, 2: 0, 3: 2, 4: 1, 5: 0} --> 6
    for (let i = origin ; i < T.length ; i++) {
      if ((T[i] === cur || T[cur] === i) && (typeof link[i] === "undefined")) {
        link[i] = cur
        getLink(origin, link, i)
      }
    }
  }

  let possiblePaths = 0
  for (let i = 0 ; i < T.length ; i++) {
    let link = {}
    link[i] = i
    getLink(i, link, i)

    let maxVal = i
    let prevKey = i - 1
    for (const [key, value] of Object.entries(link)) {
      if (key - prevKey !== 1) {
        break
      }
      prevKey = key
      maxVal = maxVal < value ? value : maxVal
      if (key >= maxVal) {
        possiblePaths++
      }
    }
  }

  return possiblePaths
}

module.exports = solution;
