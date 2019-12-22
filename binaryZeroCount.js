/**
 * From an integer, the function counts the number of zero in a row
 * of its binarry value
 * 
 * @param {Integer} N The integer
 */

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = (N >>> 0).toString(2)
  const reg = /(0*?)1/g;
  let res = 0;
  while((result = reg.exec(binary)) !== null) {
      const zeroNum = result[1].length
      res = (zeroNum > res) ? zeroNum : res
  }
  return res
}
