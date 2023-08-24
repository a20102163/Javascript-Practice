function printStars(space, star) {
  let result = "";
  for (let i = 0; i < space; i++) {
    result += " ";
  }
  for (let i = 0; i < star; i++) {
    result += "*";
  }
  console.log(result);
}

function pyramid(k) {
  let star = 1;
  let space = k - 1;
  while (space >= 0) {
    printStars(space, star);
    star += 2;
    space -= 1;
  }
}

pyramid(1);
//*
pyramid(2);
//  *
// ***
pyramid(4);
//    *
//   ***
//  *****
// *******
