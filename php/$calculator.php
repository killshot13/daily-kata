/**
* Create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
*/

<?php
function calculator($a, $b, $sign)
{
  switch ($a) {
    case null:
      echo "unknown value";
      break;
  }

  switch ($b) {
    case null:
      echo "unknown value";
      break;
  }

  switch ($sign) {
    case "+":
      return $a + $b;
      break;

    case "-":
      return $a - $b;
      break;

    case "*":
      return $a * $b;
      break;

    case "/":
      return $a / $b;
      break;

    default:
      return "unknown value";
      break;
  };
};
