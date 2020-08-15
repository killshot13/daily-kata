//Write function parseF which takes an input and returns a number or null if conversion is not possible.

function parseF(s) {
  let res = parseFloat(s);
  if (isNaN(res))
    return null;
  else 
    return res;
}
return parseF;