function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) return false;
  }
  return true;
}

console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false
