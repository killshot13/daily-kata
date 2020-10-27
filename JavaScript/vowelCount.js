//Return the number (count) of vowels in the given string. Consider a, e, i, o, u as vowels for this kata.

function getCount(str) {
  if (str.match(/[aeiou]/gi)) {
    return str.match(/[aeiou]/gi).length;
  } else {
    return 0;
  }
}
