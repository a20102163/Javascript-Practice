function swap(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  console.log(result);
  return result;
}

swap("Aloha"); // returns "aLOHA"
swap("Love you."); // returns "lOVE YOU."
