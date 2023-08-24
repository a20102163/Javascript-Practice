function factorPrime(n) {
  let answer = n + " = ";
  let p = 2;

  while (p <= n) {
    if (n % p == 0) {
      n /= p;
      answer += p + " x ";
    } else {
      p++;
    }
  }

  let answer2 = "";
  for (let i = 0; i < answer.length - 3; i++) {
    answer2 += answer[i];
  }
  console.log(answer2);
  return answer2;
}

factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"
factorPrime(91);
