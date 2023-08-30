function mySort(arr) {
  let workingIndex = arr.length - 1;
  while (workingIndex >= 0) {
    // 找到index 0 到 workingIndex 區間內，最大值為？
    let biggest = arr[0];
    let biggestIndex = 0;
    for (let i = 0; i < workingIndex; i++) {
      if (arr[i] > biggest) {
        biggest = arr[0];
        biggestIndex = i;
      }
    }

    //將 biggest 與 arr[workingIndex]互換
    let temp = arr[biggestIndex];
    arr[biggestIndex] = arr[workingIndex];
    arr[workingIndex] = temp;

    workingIndex--;
  }
  console.log(arr);
}

mySort([17, 4, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]
