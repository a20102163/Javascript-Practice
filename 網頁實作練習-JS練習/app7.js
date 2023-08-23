function findSmallerTotal(arr, n) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      total += arr[i];
    }
  }
  console.log(total);
  return total;
}

findSmallerTotal([1, 2, 3], 3); // returns 3
findSmallerTotal([1, 2, 3], 1); // returns 0
findSmallerTotal([3, 2, 5, 8, 7], 999); // returns 25
findSmallerTotal([3, 2, 5, 8, 7], 0); // returns 0
