// aabbcc ==> a2b2c2

const letterCount = (str) => {
  let strCount = '';
  let startIndex = 0;

  while (startIndex < str.length) {
    // start counting
    let endIndex = startIndex + 1;

    while (endIndex < str.length) {
      if (str[endIndex] !== str[startIndex]) break;
      endIndex++;
    }

    strCount += `${str[startIndex]}${endIndex - startIndex}`;
    startIndex = endIndex;
  }

  return strCount;
};

console.log(
  letterCount(''),
  letterCount('a'),
  letterCount('aabbcc'),
  letterCount('abbbbbbc'),
  letterCount('abbbbabbbbc'),
);