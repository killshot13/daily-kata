/**
 * Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
 */

function filter_list(l) {
  const numbers = l.filter(numbersOnly);

  function numbersOnly(value) {
    let n = typeof value === "number";
    return n;
  }
  return numbers;
}
return filter_list;
