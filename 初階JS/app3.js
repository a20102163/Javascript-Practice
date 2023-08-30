function PPDI() {
  //100, 101, 102, ..., 999
  for (let i = 100; i <= 999; i++) {
    //給定一個數字，怎麼知道個位數，十位數，百位數？
    let unit = i % 10;
    let tens = Math.floor(i / 10) % 10;
    let hundreds = Math.floor(i / 100) % 10;

    let sum = Math.pow(unit, 3) + Math.pow(tens, 3) + Math.pow(hundreds, 3);
    if (sum == i) {
      console.log(i);
    }
  }
}

PPDI();
// 153
// 370
// 371
// 407
//打印出所有的"水仙花數"。所謂"水仙花數"是指一個三位數，其各位數字立方和等於該數本身。例如：153是一個"水仙花數"，因為$153=1^3+5^3+3^3$，或370也是水仙花數，因為$370=3^3+7^3+0^3$。
