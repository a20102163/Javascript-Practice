function isUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  if (str[0] == str[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isUpperCase("ABCD")); // returns true
console.log(isUpperCase("")); // returns false
console.log(isUpperCase("aBCD")); // returns false
