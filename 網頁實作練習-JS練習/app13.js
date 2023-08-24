function isPrime(n) {
  if (n == 1) {
    console.log(false);
    return false;
  }

  let start = 2;
  while (start < n) {
    if (n % start == 0) {
      console.log(false);
      return false;
    }
    start++;
  }

  console.log(true);
  return true;
}

isPrime(1); // returns false
isPrime(2);
isPrime(5); // returns true
isPrime(91); // returns false
isPrime(1000000); // returns false
