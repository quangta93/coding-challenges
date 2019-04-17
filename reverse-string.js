// https://www.youtube.com/watch?v=cdCeU8DJvPM

const reverse = str => {
  const chars = str.split('');
  const len = str.length;

  for (let index = 0; index < Math.floor(len / 2); index ++) {
    const ch = chars[index];
    chars[index] = chars[len - index - 1];
    chars[len - index - 1] = ch;
  }

  return chars.join('');
}

console.log(
  reverse('abc'),
  reverse('abcdef'),
);

const findMissing = (fullList, missingList) => {
  const hashmap = {};

  for (let num of fullList) {
    if (!hashmap[num]) {
      hashmap[num] = 1;
    } else {
      hashmap[num] += 1;
    }
  }

  for (let num of missingList) {
    if (hashmap[num] === 1) {
      delete hashmap[num];
    } else {
      hashmap[num] -= 1;
    }
  }

  return parseInt(Object.keys(hashmap)[0], 10);
};


console.log(
  findMissing(
    [4, 12, 9, 5, 6],
    [4, 9, 12, 5]
  )
);
