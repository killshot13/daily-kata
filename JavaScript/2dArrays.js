/**
 * Given a 2D array of size m * n. ind the sum of minimum value in each row
 */

function sumOfMinimums(arr) {
  const min = [];

  arr.forEach(function (i) {
    if (Array.isArray(i)) {
      min.push(Math.min(...i));
    } else {
      min.push(i);
    }
  });
  return min.reduce(function (a, b) {
    return a + b;
  }, 0);
}
