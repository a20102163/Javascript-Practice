function stars(n) {
  let star = "";
  for (let i = 1; i <= n; i++) {
    star += "*";
    console.log(star);
  }
}

stars(1);
// *
stars(4);
// *
// **
// ***
// ****
stars(10);
