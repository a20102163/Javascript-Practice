function findSmallCount(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      count++;
    }
  }
  return count;
}

console.log(findSmallCount([1, 2, 3], 2)); // returns 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0
