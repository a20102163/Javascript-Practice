function fib(n) {
  if (n == 0) {
    console.log(0);
    return 0;
  } else if (n == 1) {
    console.log(1);
    return 1;
  }

  let fib_sequence = [0, 1];
  while (fib_sequence.length <= n) {
    let last_element = fib_sequence[fib_sequence.length - 1];
    let second_last_element = fib_sequence[fib_sequence.length - 2];
    fib_sequence.push(last_element + second_last_element);
  }
  console.log(fib_sequence[fib_sequence.length - 1]);
  return fib_sequence[fib_sequence.length - 1];
}

fib(0); // returns 0
fib(1); // returns 1
fib(2); // returns 1
fib(3); // returns 2
fib(8); // returns 21
