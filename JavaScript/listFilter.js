function filter_list(l) {
  const numbers = l.filter(numbersOnly);

  function numbersOnly(value) {
    let n = typeof value === "number";
    return n;
  }
  return numbers;
}
