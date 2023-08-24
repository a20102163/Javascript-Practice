function reverse(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
  console.log(result);
  return result;
}

reverse("abcd"); // returns "dcba"
reverse("I am a good guy."); // returns ".yug doog a ma I"
