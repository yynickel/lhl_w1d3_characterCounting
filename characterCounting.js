const countLetters = function(str) {
  str = str.split(" ").join("");
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]])
      result[str[i]]++;
    else
      result[str[i]] = 1;
  }
  return result;
};

const positionLetters = function(str) {
  str = str.split(" ").join("");
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]])
      result[str[i]] = [];
    result[str[i]].push(i);
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));
console.log(positionLetters("lighthouse in the house"))