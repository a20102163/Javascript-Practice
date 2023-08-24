function palindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] != str[j]) {
      console.log(false);
      return false;
    }
    i++;
    j--;
  }
  console.log(true);
  return true;
}

palindrome("bearaeb"); // returns true
palindrome("whatever revetahw"); // returns true
palindrome("Aloha, how are you today?"); // returns false
