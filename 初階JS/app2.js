function distance(h, n) {
  let result = h;
  for (let i = 2; i <= n; i++) {
    result += 2 * (h / Math.pow(2, i - 1));
  }
  return result;
}

console.log(distance(100, 4)); // 275
console.log(distance(500, 7)); // 1484.375

//落地問題: 一球從h米高度自由落下，每次落地後反跳回原高度的一半，再落下。求小球在第n次落地時，總共經過多少公尺？編寫一個名為distance的函式，參數為h與n，回傳值為小球經過的總距離。
