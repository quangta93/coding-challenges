// Given array a
// Find (i, j) such that lcm(a[i], a[j]) is minimum
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const lcm = (a, b) => (a * b / gcd(a, b))

const minLcm = nums => {
  let min = 10e7;
  let tuple = {};

  for (let i = 0; i < nums.length - 1; i ++) {
    for (let j = i + 1; j < nums.length; j++) {
      const _lcm = lcm(nums[i], nums[j]);

      if (_lcm < min) {
        min = _lcm;
        tuple = {i, j};
      }
    }
  }

  return [tuple.i + 1, tuple.j + 1];
};

console.log(
  minLcm([2, 4, 8, 3, 6]),
  '\n',
  minLcm([5, 2, 11, 3, 7]),
  '\n',
  minLcm([2, 5, 10, 1, 10, 2]),
  '\n',
);
