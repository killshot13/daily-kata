/**
* Write function parseFloat which takes an input and returns a number or Nothing if conversion is not possible.
*/

<?php
function parseFloat(string $s)
{
  $my_int = floatval($s);
  echo $my_int;
  if (is_nan($my_int)) {
    return "Nothing";
  } else {
    return $my_int;
  }
}
?>
