// Find max-length sequence of elements that goes from left to right and
// each element is greater than the previous element
const deepEqual = require('./deep-equal');

const longest = (list) => {
  if (list.length === 1) return list;

  const _list = longest(list.slice(0, -1));
  const _last = _list[_list.length - 1];

  const last = list[list.length - 1];

  if (last > _last) return [..._list, last];
  return _list;
}

const longestIncreasingSubsequence = (list) => {
  const l = longest(list);
  console.log(l);
  return l;
}

const list = [6, 2, 5, 1, 7, 4, 8, 3];
const expected = [2, 5, 7, 8];

console.log(deepEqual(longestIncreasingSubsequence(list), expected) ? 'CORRECT' : 'INCORRECT');