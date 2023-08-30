function shuffle(arr) {
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex != 0) {
    //選定一個0 ~ currrentIndex的隨機變數
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    //將currentIndex與randomIndex的值互換
    let temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  console.log(arr);
  return arr;
}

shuffle([2, 11, 37, 42]);
// returns 一個經過洗牌後的 array。
// 可能是[42, 11, 37, 2]
